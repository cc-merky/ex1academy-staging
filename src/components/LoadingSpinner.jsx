import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ClipLoader size={50} color="#3498db" loading={true} />
    </div>
  );
};

export default LoadingSpinner;
