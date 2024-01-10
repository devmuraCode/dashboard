import axios from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constants";
import toast from "react-hot-toast";

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
    toast.loading(`${"Right"}\n${"The enter the wrong password again "}`);
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    toast.error(error.response.data.detail);

      if ((error.response.status === 403 || error.response.status === 401) && !originalConfig._retry) {
        originalConfig._retry = true;
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

        if (!refreshToken) {
          toast.error("Refresh token is missing");
          originalConfig._retry = false;
          return Promise.reject(error);
        }

        try {
          const refreshResponse = await httpClient.post("/api/token/refresh/", {
            refresh: refreshToken,
          });

          const newAccessToken = refreshResponse.data.access;

          localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);

          originalConfig.headers = Object.assign(originalConfig.headers, {
            Authorization: "Bearer " + newAccessToken,
          }); 

          return httpClient(originalConfig);
        } catch (refreshError) {
          toast.error("Failed to refresh token");
          return Promise.reject(refreshError);
        }
      
    }
    return Promise.reject(error);
  }
);

