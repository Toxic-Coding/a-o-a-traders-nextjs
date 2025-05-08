import { useState } from "react";
import { useToast } from "./useToast";

interface ResponseHandler<T> {
    loading: boolean;
    error: string | null;
    data: T | null;
    handleResponse: (
        serverAction: (options?: { data?: any; endpoint?: string }) => Promise<T>,
        options?: { data?: any; endpoint?: string },
        successCallback?: (data: T) => void,
        successMessage?: string
    ) => Promise<T | void>;
}

export const useResponseHandler = <T,>(): ResponseHandler<T> => {
    const { showError, showSuccess } = useToast();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    const handleResponse = async (
        serverAction: (options?: { data?: any; endpoint?: string }) => Promise<T>,
        options?: { data?: any; endpoint?: string },
        successCallback?: (data: T) => void,
        successMessage?: string
    ): Promise<T | void> => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await serverAction(options);
            setData(response);
            if (successCallback) {
                successCallback(response);
            }
            if (successMessage) {
                showSuccess(successMessage);
            }
            return response;
        } catch (err: any) {
            const errorMessage = err?.message || "Something went wrong";
            setError(errorMessage);
            showError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, data, handleResponse };
};
