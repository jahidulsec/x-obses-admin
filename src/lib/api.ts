import axios from "axios";
import { cookies } from "next/headers";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add interceptor to refresh token when request fails
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = await cookies().get("refreshToken");

      // Token expired
      const refreshResponse = await api.post("/api/auth/v1/token/admin", {
        refreshToken: refreshToken,
      });

      error.config.headers[
        "Authorization"
      ] = `Bearer ${refreshResponse.data.accessToken}`;
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);
