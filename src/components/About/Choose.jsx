import React from "react";
import videoImage from "../../assets/images/videoImage.jpg";
import chooseImage from "../../assets/images/beautiful.png";

import { LuSchool } from "react-icons/lu";
import { PiStudentLight } from "react-icons/pi";

const Choose = () => {
  return (
    <div className="custom-description-background">
      <div className="max-w-6xl mx-auto lg:py-24 py-12 px-4 ">
        <div className="text-center space-y-5">
          <p className="font-bold lg:text-6xl text-2xl gradient-text-blue  ">
            Why Choose Us
          </p>
          <p className=" text-md ">
            Everything you Need for your Institute or University
          </p>
        </div>
        <div className="lg:flex md:flex-row gap-8 mt-20 ">
          <div className="lg:w-2/5 h-[450px] px-4 py-8 shadow-lg bg-white  mb-4">
            <div className="flex items-center justify-between  ">
              <p className="font-bold text-3xl">01</p>
              <LuSchool className="w-9 h-9" />
            </div>

            <div className="space-y-6 mt-4">
              <p className="font-bold text-xl">Certified Teachers</p>
              <p>
                E1X 1 Academy: Fostering responsible learning and excellence.
              </p>
              <div className="space-y-4 font-bold">
                <p>Professional training</p>
                <p>Present content to students</p>
                <p>Students responsibility</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 h-[450px] px-4 py-8 shadow-md bg-white mb-4">
            <div className="flex items-center justify-between   ">
              <p className="font-bold text-3xl">02</p>
              <PiStudentLight className="w-9 h-9" />
            </div>

            <div className="space-y-6 mt-4">
              <p className="font-bold text-xl">Books & Library</p>
              <p>
                "E1X 1 Academy's extensive library enhances our diverse courses,
                providing students a comprehensive learning experience."
              </p>
              <div className="space-y-4 font-bold">
                <p>Carrel Booking</p>
                <p>Student Reading Room</p>
                <p>Science library</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 h-[500px] object-fill bg-slate-300 ">
            <img
              src={chooseImage}
              alt="headerImage"
              className="w-full h-full object-cover  lg:mt-0 md:mt-8"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
