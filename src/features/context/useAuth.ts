import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useUsername = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useUsername must be used within an AuthProvider");
  }

  return context;
};