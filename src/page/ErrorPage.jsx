import React from "react";

const ErrorPage = ({ error }) => {
  const status = error?.status || "500";
  const message =
    error?.message || "Something went wrong. Please try again later.";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Error {status}</h1>
      <p className="text-xl text-gray-600">{message}</p>
    </div>
  );
};

export default ErrorPage;
