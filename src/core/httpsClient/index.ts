import axios  from "axios";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY, ROUTES } from "../../constants";
export const httpClient = axios.create({
  baseURL: "https://api.statistics.splay.uz",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  
  if (token) {
    config.headers = Object.assign(config.headers, { Authorization: "Bearer " + token });
    return config;
  } else {
    
    return config;
  }
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const stopReaction = error.response.config.headers?.stopReaction;
    if (!stopReaction) {
      const status = (error.response && error.response.status) || 0;

      if (status === 401) {
        Navigate({to: ROUTES.USER_SIGN_IN});
      } else if (status === 403) {
        alert('Something when wrong')
      } else if (status >= 400) {
        if (error.response) {
        alert('Something when wrong')

        }
      }
    }

    return Promise.reject(error);
  },
);

