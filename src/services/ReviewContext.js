import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <ReviewProvider.Provider
      value={{
        user,
      }}
    >
      {children}
    </ReviewProvider.Provider>
  );
}
