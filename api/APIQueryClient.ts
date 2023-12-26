import { QueryClient } from "@tanstack/react-query";
import APICONFIG from "./API";

const ON_PRODUCTION = false
const defaultQueryFn = async ({ queryKey, signal }:{queryKey:any,signal:any}) => {
  const { data } = await APICONFIG(`${queryKey[0]}`, { signal });
  return data;
};

const APIQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
      refetchOnWindowFocus: ON_PRODUCTION,
      refetchOnReconnect: ON_PRODUCTION,
      queryFn: defaultQueryFn,
    },
  },
});

export default APIQueryClient;
