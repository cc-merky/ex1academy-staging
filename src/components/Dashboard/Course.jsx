import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CourseCard from "./course/CourseCard";
import { GoSearch } from "react-icons/go";
import LoadingSpinner from "../LoadingSpinner";
import ErrorPage from "../../page/ErrorPage";

import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";

const DashboardCourse = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    fetch("https://e1x.nueoffshore.com/api/courses/course-list/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("i wnat to check all course", data);
        setCourses(data); // Update the state with the fetched data
        setIsLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error); // Handle any errors
        setIsLoading(false); // Set loading to false
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="py-10 custom-course-background">
      <div className="max-w-6xl mx-auto">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorPage errors={error} />
        ) : (
          <>
            <div className="lg:flex lg:justify-between flex-row items-center px-4">
              <p className="text-4xl font-bold lg:mb-0 mb-8">My Courses</p>
              <div className="lg:flex lg:justify-end justify-center">
                <div className="relative">
                  <input
                    type="text"
                    className="bg-white h-10 px-10 pl-10 text-sm focus:outline-none lg:w-64 w-full"
                    placeholder="SEARCH COURSE"
                  />
                  <div className="absolute top-0 left-0 mt-3 ml-3">
                    <GoSearch />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6 mt-8">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  imageSrc={operationImage}
                  title={course.title}
                  duration={course.duration}
                  onViewCourse={() => {}}
                  uuid={course.uuid}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardCourse;
