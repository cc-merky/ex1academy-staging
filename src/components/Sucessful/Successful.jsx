import React from "react";
import congratImage from "../../assets/images/confetti.png";
import { useNavigate } from "react-router-dom";

const HandlePageRedirect = () => {
  const navigate = useNavigate();
  return navigate("/dashboard");
};

const Successful = () => {
  return (
    <div className="py-24 custom-grow-background ">
      <div className="max-w-6xl mx-auto bg-white min-h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <img src={congratImage} alt="congratImage" />

          <div className="space-y-4 text-center">
            <p>Course Purchase</p>
            <h1 className="text-4xl font-bold text-blue-700">Successful</h1>
            <p>Enjoy Your Study, We have sent you an email receipt</p>
          </div>
          <button
            onClick={HandlePageRedirect()}
            className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mt-6"
          >
            Continue
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Successful;
