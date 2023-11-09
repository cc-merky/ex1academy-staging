import React from "react";
import { useContext } from "react";
import { AuthContext } from "../services/LoginAuthContext";

import { Navigate, Route } from "react-router-dom";

export const EmailProtectedRoutes = ({ element, authenticated, verified }) => (
  <Route
    element={
      authenticated && verified ? (
        element
      ) : (
        <Navigate to="/email-verification" />
      )
    }
  />
);
