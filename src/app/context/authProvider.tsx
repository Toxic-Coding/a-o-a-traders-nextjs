// context/auth-context.tsx (Client-side session management)
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Common/spinner";

type User = {
  user_id: number;
  access_token: string;
  refresh_token: string;
  user_role: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  logout: async () => {},
  refresh: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkSession = async () => {
    try {
      const response = await fetch("/api/auth/session");
      if (!response.ok) throw new Error();

      const session = await response.json();
      setUser(session.user);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const logout = async () => {
    setIsLoading(true);
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    window.location.href = "/signin";
    setIsLoading(false);
  };

  const refresh = async () => {
    setIsLoading(true);
    await checkSession();
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
