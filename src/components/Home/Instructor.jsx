import React, { useState, useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomButton from "./components/CustomButton";
import manInstructor from "../../assets/images/man.png";
import womanInstructor from "../../assets/images/woman.png";

function Instructor() {
  const [animateImage, setAnimateImage] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  useEffect(() => {
    if (inView) {
      // When the component is in view, trigger the animation
      controls.start({
        y: 0, // The final position in the y-axis
        opacity: 1, // Set opacity to 1 to make it visible
        transition: {
          duration: 0.5, // Adjust the duration as needed
        },
      });
      setAnimateImage(true);
    }
  }, [controls, inView]);

  const buttonVariants = {
    hover: {
      y: -5, // Move the button 5 pixels up on hover
    },
    tap: {
      scale: 0.95, // Scale the button down when clicked
    },
  };
  return (
    <div className="container max-w-5xl mx-auto justify-center items-center">
      <div className="lg:flex  md:flex-row md:justify-center">
        <div className="lg:w-1/2  p-4">
          <div className="h-full flex flex-col">
            <img
              src={manInstructor}
              alt="manInstructor"
              className="h-full object-cover lg:mt-0 md:mt-m lg:w-full w-2/3 mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full md:justify-center md:items-center p-4 lg:mt-20 ">
          <motion.div
            className="h-full flex flex-col justify-center "
            initial={{ y: 100, opacity: 0 }}
            animate={controls}
            ref={ref}
          >
            <h2 className="p-4 text-4xl font-bold">
              Instructor-Led <br></br>Live Classes
            </h2>
            <div className="p-4 lg:space-y-10 space-y-6">
              <div className="flex lg:items-center space-x-2 items-center">
                <BiCheckCircle />
                <p>Learn From The Comfort Of Your Living Room</p>
              </div>
              <div className="flex lg:items-center space-x-2 items-center">
                <BiCheckCircle />
                <p>Be Matched With Other Learners And Coaches</p>
              </div>
              <div className="flex items-center space-x-2 md:items-center">
                <BiCheckCircle />
                <p>Work On Trade Cases And Capstone Projects</p>
              </div>
              <div className="flex items-center  space-x-2 md:items-center">
                <BiCheckCircle />
                <p>Live Classes Means You Can Archive Your Entire Class</p>
              </div>
              <div className=" flex items-center space-x-2 md:items-center">
                <BiCheckCircle />
                <p>1009 Virtual</p>
                <div className="flex items-center space-x-2 md:items-center ">
                  <BiCheckCircle />

                  <p>Flexible Payment</p>
                </div>
              </div>

              <motion.div
                className="flex items-center justify-center md:items-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <CustomButton text="See All" className="center-button" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:flex  md:flex-row md:justify-center ">
        <div className=" lg:mt-20 lg:w-1/2  w-full p-4">
          <div className="h-full flex flex-col">
            <h1 className="p-4 text-4xl font-bold">
              Your Entire Enterprise <br></br>Transformation
            </h1>
            <div className="p-4 lg:space-y-10 space-y-6">
              <div className="flex items-center justify-between md:items-center">
                <p>Deliver On Strategic Business Goals By Building Critical</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Realize The Full Value Of Technology Investments</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Build A Data-Driven, Digitally-Fluent Workforce</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Live Classes Means You Can Archive Your Entire Class</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Dedicated screen</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Co-operation</p>
                <BiCheckCircle />
              </div>
              <motion.div
                className="flex items-center justify-center md:justify-end md:items-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <CustomButton text="See All" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-full  p-4">
          <div className="h-full flex flex-col">
            <img
              src={womanInstructor}
              alt="manInstructor"
              className="h-full object-cover lg:mt-0 md:mt-m lg:w-full w-2/3 mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
