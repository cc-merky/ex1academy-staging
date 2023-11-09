// Login.js
import React, { useState } from "react";
import validator from "validator";

import { NavLink, useNavigate } from "react-router-dom";
import imagePage from "../assets/images/pretty-black-woman-feeling-happy-facing-challenge-celebrating-agenda-concept_1194-339851.jpg";
import { AuthContext } from "../services/LoginAuthContext";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { user, error, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (validator.isEmpty(password)) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await login(email, password); // Ensure the login process is completed

        if (user) {
          toast("Login successful");
          navigate("/dashboard");
        } else {
          // toast.error("User not set. Login failed.");
        }
      } catch (error) {
        toast("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="custom-course-background">
      <div className="max-w-4xl py-12 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={imagePage}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 w-full px-4 py-5 mx-auto bg-white shadow-sm">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-red-700">Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="pb-3 border-b">
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-slate-100 focus:outline-none focus:border-blue-400"
                />
                {errors.password && <p className="error">{errors.password}</p>}
                {/* {error && (
                  <p className="text-sm text-red-400">
                    An error occurred. Please try again later.
                  </p>
                )} */}

                <NavLink to="/reset-password" className="text-xs">
                  Forgot password
                </NavLink>
              </div>

              <button
                type="submit"
                className="w-40 py-2 text-white rounded bg-custom-button hover:bg-blue-600"
              >
                Login
              </button>
            </form>

            <div className="flex items-center justify-center mt-4 space-x-4">
              <SocialButton icon={<FcGoogle />} />
              <SocialButton icon={<FaFacebook />} className="text-blue-600" />
              <SocialButton icon={<AiFillApple />} />
            </div>
            <div>
              <p className="mt-3 text-sm text-center">
                Don't have an account?{" "}
                <NavLink to="/sign-up" className="text-sm">
                  Sign-up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SocialButton component for social media icons
const SocialButton = ({ icon, className }) => (
  <button
    className={`border rounded-full py-2 px-2 hover:bg-[#d8c1ae] ${className}`}
  >
    {icon}
  </button>
);

export default Login;
