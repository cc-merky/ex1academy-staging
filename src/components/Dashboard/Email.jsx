import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../services/LoginAuthContext";
import { toast } from "react-toastify";

const Email = () => {
  const { user } = useContext(AuthContext);

  // Initialize the email state with the user's current email
  const [email, setEmail] = useState("");

  const apiUrl = "https://e1x.nueoffshore.com/api/user/email/update";

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
        email,
      };

      const response = await axios.post(apiUrl, formData, config);

      // Handle a successful API response here
      console.log("API response:", response.data);
      toast.success("Email updated successfully");
    } catch (error) {
      // Handle errors and display an error message to the user
      console.error("API error:", error);
      toast.error("Failed to update email. Please try again later.");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Email</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="changeEmail"> Email</label>
          <input
            type="email"
            name="changeEmail"
            value={user ? user.email : ""}
            placeholder="Change Email"
            required
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Chage Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-40 bg-custom-button font-bold text-white rounded py-2 hover-bg-blue-600 mt-4"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Email;
