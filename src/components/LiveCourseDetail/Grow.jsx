import React from "react";

const Grow = () => {
  return (
    <div className="custom-grow-background w-full py-24">
      <div className="max-w-3xl mx-auto py-8 p-4">
        <div class="flex justify-center items-center ">
          <div class="text-center md:text-left">
            <h1 class="font-bold lg:text-4xl text-2xl">
              Learn. Grow. Earn. Inspire
            </h1>
            <p class="text-xs text-center">Register for The Plan Suite You</p>
          </div>
        </div>

        <div className="md:flex md:justify-between gap-6 mt-8">
          <div className="bg-custom-blue md:w-1/2 mb-4 py-6 rounded-lg">
            <div className="border-b pb-4 text-center mb-4">
              <p className="text-white">Monthly Payment Access</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-white text-4xl">$200</h1>
              <p className="text-white ">Spread across 3 Months</p>
              <button className="mt-4 text-white bg-custom-button px-20  py-3 rounded-lg">
                Enroll
              </button>
            </div>
          </div>
          <div className="bg-custom-blue md:w-1/2 mb-4 py-5 rounded-lg">
            <div className="border-b pb-4 text-center mb-4">
              <p className="text-white">Monthly Payment Access</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-white text-4xl">$500</h1>
              <p className="text-white ">Spread across 3 Months</p>
              <button className="mt-4 text-white bg-custom-button px-20  py-3 rounded-lg">
                Enroll
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
