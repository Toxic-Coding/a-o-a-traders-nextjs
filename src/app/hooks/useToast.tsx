import { toast, ToastT as SonnerToastT } from 'sonner'; // Ensure 'sonner' is installed

// Define the ToastOptions type locally to match the expected structure
type SonnerToastOptions = {
    type?: SonnerToastT;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
};

// Ensure 'info' is part of the CustomToastT type
type CustomToastT = 'success' | 'error' | 'info' | 'warning' | 'loading';
import { ReactNode } from 'react';

type ToastOptions = {
    type?: CustomToastT; // 'success' | 'error' | 'info' | 'warning' | 'loading'
    duration?: number; // Duration in milliseconds
    action?: {
        label: string;
        onClick: () => void;
    };
};

export const useToast = () => {
    const showToast = (
        message: ReactNode,
        { type = 'info', duration = 3000, action }: ToastOptions = {}
    ) => {
        toast(message, {
            ...(type && { type: type as unknown as SonnerToastT }),
            duration,
            action,
        } as SonnerToastOptions);
    };

    const showSuccess = (message: ReactNode, options?: Omit<ToastOptions, 'type'>) =>
        showToast(message, { ...options, type: 'success' });

    const showError = (message: ReactNode, options?: Omit<ToastOptions, 'type'>) =>
        showToast(message, { ...options, type: 'error' });

    const showWarning = (message: ReactNode, options?: Omit<ToastOptions, 'type'>) =>
        showToast(message, { ...options, type: 'warning' });

    const showInfo = (message: ReactNode, options?: Omit<ToastOptions, 'type'>) =>
        showToast(message, { ...options, type: 'info' });

    return {
        showToast,
        showSuccess,
        showError,
        showWarning,
        showInfo,
    };
};