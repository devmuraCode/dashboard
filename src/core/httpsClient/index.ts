import axios from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constants";
import toast from "react-hot-toast";
// import { router } from "../../routers/router";

export const httpClient = axios.create({
  baseURL: "https://api.statistics.splay.uz",
  headers: { "Content-Type": "application/json" },
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token) {
    config.headers = Object.assign(config.headers, {
      Authorization: "Bearer " + token,
    }); 
    return config;
  } else {
    return config;
  }
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    toast.error(error.response.data.detail);
    
    if (originalConfig.url === "/api/token" && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
        if (!refreshToken) {
          toast.error(error.response.data.detail);
          originalConfig._retry = false;
          return Promise.reject(error);
        }
        try {
          const rs = await httpClient.post("/api/token/refresh/", {
            refresh: refreshToken,
          });

          const { accessToken } = rs.data;
          localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

          return httpClient(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  }
);
