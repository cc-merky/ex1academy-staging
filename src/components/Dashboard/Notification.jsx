import React, { useState } from "react";

const Notification = () => {
  // State variables and functions for form handling
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    // You can access the `agreed` state variable to check if the checkbox is checked
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 ">
        General Notification Settings
      </h1>
      <h1 className="text-3xl font-bold mb-4 ">My Courses</h1>
      <form onSubmit={handleSubmit} className="border-b pb-3 mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={agreed}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree" className="ml-2 block text-sm leading-5">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          className="w-40 bg-custom-button text-white rounded py-2 hover:bg-blue-600 mt-4 font-bold"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Notification;
