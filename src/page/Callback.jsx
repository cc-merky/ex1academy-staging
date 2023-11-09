import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Callback = () => {
  const { reference } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/verifyTransaction/${reference}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
        } else {
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [reference]);

  return <div>Verifying your payment...</div>;
};

export default Callback;
