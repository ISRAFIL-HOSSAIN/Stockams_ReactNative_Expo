import adminAPI from "@/api/adminAPI";
import { useMutation, MutationFunction } from "@tanstack/react-query";

interface UseCreateOptions {
  endpoint?: string; // Optional API endpoint URL (defaults to "")
  isMultiPart?: boolean; // Optional flag indicating multipart/form-data (defaults to false)
  onSuccess?: () => void; // Optional success callback
  onError?: (error: Error) => void; // Optional error callback
  onSettled?: () => void; // Optional callback for both success and error
}

const useCreate = ({
  endpoint = "",
  isMultiPart = false,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
}: UseCreateOptions) => {
  const mutation = useMutation<any, Error, any, MutationFunction<any>>(
    (data) => {
      const contentType = isMultiPart ? "multipart/form-data" : "application/json";

      return adminAPI.post(endpoint, data, {
        headers: {
          "Content-Type": contentType,
        },
      });
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  return mutation;
};

export default useCreate;
