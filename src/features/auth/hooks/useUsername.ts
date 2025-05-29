import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "username";

const useUsername = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const saveUserName = (name: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, name);
    setUserName(name);
  };


  return {
    userName,
    saveUserName,
  };
};

export default useUsername;
