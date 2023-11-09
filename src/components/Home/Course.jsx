import React, { useEffect, useState, useContext } from "react";
import CourseCard from "./components/CourseCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../LoadingSpinner";
import { CourseContext } from "../../services/CourseContext";
import ErrorPage from "../../page/ErrorPage";
import CustomButton from "./components/CustomButton";
import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";
import financeImage from "../../assets/images/financial.jpg";
import background from "../../assets/images/wave.png";

function Course() {
  const { courses, isLoading, error, fetchOnlineCourse } =
    useContext(CourseContext);
  const [animateImage, setAnimateImage] = useState(false);

  console.log("home", courses);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

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

  const fetchFirstTwo = courses.slice(0, 2);
  console.log(fetchFirstTwo);
  const fetchSecondFour = courses.slice(2, 4);

  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
    <div
      className="mt-20 bg-gradient-to-r from-blue-800 to-indigo-800 py-4"
      style={backgroundImageStyle}
    >
      {isLoading && <LoadingSpinner />}

      {error && <ErrorPage errors={error} />}

      {!isLoading && !error && (
        <div className="items-center justify-center max-w-6xl px-4 mx-auto ">
          <div>
            <h1 className="pb-2 text-3xl font-bold text-center lg:text-5xl gradient-text-blue">
              Popular Course
            </h1>

            <p className="mb-5 text-sm text-center lg:text-xl">
              Explore From All Your Online Course
            </p>
          </div>

          <motion.div
            className="lg:flex lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center md:px-4"
            initial={{ y: 100, opacity: 0 }}
            animate={controls}
            ref={ref}
          >
            {fetchFirstTwo.map((course) => (
              <CourseCard
                key={course.id}
                imageSrc={healthImage}
                title={course.title}
                duration={course.duration}
                onViewCourse={() => {}}
                loading="lazy"
                uuid={course.uuid}
              />
            ))}
          </motion.div>

          <div className="lg:flex lg:justify-center lg:items-center md:flex md:flex-row md:justify-center">
            {fetchSecondFour.map((course) => (
              <CourseCard
                key={course.id}
                imageSrc={healthImage}
                title={course.title}
                duration={course.duration}
                onViewCourse={() => {}}
                loading="lazy"
                uuid={course.uuid}
              />
            ))}
          </div>

          <motion.div
            className="mt-12 text-center mb-9"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <CustomButton text="See All" link="/course" />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Course;
