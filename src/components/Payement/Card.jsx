import React, { useState } from "react";
import { motion } from "framer-motion";
import CardIcon from "../../assets/images/ion_card.png";
import Cardtext from "../../assets/images/card.png";
import paypalIcon from "../../assets/images/PayPal svg.png";
import stripeIcon from "../../assets/images/Stripe svg.png";

const Card = () => {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const [discountCode, setDiscountCode] = useState("");
  const [isValid, setIsValid] = useState(true);

  const imgVariants = {
    initial: {
      opacity: 0,
      y: 100, // Move the image 100px down initially
    },
    animate: {
      opacity: 1,
      y: 0, // Move the image back to its original position
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };

  const handleConfirmPayment = () => {
    // Check if the 4 digits match your expected value (e.g., '1234' in this example)
    const confirmationCode = digit1 + digit2 + digit3 + digit4;
    if (confirmationCode === "1234") {
      setIsPaymentConfirmed(true);
    } else {
      setIsPaymentConfirmed(false);
    }
  };

  const discountSubmit = (e) => {
    e.preventDefault();

    if (discountCode === "VALIDCODE") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <div className="py-24 custom-grow-background">
      <motion.div
        className="max-w-6xl mx-auto "
        variants={imgVariants} // Apply animation variants
        initial="initial"
        animate="animate"
      >
        <div className="gap-5 lg:flex ">
          <div className="w-full px-6 py-4 bg-white lg:w-1/2 lg:mt-6 md:mt-2 ">
            <div className="mt-9">
              <h1 className="pb-2 text-2xl font-bold border-b">Payment</h1>
            </div>

            <form className="mb-4" onSubmit={handleConfirmPayment}>
              <div className="flex flex-col gap-4 mb-4 md:flex-row">
                <div class="flex justify-center items-center mt-12 ">
                  <div>
                    <p class="text-center mb-4">
                      Enter Your 4-digit card PIN to confirm this payment
                    </p>
                    <div class="flex space-x-2 justify-center">
                      <input
                        type="text"
                        className="w-1/6 h-12 p-2 text-2xl font-semibold text-center border rounded"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit1"
                        value={digit1}
                        onChange={(e) => setDigit1(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-1/6 h-12 p-2 text-2xl font-semibold text-center border rounded"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit2"
                        value={digit2}
                        onChange={(e) => setDigit2(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-1/6 h-12 p-2 text-2xl font-semibold text-center border rounded"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit3"
                        value={digit3}
                        onChange={(e) => setDigit3(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-1/6 h-12 p-2 text-2xl font-semibold text-center border rounded"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit4"
                        value={digit4}
                        onChange={(e) => setDigit4(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-16">
                <button
                  type="submit"
                  className="w-full py-2 mt-4 font-bold text-white bg-blue-900 rounded hover:bg-blue-600"
                >
                  Confirm Payment
                </button>
                {isPaymentConfirmed && <p>Payment confirmed!</p>}
              </div>
            </form>
            <div className="pb-4 space-y-6">
              <p className="text-sm">
                Your personal data would be use to process te order, support
                your experience throughout the website, and for other purpose in
                our privacy policy
              </p>
            </div>
          </div>
          <div className="w-full py-4 mt-6 bg-white lg:w-1/2 ">
            <div className="px-6">
              <div>
                <p className="text-3xl font-bold">Financial Data Analyst</p>
                <p>Online Beginner Course</p>
              </div>
              <div className="flex justify-between mt-6">
                <p>Billed Monthly</p>
                <p>$200</p>
              </div>

              <form className="mt-10 mb-4" onSubmit={discountSubmit}>
                <label htmlFor="enter">Have a discount code?</label>
                <input
                  type="text"
                  name="enter"
                  placeholder="Enter a discount code"
                  required
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className={`w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none ${
                    isValid ? "border-gray-300" : "border-red-500"
                  } focus:border-blue-400`}
                />

                <button
                  type="submit"
                  className="w-1/3 py-2 mt-4 font-bold text-white bg-blue-900 rounded hover:bg-blue-600"
                >
                  Apply Code
                </button>
              </form>
            </div>

            <div className="flex justify-between w-full px-6 py-6 mt-16 font-bold border-t-2 border-b-2">
              <h1>Total </h1>
              <h1>200USD</h1>
            </div>
          </div>
        </div>
      </motion.div>
      ;
    </div>
  );
};

export default Card;
