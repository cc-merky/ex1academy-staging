import React, { useState, useEffect, useContext } from "react";
import { CourseDetailContext } from "../../services/CourseDetails";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Overview = () => {
  const { courses, isLoading, error, fetchCourseDetails } =
    useContext(CourseDetailContext);

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
    <div className="border-t">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <motion.div
          className="lg:w-3/5"
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          ref={ref}
        >
          <div className="space-y-6">
            <h1 className="font-bold">OverView</h1>
            <p>
              {courses?.course_description
                ? courses.course_description.slice(0, 150)
                : "They perform quantitative analysis to identify trends, patterns, and anomalies in financial data to support strategic planning and investment decisions. Strong analytical skills, proficiency in financial modeling, and a solid understanding of financial markets are essential for success in this role."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
