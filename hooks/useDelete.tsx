import adminAPI from "@/api/adminAPI";
import { useMutation, MutationFunction } from "@tanstack/react-query";


interface UseDeleteOptions {
  endpoint?: string;
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

const useDelete = ({
  endpoint = "",
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
}: UseDeleteOptions) => {
  const mutation = useMutation<void, Error, string, unknown>(
    (deleteId) => adminAPI.delete(`${endpoint}/${deleteId}`),
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  return mutation;
};

export default useDelete;
