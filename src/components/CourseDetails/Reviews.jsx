import React, { useState, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { CourseContext } from "../../services/CourseContext";
import reviewImage from "../../assets/images/review.png";
import ratingIcons from "../../assets/icons/ratingsIcon.png";
import { HiArrowSmRight } from "react-icons/hi";

const Reviews = () => {
  const [message, setMessage] = useState("");

  const { courses, fetchOnlineCourse } = useContext(CourseContext);
  const courseId = courses && courses.id;
  console.log("this is the course id ", courseId);

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

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
    }
  }, [controls, inView]);

  const sendMessage = async () => {
    try {
      const formData = new FormData();
      formData.append("course_id", courseId); // Add course_id to FormData
      formData.append("comment", message);

      // Send the review data to the API endpoint
      const response = await axios.post(
        "https://e1x.nueoffshore.com/api/reviews/add",
        formData
      );

      // Handle the response as needed
      console.log("Review added:", response.data);
    } catch (error) {
      console.error("Error adding review:", error);
    }

    setMessage(""); // Clear the message input
  };

  return (
    <div className="border-t">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="lg:w-3/5 py-12"
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          ref={ref}
        >
          <div className="flex flex-col">
            <img src={reviewImage} alt="reviewImage" />
            <div className="py-8">
              <h1 className="font-bold">Write a Review</h1>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="py-3">Review Content</p>
                  <textarea
                    type="text"
                    id="userInput"
                    name="userInput"
                    placeholder="Message"
                    className="w-full h-[250px] outline-none border p-[10px] text-left"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <p>Rating</p>
                  <img
                    src={ratingIcons}
                    alt="rating-icon"
                    style={{ width: "100px", height: "20px" }}
                  />
                </div>
                <button
                  className="bg-custom-button flex items-center gap-3 py-3 px-6 font-bold text-white rounded-lg"
                  onClick={sendMessage}
                >
                  SEND MESSAGE
                </button>
              </div>
              <div className="flex  lg:justify-end justify-center lg:mt-2 mt-6">
                <NavLink to="/" className="flex items-center gap-2">
                  <p className="underline">next unit</p>
                  <HiArrowSmRight className="ml-auto" />
                </NavLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
