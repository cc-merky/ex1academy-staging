import React from "react";
import CheckOutImage from "../../assets/images/edu site data business arrow 2 2 (2).png";

const Landing = () => {
  return (
    <div className="bg-custom-blue">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className=" flex justify-between">
          <div className="mt-5">
            <button className="border  py-2 px-4 text-white text-sm ">
              Back To Payment Option
            </button>
            <div className="mt-4 space-y-2">
              <h1 className="font-bold text-5xl text-white">Check Out</h1>
              <p className="text-white">Financial Data Analyst</p>
            </div>
          </div>
          <div>
            <img src={CheckOutImage} alt="checkOut" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
