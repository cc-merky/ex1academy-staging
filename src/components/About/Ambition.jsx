import React from "react";
import { useState, useEffect } from "react";
import pics from "../../assets/images/happy-african.png";

const Ambition = () => {
  const [onlineCourses, setOnlineCourses] = useState(232);
  const [students, setStudents] = useState(234);

  const generateRandomNumbers = () => {
    setOnlineCourses(Math.floor(Math.random() * 1000)); // Generate a random number between 0 and 999 for online courses
    setStudents(Math.floor(Math.random() * 1000)); // Generate a random number between 0 and 999 for students
  };

  // Use useEffect to update the numbers periodically (e.g., every 5 seconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomNumbers();
    }, 5000); // Update the numbers every 5 seconds (you can adjust the interval as needed)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="custom-course-background py-20">
      <div className="max-w-6xl mx-auto ">
        <div className="lg:flex lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center md:px-4 gap-3">
          <div className="w-full lg:w-1/2 px-4">
            <div className="space-y-6">
              <p className="lg:text-4xl font-bold   ">
                Turn Your Ambition Into A <br></br> Success Story
              </p>
              <p className="text-md">
                Education opens up the mind, expands it, and allows you to
                improve your life in so many ways. E1X 1 Academy turned it up
                should no valley cousin he. Speaking numerous ask did horrible
                packages set. Ashamed herself has distant can studied Mrs. Led,
                therefore, its Middleton perpetual fulfilled provision.
                Frankness it up should no valley. He me restructure this and add
                E1X 1 Academy to it.
              </p>
              <div className="flex space-x-9 justify-center sm:justify-start md:justify-start">
                <div>
                  <p className="text-3xl font-bold text-[#e46601]">
                    {onlineCourses}K
                  </p>
                  <p className="font-bold">Online Courses</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#e46601]">
                    {students}K
                  </p>
                  <p className="font-bold"> Students</p>
                </div>
              </div>
              <button className="flex py-4 px-12 bg-custom-button text-white font-bold rounded lg:justify-start justify-center mx-auto lg:mx-0">
                Explore Course
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center h-[600px]">
            <img
              src={pics}
              alt="headerImage"
              className="h-full object-cover lg:mt-0 md:mt-8"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambition;
