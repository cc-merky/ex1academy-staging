import React, { useState, useContext, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import imageLivePics from "../../assets/images/video image container.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";
import PresentationItem from "./components/Presentation";
import Overview from "./Overview";
import ErrorPage from "../../page/ErrorPage";
import LoadingSpinner from "../LoadingSpinner";
import { CourseDetailContext } from "../../services/CourseDetails";

const Course = () => {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const { courses, isLoading, error, fetchCourseDetails } =
    useContext(CourseDetailContext);

  const [expandedSection, setExpandedSection] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (uuid) {
      fetchCourseDetails(uuid);
    }
  }, [uuid]);

  console.log("checking the online page", courses);

  useEffect(() => {
    const video = document.getElementById("courseVideo");
    const storedPosition = localStorage.getItem("videoPlaybackPosition");
    if (storedPosition) {
      video.currentTime = parseFloat(storedPosition);
    }
  }, []);

  const toggleExpand = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
      setVideoUrl(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleBackToCourses = () => {
    navigate("/course"); // Replace '/all-courses' with the actual path to your "All Courses" page
  };

  const imgVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const handleVideoPause = () => {
    // Store the video's current time when it's paused
    const video = document.getElementById("courseVideo");
    localStorage.setItem("videoPlaybackPosition", video.currentTime);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorPage errors={error} />
        ) : (
          <>
            <button
              className="border py-2 px-5 text-sm"
              onClick={handleBackToCourses}
            >
              Back To Courses
            </button>

            <div className="lg:flex justify-between">
              <div
                className="lg:w-3/5 w-full mt-12 space-y-6"
                variants={imgVariants}
                initial="initial"
                animate="animate"
              >
                {videoUrl ? (
                  <video
                    controls
                    width="100%"
                    id="courseVideo"
                    onPlay={() => {
                      localStorage.removeItem("videoPlaybackPosition");
                    }}
                    onPause={handleVideoPause}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    <source src={videoUrl} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={imageLivePics} alt="imageLive" loading="lazy" />
                )}
                <p className="lg:py-6 py-0">{courses?.title}</p>
              </div>
              <div className="lg:w-1/3 w-full  mt-12 ">
                <div className="border border-blue-300 rounded-lg">
                  <div className="bg-custom-blue py-3">
                    <p className="text-white p-4">Course Content</p>
                  </div>
                  {courses?.lesson?.map((lesson, index) => (
                    <div key={lesson.uuid}>
                      <div
                        className="flex justify-between items-center p-4 border-b cursor-pointer"
                        onClick={() => toggleExpand(`section-${index}`)}
                      >
                        <p>{lesson.title}</p>
                        {expandedSection === `section-${index}` ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                      {expandedSection === `section-${index}` && (
                        <div className="p-4">
                          <PresentationItem
                            icon={<MdSlowMotionVideo />}
                            title={lesson.title}
                            duration={lesson.duration}
                            action="Watch Video"
                            onClick={() => setVideoUrl(lesson.course_link)}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Overview />
    </>
  );
};

export default Course;
