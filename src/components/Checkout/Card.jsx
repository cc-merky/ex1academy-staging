import React, { useState } from "react";
import { motion } from "framer-motion";
import CardIcon from "../../assets/images/ion_card.png";
import Cardtext from "../../assets/images/card.png";
import paypalIcon from "../../assets/images/PayPal svg.png";
import stripeIcon from "../../assets/images/Stripe svg.png";

const Card = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate card number format
    if (!/^[0-9\s]{13,19}$/.test(cardNumber)) {
      alert("Invalid card number format");
      return;
    }

    // Validate expiration format
    if (!/^[0-9]{2}\/[0-9]{2}$/.test(expiration)) {
      alert("Invalid expiration date format");
      return;
    }

    // Validate CVV format
    if (!/^[0-9]{3}$/.test(cvv)) {
      alert("Invalid CVV format");
      return;
    }

    if (saveCard) {
      // Save card details logic (e.g., store them in state, send to a server, etc.)
      console.log("Card details saved");
    }

    // If all validations pass, you can proceed with form submission or other actions.
    alert("Form submitted successfully");
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
    <div className="custom-grow-background py-24 ">
      <div className="max-w-6xl mx-auto ">
        <p className="px-6">Already have an account? sign-in </p>
        <div className="lg:flex gap-5 ">
          <motion.div
            className="lg:w-1/2 w-full bg-white px-6 py-4 mt-6 "
            variants={imgVariants} // Apply animation variants
            initial="initial"
            animate="animate"
          >
            <div className="  mb-8 ">
              <div className="flex  gap-3 hover:bg-custom-grow-background ">
                <div className="flex items-center gap-2 py-2   border hover:border-blue-400 hover:bg-blue-100 rounded-lg lg:w-1/5 w-1/4  justify-center cursor-pointer">
                  <img
                    src={CardIcon}
                    alt="cardi-image"
                    className="object-full"
                  />
                  <img src={Cardtext} alt="card-text" className="object-full" />
                </div>
                <div className=" py-2 border lg:w-1/5 w-1/4 hover:border-blue-400 hover:bg-custom-grow-background hover:bg-blue-100  rounded-lg  cursor-pointer ">
                  <img
                    src={paypalIcon}
                    alt="cardi-image"
                    className="object-full"
                  />
                </div>
                <div className="flex border lg:w-1/5 w-1/4 hover:border-blue-400 rounded-lg cursor-pointer hover:bg-blue-100 justify-center   ">
                  <img
                    src={stripeIcon}
                    alt="cardi-image"
                    className="object-full"
                  />
                </div>
              </div>
            </div>

            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4 ">
                <label htmlFor="CardNumber">Card Number</label>
                <input
                  type="text"
                  name="CardNumber"
                  placeholder="1234 5678 9101 1345"
                  pattern="[0-9\s]{13,19}"
                  inputmode="numeric"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="lg:w-1/2">
                  <label htmlFor="Expiration">Expiration Date</label>
                  <input
                    type="text"
                    name="Expiration"
                    placeholder="MM/YY"
                    required
                    pattern="[0-9]{2}/[0-9]{2}"
                    inputmode="numeric"
                    value={expiration}
                    onChange={(e) => setExpiration(e.target.value)}
                    className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div className="lg:w-1/2 ">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    required
                    pattern="[0-9]{3}"
                    inputmode="numeric"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full border bg-gray-100 rounded px-3 py-2   focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label for="agree" class="ml-2 block text-sm leading-5  ">
                  save card details
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white rounded py-2 hover:bg-blue-600 mt-4 font-bold"
              >
                Pay
              </button>
            </form>
            <div className="space-y-6 pb-4">
              <p className="text-sm">
                Your personal data would be use to process te order, support
                your experience throughout the website, and for other purpose in
                our privacy policy
              </p>
              <p className="text-sm">
                By confirming, your agree to Ex1 Terms and Use and Privacy
                Policy
              </p>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 w-full bg-white  py-4 mt-6 "
            variants={imgVariants} // Apply animation variants
            initial="initial"
            animate="animate"
          >
            <div className="px-6">
              <div>
                <p className="font-bold text-3xl">Financial Data Analyst</p>
                <p>Online Beginner Course</p>
              </div>
              <div className="flex justify-between mt-6">
                <p>Billed Monthly</p>
                <p>$200</p>
              </div>

              <form className="mb-4 mt-10" onSubmit={discountSubmit}>
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
                  className="w-1/3 bg-blue-900 text-white rounded py-2 hover:bg-blue-600 mt-4 font-bold"
                >
                  Apply code
                </button>
              </form>
            </div>

            <div className="w-full flex justify-between px-6 py-6 border-b-2 border-t-2 mt-16 space-x-2 font-bold">
              <h1>Total </h1>
              <h1>200USD</h1>
            </div>
          </motion.div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Card;
