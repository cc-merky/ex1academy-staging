import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import StudentImage from "../../assets/images/studentReviews.png";
const StudentReviews = () => {
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
    <div className="max-w-6xl mx-auto py-10 px-4">
      <motion.div
        className="lg:w-2/5 w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        ref={ref}
      >
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            The courses are well-structured, and the instructors are
            knowledgeable and supportive. I've gained practical skills that have
            already made a positive impact on my career. I highly recommend
            Academy to anyone looking to advance their education
          </p>
          <div className="flex items-center justify-between border-b pb-1  ">
            <div>
              <p className="font-bold">Jessica Akoh</p>
              <p className="text-xs">21 days ago</p>
            </div>
            <div>
              <img src={StudentImage} alt="student Reviews" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentReviews;
