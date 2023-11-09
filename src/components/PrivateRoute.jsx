import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../services/LoginAuthContext";

const PrivateRoute = ({ Element, ...rest }) => {
  const { user } = useContext(AuthContext);
  console.log("provite route");

  return user ? Element : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
