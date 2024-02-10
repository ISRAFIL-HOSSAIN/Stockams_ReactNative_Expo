// adminAPI.js
import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
} from "../utils/localStorageUtils";
import { QueryClient } from "@tanstack/react-query";

const ADMIN_BASE_URL = "https://space-rental-api.vercel.app";

const adminAPI = axios.create({ baseURL: ADMIN_BASE_URL });

// Move adminQueryClient creation here
const defaultQueryFn = async ({ queryKey, signal }) => {
  const { data } = await adminAPI(`${queryKey[0]}`, { signal });
  return data;
};

const adminQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
      queryFn: defaultQueryFn,
    },
  },
});

// Add adminQueryClient to adminAPI for export
adminAPI.adminQueryClient = adminQueryClient;

// #region Refreshing process and unauthorized request queue
let isRefreshingToken = false;
let requestQueue = [];

const addRequestToQueue = (callback) => {
  requestQueue.push(callback);
};

const processRequestQueue = (accessToken) => {
  while (requestQueue.length) {
    const currentRequest = requestQueue.shift();
    currentRequest(accessToken);
  }
};

adminAPI.interceptors.request.use(async (config) => {
  config.headers.Authorization = "Bearer " + await getAccessToken();
  // console.log(config.headers.Authorization);
  return config;
});

adminAPI.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error?.config;
  const refreshToken = await getRefreshToken();

  if (
    error?.response?.status === 401 &&
    !originalRequest?._retry &&
    !!refreshToken
  ) {
    originalRequest._retry = true;

    // Token refresh process
    if (!isRefreshingToken) {
      isRefreshingToken = true;
      axios
        .post(`${ADMIN_BASE_URL}/api/Authentication/TokenRefresh`, {
          refreshToken,
        })
        .then(async ({ data = {} }) => {
          await setAccessToken(data?.data?.accessToken);
          await processRequestQueue(data?.data?.accessToken);
        })
        .catch(async () => {
          await removeTokens();
          await processRequestQueue(false);
          adminAPI.adminQueryClient.resetQueries();
        })
        .finally(() => {
          isRefreshingToken = false;
        });
    }

    // Add request to queue
    return new Promise((resolve, reject) => {
      addRequestToQueue((accessToken) => {
        if (accessToken) {
          originalRequest.headers["Authorization"] = "Bearer " + accessToken;
          resolve(axios(originalRequest));
        }
        reject(originalRequest);
      });
    });
  }

  return Promise.reject(error);
});

// #endregion

export default adminAPI;
