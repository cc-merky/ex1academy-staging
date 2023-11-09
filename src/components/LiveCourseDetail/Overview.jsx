import React, { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Overview = () => {
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
              Becoming a Financial Data Analyst involves acquiring the skills
              and knowledge required to analyze and interpret financial data to
              make informed business decisions. Financial Data Analysts are
              responsible for collecting, cleaning, and organizing financial
              data, often utilizing tools such as Excel, SQL, and data
              visualization software. Financial Data Analysts play a crucial
              role in helping organizations optimize their financial performance
              and mitigate risks through data-driven insights.
            </p>

            <p>
              {" "}
              They perform quantitative analysis to identify trends, patterns,
              and anomalies in financial data to support strategic planning and
              investment decisions. Strong analytical skills, proficiency in
              financial modeling, and a solid understanding of financial markets
              are essential for success in this role.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
