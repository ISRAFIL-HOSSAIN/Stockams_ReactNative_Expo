import adminAPI from "@/api/adminAPI";
import { useMutation, MutationFunction } from "@tanstack/react-query";

interface UseUpdateOptions<Data> {
  endpoint?: string;
  isMultiPart?: boolean;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  customHeaders?: Record<string, string>;
}

const usePatchUpdateProfile = <Data = void>({
  endpoint = "",
  isMultiPart = false,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
  customHeaders = {},
}: UseUpdateOptions<Data> = {}) => {
  const mutation = useMutation<Data, Error, unknown, MutationFunction<Data>>(
    (data) =>
      adminAPI.patch(endpoint, data, {
        headers: {
          "Content-Type": isMultiPart
            ? "multipart/form-data"
            : "application/json",
          ...customHeaders,
        },
      }),
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  return mutation;
};

export default usePatchUpdateProfile;
