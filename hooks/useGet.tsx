import adminAPI from "@/api/adminAPI";
import { useQuery, QueryFunction } from "@tanstack/react-query";

interface UseGetOptions {
  endpoint: string;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
}

const useGet = ({
  endpoint,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
}: UseGetOptions) => {
  const query = useQuery<any, Error>(
    ["getData", endpoint],
    () => adminAPI.get(endpoint),
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  return query;
};

export default useGet;
