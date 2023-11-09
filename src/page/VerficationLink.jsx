import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const VerificationLink = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/sign-in");
  };

  useEffect(() => {
    // Make a GET request to your backend API to check if the email is verified
    axios
      .get("/api/checkEmailVerification")
      .then((response) => {
        setEmailVerified(response.data.verified);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (emailVerified) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <div className="custom-course-background min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <p className="text-lg font-semibold mb-4 text-center">
          Verify your account
        </p>
        {emailVerified === "verified" ? (
          <p>
            Your email has been verified. You can now access your dashboard.
          </p>
        ) : (
          <div>
            <p className="text-gray-600 mb-4 text-center">
              An email has been sent to your inbox with a link to verify your
              email. If you don't see it in a few minutes, please check your
              spam folder.
            </p>
            <button
              onClick={resendVerificationEmail}
              className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full w-full"
            >
              Resend Verification Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationLink;
