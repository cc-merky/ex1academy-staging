import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../services/LoginAuthContext";
import { motion } from "framer-motion";
import vector from "../../assets/icons/Vector.png";
import illustration from "../../assets/images/illustration.png";
import { useNavigate, useParams } from "react-router-dom";
import { LiveCourseDetailContext } from "../../services/LiveCourseDetail";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const { uuid } = useParams();
  const navigate = useNavigate();

  const { courses, isLoading, error, fetchLiveCourseDetails } = useContext(
    LiveCourseDetailContext
  );

  useEffect(() => {
    if (uuid) {
      fetchLiveCourseDetails(uuid);
    }
  }, []);

  console.log("let me check the live course ", courses);

  const handleEnrollClick = () => {
    if (user) {
      navigate("/dashboard/course");
    } else {
      navigate("/sign-in");
    }
  };
  const handleBackToCourses = () => {
    navigate("/course-live"); // Replace '/all-courses' with the actual path to your "All Courses" page
  };

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
  const buttonVariants = {
    hover: {
      y: -5, // Move the button 5 pixels up on hover
    },
    tap: {
      scale: 0.95, // Scale the button down when clicked
    },
  };
  return (
    <div className="bg-custom-gradient  lg:h-[850px] h-full ">
      <div className="max-w-6xl lg:flex mx-auto py-6 lg:px-0 px-6 ">
        <motion.div
          className="  lg:w-1/2 w-full  space-y-8 mt-9   "
          variants={imgVariants} // Apply animation variants
          initial="initial"
          animate="animate"
        >
          <button
            className="border border-blue-300 py-2 px-6 text-white"
            onClick={handleBackToCourses}
          >
            Live Programme
          </button>

          <h1 className="font-bold text-white lg:text-6xl md:text-3xl">
            {courses?.title}
          </h1>

          <p className="text-white lg:text-lg md:text-xs">
            {courses?.course_description
              ? courses.course_description.slice(0, 50)
              : "Becoming a Financial Data Analyst involves acquiring the skills and knowledge required to analyze and interpret financial data to make informed business decisions. Financial Data Analysts are responsible"}
          </p>

          <div>
            <p className="text-white">Last Updated: {courses?.date}</p>
          </div>

          <div className="mt-4">
            <div className="py-8 bg-[#256BDB] space-y-4">
              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">{courses?.course_level_id}</p>
                </div>
              </div>

              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">{courses?.course_level_id}</p>
                </div>
              </div>
              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">{courses?.course_level_id}</p>
                </div>
              </div>
              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">{courses?.course_level_id}</p>
                </div>
              </div>
            </div>
            <div className="bg-custom-gradient w-full h-[200px]"></div>
          </div>
        </motion.div>

        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <div className="mb-4">
            <img
              src={illustration}
              alt="illustration"
              width="500"
              height="500"
            />
          </div>
          <div className=" flex justify-start space-x-4 text-white mb-4 text-3xl font-bold">
            <div className="flex">
              <p>
                {courses?.currency_NGN}
                {courses?.price_NGN}
              </p>
            </div>
          </div>
          <div className="flex space-x-11">
            <motion.button
              className="border-none bg-custom-button w-96 outline-none px-12 md:px-16 py-3 rounded-md text-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleEnrollClick}
            >
              Enroll
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
