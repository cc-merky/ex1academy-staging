import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);

  const [isEmailVerified, setEmailVerified] = useState(false);

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
      console.log("user", userData);

      setUser(userData);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const updateEmailVerificationStatus = async () => {
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
      console.log("Request Headers:", config.headers);

      const response = await axios.get(
        "https://e1x.nueoffshore.com/api/email/isVerify",
        config
      );

      if (response.status === 200) {
        console.log("isemail", isEmailVerified);
        setEmailVerified(true);
      } else {
        console.log("Email is not verified");
        setEmailVerified(false);
      }
    } catch (error) {
      console.error("Error checking email verification status:", error);
    }
  };

  // Fetch initial user data on component mount
  useEffect(() => {
    updateUser(); // Fetch user data on component mount
    updateEmailVerificationStatus(); // Check email verification status
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        isLoading,
        error,
        isEmailVerified,
        updateUser,
        updateEmailVerificationStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
