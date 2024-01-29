import adminAPI from "@/api/adminAPI";
import { useMutation, MutationFunction } from "@tanstack/react-query";


interface UseCreateOptions {
  endpoint?: string;
  isMultiPart?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

const useCreate = ({
  endpoint = "",
  isMultiPart = false,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
}: UseCreateOptions) => {
  const mutation = useMutation<void, Error, unknown, MutationFunction<void>>(
    (data) =>
      adminAPI.post(endpoint, data, {
        headers: {
          "Content-Type": isMultiPart
            ? "multipart/form-data"
            : "application/json",
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

export default useCreate;
