import React from "react";

const Billing = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4  pl-8">Order History</h1>
      <div className="w-5/6  mx-auto">
        <div className="flex mt-8 border border-black p-4 ">
          <div className="w-48 border-l">
            <div className="font-bold">
              <p>#order</p>
            </div>
          </div>
          <div className="w-48">
            <div className="font-bold">
              <p>Date</p>
            </div>
          </div>
          <div className="w-48">
            <div className="font-bold">
              <p>status</p>
            </div>
          </div>
          <div className="w-48">
            <div className="font-bold">
              <p>Current</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
