import { createContext } from "react";

interface AuthContextType {
  userName: string | null;
  saveUserName: (name: string) => void;
  clearUserName: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


