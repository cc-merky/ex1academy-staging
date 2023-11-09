import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../services/UserContext";
import axios from "axios";
function VerifyEmail() {
  const { user } = useContext(UserContext);
  const userId = user && user.id;

  const [isEmailResent, setEmailResent] = useState(false);
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState("Verifying...");

  useEffect(() => {
    // Make a GET request to your backend to verify the email using the user ID.
    fetch(`https://e1x.nueoffshore.com/api/email/verify/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          setVerificationStatus("Email has been successfully verified.");
          // Redirect to the dashboard or any other page.
          navigate("/dashboard");
        } else {
          setVerificationStatus("Email verification failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error verifying email:", error);
        setVerificationStatus("An error occurred while verifying the email.");
      });
  }, [userId, navigate]);

  const handleResendEmail = async () => {
    try {
      const authToken = localStorage.getItem("token");
  
      if (!authToken) {
        return;
      }
  
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
  
      // Make a GET request to the resend email API using the user ID and the config.
      const response = await axios.get("https://e1x.nueoffshore.com/api/email/resend", config);
  
      if (response.status === 200) {
        // Email has been resent successfully.
        setEmailResent(true);
      } else {
        // Resending email failed; you can display an error message.
        // Handle the error case here.
      }
    } catch (error) {
      console.error("Error resending email:", error);
      // Handle errors here.
    }
  };
  

  return (
    <div className="custom-course-background min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <p className="text-lg font-semibold mb-4 text-center">
          {verificationStatus}
        </p>
        <p className="text-gray-600 mb-4">
          A verification link has been sent to your email. Kindly check your
          inbox/spam folder to verify your account.
        </p>
        {isEmailResent ? (
          <p>Email has been resent. Please check your inbox.</p>
        ) : (
          <button
            className="bg-blue-500 text-white hover-bg-blue-600 py-2 px-4 rounded-full w-full"
            onClick={handleResendEmail}
          >
            Resend Verification
          </button>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
