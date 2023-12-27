import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import APIQueryClient from "./APIQueryClient";
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
} from "@/utils/localStorageUtils";

// const PROD_BASE_URL = "https://space-rental-api.vercel.app";

// export const ADMIN_BASE_URL = PROD_ADMIN_BASE_URL; // Adjust as per your environment setup
const BASE_URL = process.env.EXPO_PROD_BASE_URL;

const APICONFIG = axios.create({ baseURL: BASE_URL });

//#region Refreshing process and unauthorized request queue
let isRefreshingToken = false;
let requestQueue: any = [];

const addRequestToQueue = (callback: any) => {
  requestQueue.push(callback);
};

const processRequestQueue = (accessToken: string) => {
  while (requestQueue.length) {
    const currentRequest = requestQueue.shift();
    currentRequest(accessToken);
  }
};

APICONFIG.interceptors.request.use((config:any) => {
  config.headers.Authorization = "Bearer " + getAccessToken();
  return config;
});

APICONFIG.interceptors.response.use(
  undefined,
  async (error): Promise<AxiosResponse> => {
    const originalRequest = error?.config;
    const refreshToken = getRefreshToken();

    if (
      error?.response?.status === 401 &&
      !originalRequest?._retry &&
      !!refreshToken
    ) {
      originalRequest._retry = true;

      // Token refresh process
      if (!isRefreshingToken) {
        isRefreshingToken = true;
        try {
          const response = await axios.post(
            `${BASE_URL}/api/Auth/TokenRefresh`,
            {
              refreshToken,
            }
          );
          const accessToken = response?.data?.data?.accessToken;
          setAccessToken(accessToken);
          processRequestQueue(accessToken);
        } catch (refreshError) {
          removeTokens();
          processRequestQueue("false");
          APIQueryClient.resetQueries();
        } finally {
          isRefreshingToken = false;
        }
      }

      // Add request to queue
      return new Promise((resolve, reject) => {
        addRequestToQueue((accessToken : any) => {
          if (accessToken) {
            originalRequest.headers["Authorization"] = "Bearer " + accessToken;
            resolve(axios(originalRequest));
          }
          reject(originalRequest);
        });
      });
    }

    return Promise.reject(error);
  }
);

//#endregion

export default APICONFIG;
