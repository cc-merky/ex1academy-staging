import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseDetailContext } from "../../services/CourseDetails";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instructor1 from "../../assets/images/instructor.png";
import instructor2 from "../../assets/images/instructor.png";
import instructor3 from "../../assets/images/instructor.png";

const Instructor = () => {
  const { uuid } = useParams();

  const { courses, isLoading, error, fetchCourseDetails } =
    useContext(CourseDetailContext);

  useEffect(() => {
    if (uuid) {
      fetchCourseDetails(uuid);
    }
  }, []);

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
    <div className="bg-custom-blue py-20">
      <div className="max-w-5xl mx-auto ">
        <div className="mb-10 lg:space-y-10 md:space-y-2 px-4">
          <h1 className="font-bold lg:text-5xl text-2xl text-white text-center md:text-left">
            Your Instructor(s)
          </h1>

          <p className="text-white lg:text-lg text-xs">
            With Our World Class Tutor With Backed Up Experience in Top
            Companies
            <br className="hidden lg:inline" />
            You will Be Equip With The Necessary Learning Direction
          </p>
        </div>
        <motion.div
          class="flex flex-col md:flex-row items-center justify-center md:justify-start"
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          ref={ref}
        >
          <div class="md:w-1/3 p-4 space-y-4">
            {/* {courses.images.map((img) => (
              <img key={img.id} src={instructor1} alt="thumbs" />
            ))} */}

            <div className="space-y-2">
              {/* {courses.instructors.map((instructor) => (
                <p className="text-white font-bold ">{instructor}</p>
              ))} */}
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor2} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold"> Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor3} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold">Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Instructor;
