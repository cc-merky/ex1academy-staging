import React, { useState } from "react";
import validator from "validator";

import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!validator.isEmail(resetPassword)) {
      errors.username = "Invalid email address";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handlePasswordChange = (e) => {
    setResetPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Password:", resetPassword);
    }
  };
  return (
    <div className="custom-course-background">
      <div className="max-w-4xl mx-auto py-6 ">
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 w-full px-4 py-5 bg-white mx-auto">
            <div className="text-center">
              <h1 className="font-bold text-2xl">Reset Password</h1>
            </div>
            <form onSubmit={handleSubmit} className="border-b pb-3">
              <div className="mb-4">
                <label htmlFor="password" className="block ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={resetPassword}
                  onChange={handlePasswordChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
                {errors.resetPassword && (
                  <p className="error">{errors.resetPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full  bg-custom-button text-white rounded py-2 hover:bg-blue-600"
              >
                Reset Password
              </button>
            </form>

            <div>
              <p className="text-center mt-3">
                <NavLink to="/sign-in" className="text-sm">
                  login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
