import React from "react";
import { useState } from "react";
import Billing from "./Billing";
import axios from "axios";
import Password from "./Password";
import Notification from "./Notification";
import Certificate from "./Certificate";
import Order from "./Order";
import Email from "./Email";
import { toast } from "react-toastify";

import imageUrl from "../../assets/images/user-image-with-black-background.png";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [telephone, setTelephone] = useState("");
  const [professional_title, setProfessional_title] = useState("");
  const [profile_img, setProfile_img] = useState(null);

  const [activeTab, setActiveTab] = useState("profile");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfile_img(file); // Set the selected image as a File object
    }
  };
  const handleTabChange = (tab) => {
    console.log("activetab", tab);
    setActiveTab(tab);
  };

  const apiUrl = "https://e1x.nueoffshore.com/api/user/info/update";

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
          "Content-Type": "multimedia/form-data",
        },
      };
      const formData = new FormData();

      formData.append("firstname", firstName);
      formData.append("lastname", lastName);
      formData.append("telephone", telephone);
      formData.append("company", company);
      formData.append("professional_title", professional_title);
      formData.append("profile_img", profile_img);

      const response = await axios.post(apiUrl, formData, config);

      // Handle a successful API response here
      console.log("API response:", response.data);
      toast.success("Profile updated successfully");
    } catch (error) {
      // Handle errors and display an error message to the user
      console.error("API error:", error);
      toast.error("Failed to update profile. Please try again later.");
    }
  };

  return (
    <div className="custom-course-background">
      <div className="max-w-6xl py-10 mx-auto">
        <div className="flex-wrap px-4 lg:flex gap-14 ">
          <div className="w-full mb-4 lg:w-1/5 ">
            <ul className="bg-gray-300">
              <li
                className={`hover:border-l-4 border-b ${
                  activeTab === "profile" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("profile")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Profile</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 border-b ${
                  activeTab === "email" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("email")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Email</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 border-b ${
                  activeTab === "password" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("password")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Password</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 border-b ${
                  activeTab === "notification" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("notification")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Notification</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 border-b ${
                  activeTab === "billing" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("billing")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Billing</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 border-b ${
                  activeTab === "order" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("order")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Order History</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 border-b ${
                  activeTab === "certificate" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("certificate")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Certificate</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-3/4">
            {activeTab === "profile" && (
              <>
                <h1 className="text-4xl font-bold py-3 ">Edit Profile </h1>
                <div className="flex">
                  <div className="w-1/5 space-y-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      id="image-upload-input"
                      name="profile_img" // Add the name attribute here
                      style={{ display: "none" }}
                    />

                    <label htmlFor="image-upload-input">
                      <img
                        src={
                          profile_img
                            ? URL.createObjectURL(profile_img)
                            : imageUrl
                        }
                        alt="image-url"
                        className="lg:h-32 lg:w-32 h-16 w-16 rounded-full mx-auto"
                      />
                    </label>
                    <div className="flex justify-center">
                      <label
                        className="bg-custom-button p-2 rounded text-white"
                        htmlFor="image-upload-input"
                      >
                        Upload Image
                      </label>
                    </div>
                  </div>

                  <div className="w-3/4 px-4">
                    <form onSubmit={handleFormSubmit}>
                      <div className="mb-4">
                        <div className="flex flex-col gap-4 md:flex-row ">
                          <div className="lg:w-1/2">
                            <label htmlFor="FirstName">First Name</label>
                            <input
                              type="text"
                              name="FirstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="First Name"
                              required
                              className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="lg:w-1/2">
                            <label htmlFor="LastName">Last Name</label>
                            <input
                              type="text"
                              name="LastName"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              placeholder="Last Name"
                              required
                              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-col gap-4 md:flex-row ">
                          <div className="lg:w-1/2">
                            <label htmlFor="Company">Company</label>
                            <input
                              type="text"
                              name="Company"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder="Company"
                              required
                              className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="lg:w-1/2">
                            <label htmlFor="Telephone">Telephone Number</label>
                            <input
                              type="tel"
                              name="Telephone"
                              onChange={(e) => setTelephone(e.target.value)}
                              placeholder="Telephone Number"
                              required
                              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-full mb-4">
                        <label htmlFor="Profession">Professional Title</label>
                        <input
                          type="Profession"
                          name="Profession"
                          value={professional_title}
                          onChange={(e) =>
                            setProfessional_title(e.target.value)
                          }
                          placeholder="Professional Title"
                          required
                          className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-40 bg-custom-button font-bold text-white rounded py-2 hover:bg-blue-600 mt-4"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
            {activeTab === "billing" && <Billing />}

            {activeTab === "password" && <Password />}
            {activeTab === "notification" && <Notification />}
            {activeTab === "order" && <Order />}
            {activeTab === "certificate" && <Certificate />}
            {activeTab === "email" && <Email />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
