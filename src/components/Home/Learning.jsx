import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageTwo from "../../assets/images/frame.png";
import Frame from "../../assets/icons/Frame 70.png";
import FrameTwo from "../../assets/icons/Frame 71.png";
import FrameThree from "../../assets/icons/Frame 72.png";
import ImageLeaning from "../../assets/images/imageCrew.png";

function Learning() {
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

  return (
    <div className=" max-w-6xl mx-auto mt-12 px-4 ">
      <div className="lg:w-5/6 md:w-full">
        <div className="flex flex-col mb-8">
          <h1 className="text-center lg:text-6xl text-2xl font-bold mb-4 gradient-text">
            Why We Are The Best <br /> Online Learning Platform
          </h1>
          <p className="text-center lg:text-sm text-xs ">
            Delivered By Industry And Subject Expert. Our Course Will Equip You
            With <br /> Confidence And Skill Directly Transferable To Workplace
          </p>
        </div>
        <div className="lg:flex md:justify-center md:items-center">
          <div className="lg:w-1/2   w-full p-4 bg-gray-100 ">
            <img
              src={ImageLeaning}
              alt="Person learning"
              className="md:w-full"
              loading="lazy"
            />
            <img
              src={ImageTwo}
              alt="Two people discussing"
              className="md:w-full"
              loading="lazy"
            />
          </div>
          <div className=" lg:w-2/3 w-full p-4 bg-gray-100 ">
            <motion.div
              className="flex flex-col space-y-10 md:justify-center"
              initial={{ y: 100, opacity: 0 }}
              animate={controls}
              ref={ref}
            >
              <div className="p-8 bg-[#256bdb] text-white mb-3 flex  items-center">
                <div className="pr-4 ">
                  <img src={Frame} alt="frame" />
                </div>
                <div>
                  <p className="pb-3 font-semibold ">
                    Discover Exciting Learning Journeys
                  </p>
                  <p>
                    Embark on a Journey of Knowledge and Skill Discovery Through
                    Captivating Video Lectures, Dynamic Graphics, Interactive
                    Data Visualization, and Engaging Interactive Elements.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="p-8 bg-[#021b76] text-white mb-3 flex items-center">
                  <div className="pr-4">
                    <img src={FrameTwo} alt="frame" />
                  </div>
                  <div>
                    <p className="pb-3 font-semibold">
                      Embark on a Self-Paced Learning Journey
                    </p>
                    <p>
                      Interactive learning at e-double one academy. Showcase
                      your understanding through open response assessments and
                      immersive virtual environments
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#061445] text-white mb-3 flex items-center">
                <div className="pr-4">
                  <img src={FrameThree} alt="frame" />
                </div>
                <div>
                  <p className="pb-3 font-semibold">
                    Unleash the power of perpetual learning
                  </p>
                  <p>
                    Empower yourself through E-DoubleOne Academy's ongoing skill
                    development, reshaping your thinking and abilities to drive
                    tangible real-world change by swiftly applying newfound
                    expertise to your role
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
