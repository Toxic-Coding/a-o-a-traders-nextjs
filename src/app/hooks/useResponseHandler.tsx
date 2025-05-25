import { useCallback, useState } from "react";
import { SubmitHandler, Path } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
interface UseResponseHandlerProps<T> {
  serverAction: Function; // Server action with response message and type
  redirectTo?: string;
  includeValue?: Path<T>[]; // Fields to include as query params in redirect
  customEndpoint?: string;
  method?: string;
  endPointQuery?: string; // Additional query for endpoint
  successCallBack?: (result: any) => void;
  customMessage?: string;
}
const useResponseHandler = <T extends Record<string, any>>({
  serverAction,
  redirectTo,
  includeValue,
  customEndpoint = "",
  method = "",
  endPointQuery = "",
  successCallBack,
  customMessage,
}: UseResponseHandlerProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<T | null>(null);
  const { replace, refresh } = useRouter();

  const handleAction = useCallback(
    async (data: T) => {
      setIsLoading(true);
      setError(null);
      // console.log(data);
      try {
        const res = await serverAction(
          data,
          customEndpoint,
          method,
          endPointQuery
        );
        if (res.message === "Unauthorized Access") {
          signOut({ redirect: true });
        }
        if (res.message === "Your subscription has expired. Please renew.") {
          replace("/subscriptions");
        }
        if (res.type === "success") {
          setResult(res.result || res);
          toast.success(customMessage || res.message);
          successCallBack && successCallBack(res.result);
          if (redirectTo) {
            replace(redirectTo);
          }
          // refresh();
        } else if (res.type === "unauthorized") {
          toast.error("Session expired. Signing out...");
          signOut({ redirect: true });
        } else {
          toast.error(res.message);
          setError(res.message);
        }
      } catch (error: any) {
        const errorMessage = error.message || "An unexpected error occurred";
        toast.error(errorMessage);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [endPointQuery, includeValue, redirectTo, replace, serverAction]
  );
  const submit: SubmitHandler<T> = handleAction;
  return {
    submit,
    isLoading,
    error,
    data: result,
    resetError: () => setError(null),
  };
};
export default useResponseHandler;
