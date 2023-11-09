import React from "react";
import edu from "../../assets/icons/edu.png";

function Subscribe() {
  const backgroundImageStyle = {
    backgroundImage: `url(${edu})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="bg-[#021B76] flex justify-center items-center "
      style={{ ...backgroundImageStyle, height: "70vh" }}
    >
      <div>
        <div className="container  mx-auto justify-center items-center py-10 px-6">
          <div className="text-center pb-8 py-12">
            <p className="lg:text-6xl text-4xl  font-bold text-white">
              Subscribe To <br /> Our Newsletter
            </p>
            <div>
              <p className="pb-4 text-white lg:text-xl text-base sm:text-sm">
                Stay updated with educational resources and news <br />
                around your skill progress
              </p>
            </div>
          </div>

          <div
            className="border-solid border-2 border-sky-500 md:p-5"
            style={{ borderColor: "#e46601" }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-2 sm:space-y-0 sm:space-x-3">
              <input
                type="text"
                placeholder="Enter Email"
                className="lg:w-56 md:w-auto px-4 py-2 rounded-lg focus:outline-none bg-[#021b76] bg-opacity-50 border-none"
              />

              <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-2 px-4 md:w-56 rounded-lg focus:outline-none">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
