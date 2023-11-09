import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const PaymentVerify = () => {
  const [posts, setPosts] = useState("");
  const searchParams = useSearchParams();
  const apiUrl = "http://localhost:3000/verifyTransaction"; // Replace with your actual server URL

  useEffect(() => {
    if (searchParams.has("reference")) {
      const reference = searchParams.get("reference");

      async function verifyPayment() {
        try {
          const response = await axios.get(`${apiUrl}/${reference}`);
          const data = response.data;
          setPosts(JSON.stringify(data, null, 2)); // JSON.stringify for displaying JSON data
        } catch (error) {
          console.error(error);
        }
      }

      verifyPayment();
    }
  }, [searchParams, apiUrl]);

  return (
    <div>
      <pre>{posts}</pre>
    </div>
  );
};

export default PaymentVerify;
