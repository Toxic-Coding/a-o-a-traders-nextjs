"use client";
import Spinner from "@/components/Common/spinner";
import { createContext, ReactNode, useEffect, useState } from "react";

interface LoadingContextProps {
  loading: boolean;
}

interface LoadingProviderProps {
  children: ReactNode;
}

// Create the Loading Context with a default value of loading: true
const LoadingContext = createContext<LoadingContextProps>({ loading: true });

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once the window has fully loaded
    const handleLoad = () => setLoading(false);

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Otherwise, wait for the load event
      window.addEventListener("load", handleLoad);
    }

    // Cleanup the event listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {loading ? (
        // Display a loader component while loading is true
        <Spinner size="medium" color="app_blue" className="fixed top-1/2 left-1/2"/>
      ) : (
        // Display children when loading is false
        children
      )}
    </LoadingContext.Provider>
  );
};
