import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const LOCAL_STORAGE_KEY = "username";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUserName) setUserName(storedUserName);
  }, []);

  const saveUserName = (name: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, name);
    setUserName(name);
  };

  const clearUserName = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ userName, saveUserName, clearUserName }}>
      {children}
    </AuthContext.Provider>
  );
};