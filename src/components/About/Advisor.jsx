import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import instructor2 from "../../assets/images/instructor.png";


const Advisor = () => {
  return (
    <div className="py-24 bg-custom-gradient">
      <div className="max-w-6xl mx-auto ">
        <div className="flex-row gap-5 px-3 lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              <p className="text-xl font-bold text-white">COURSE ADVISOR</p>
              <p className="w-16 pb-4 border-b-2 border-white t"></p>

              <p className="text-4xl font-bold text-white">
                Our Professional & Expert <br></br> Course advisor
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              <p className="text-lg text-white">
                At E1X Academy, our lectures are anything but melancholy. We
                pride ourselves on offering exceptional and stimulating content
                that leaves a lasting impression on our students.
              </p>

              <button className="flex items-center gap-3 px-8 py-3 text-lg font-bold text-white rounded bg-custom-button border-6 ">
                View All
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>

        <div className="gap-5 mt-20 lg:flex md:flex-row md:flex md:justify-center ">
          <div className="w-full px-3 py-3 mb-4 shadow-md lg:w-2/5">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="font-bold text-white"> Danile Eniron</p>
              <p className="text-xs text-white">Financial Data Analyst</p>
            </div>
          </div>
          <div className="w-full px-3 py-3 mb-4 shadow-md lg:w-2/5">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="font-bold text-white"> Danile Eniron</p>
              <p className="text-xs text-white">Financial Data Analyst</p>
            </div>
          </div>
          <div className="w-full px-3 py-3 mb-4 shadow-md lg:w-2/5">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="font-bold text-white"> Danile Eniron</p>
              <p className="text-xs text-white">Financial Data Analyst</p>
            </div>
          </div>
          <div className="w-full px-3 py-3 mb-4 shadow-md lg:w-2/5">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="font-bold text-white"> Danile Eniron</p>
              <p className="text-xs text-white">Financial Data Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
