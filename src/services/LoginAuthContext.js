import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateUser = async () => {
    try {
      const authToken = localStorage.getItem("token");

      if (!authToken) {
        setError("User is not logged in");
        setIsLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const response = await axios.get(
        "https://e1x.nueoffshore.com/api/user",
        config
      );
      const userData = response.data;
      setUser(userData);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://e1x.nueoffshore.com/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, ...userData } = response.data;

      localStorage.setItem("token", token);

      setUser(userData);
      await updateUser(); // Ensure updateUser is complete before moving on
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const authToken = localStorage.getItem("token");
      console.log("authToken", authToken);

      if (!authToken) {
        setError("User is not logged in");
        setIsLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      console.log("config", config);

      console.log(
        await axios.get("https://e1x.nueoffshore.com/api/logout", config)
      );

      localStorage.removeItem("token");

      setUser(null);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
