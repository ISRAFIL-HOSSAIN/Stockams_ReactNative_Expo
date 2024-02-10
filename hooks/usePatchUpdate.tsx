import adminAPI from "@/api/adminAPI";
import { useMutation, MutationFunction } from "@tanstack/react-query";


interface UseUpdateOptions {
  endpoint?: string;
  isMultiPart?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

const usePatchUpdate = ({
  endpoint = "",
  isMultiPart = false,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
}: UseUpdateOptions) => {
  const mutation = useMutation<void, Error, unknown, MutationFunction<void>>(
    (data) =>
      adminAPI.patch(endpoint, data, {
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

export default usePatchUpdate;
