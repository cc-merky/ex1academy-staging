import React, { useState, useEffect } from "react";
import icons from "../../assets/icons/icons.png";
import learnImages from "../../assets/images/syllabus.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Learn = () => {
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
    <div className="w-full mx-auto custom-gradient">
      <div className="max-w-5xl mx-auto py-10  ">
        <h1 className="py-8 lg:text-4xl text-2xl  font-bold  px-4">
          What Will You Learn
        </h1>
        <motion.div
          className="lg:flex md:flex-row lg:gap-20 md:gap-2 mt-6"
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          ref={ref}
        >
          <div className="lg:w-2/3 w-full ">
            <div className="mb-4 flex gap-8 px-4 ">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p className="font-bold">Data Collection and Cleansing</p>
                <p>
                  You will learn how to gather financial data from various
                  sources, such as company reports, market data, and databases.
                  This includes the crucial skill of cleaning and transforming
                  raw data into a usable format for analysis.
                </p>
              </div>
            </div>
            <div className="mb-4 flex gap-8 px-4 ">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p className="font-bold">Financial Analysis</p>
                <p>
                  You will gain expertise in conducting financial analysis,
                  which involves assessing the financial health and performance
                  of individuals, companies, or markets. This encompasses
                  techniques like ratio analysis, trend analysis, and
                  forecasting.
                </p>
              </div>
            </div>
            <div className="mb-4 flex gap-8 px-4">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p className="font-bold">Statistical Analysis and Modeling</p>
                <p>
                  You will delve into statistical methods and mathematical
                  modeling to identify patterns, correlations, and anomalies in
                  financial data. Regression analysis, time series analysis, and
                  risk modeling are examples of essential tools in your{" "}
                </p>
              </div>
            </div>
            <div className="mb-4 flex gap-8 px-4 py-5">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p className="font-bold">Data Visualization</p>
                <p>
                  You will master data visualization techniques using tools like
                  Excel, Tableau, or Python libraries like Matplotlib and
                  Seaborn. This skill enables you to present complex financial
                  data in clear and informative visuals.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="flex lg:justify-start justify-center">
              <div>
                <img
                  src={learnImages}
                  alt="learn"
                  loading="lazy"
                  className="lg:h-[600px] h-full w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Learn;
