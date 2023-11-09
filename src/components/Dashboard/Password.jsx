import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
const Password = () => {
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleRetryPassword = (e) => {
    setRetryPassword(e.target.value);
  };

  const apiUrl = "https://e1x.nueoffshore.com/api/user/password/update";

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const authToken = localStorage.getItem("token");

      if (!authToken) {
        // Handle the case when the user is not authenticated
        toast.error("User is not logged in");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const formData = {
        password,
      };

      const response = await axios.post(apiUrl, formData, config);

      // Handle a successful API response here
      console.log("API response:", response.data);
      toast.success("password updated successfully");
    } catch (error) {
      // Handle errors and display an error message to the user
      console.error("API error:", error);
      toast.error("Failed to update profile. Please try again later.");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 "> Change Password </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handlePassword}
            required
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="confirm">Current Password</label>
          <input
            type="password"
            name="confirm"
            value={currentPassword}
            placeholder="E"
            onChange={handleCurrentPassword}
            required
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="retry">Retry Password</label>
          <input
            type="password"
            name="retry"
            value={retryPassword}
            placeholder="Email"
            onChange={handleRetryPassword}
            required
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div> */}

        <button
          type="submit"
          className="w-40 bg-custom-button font-bold text-white rounded py-2 hover:bg-blue-600 mt-4"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default Password;
