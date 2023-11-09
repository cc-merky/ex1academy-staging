import React, { useState, useEffect, useContext } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import CourseCard from "./components/CourseCard";
import courseImg from "../../assets/images/course-img.png";
import { GoSearch } from "react-icons/go";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import ErrorPage from "../../page/ErrorPage";
import { motion } from "framer-motion";
import { LiveCourseContext } from "../../services/LiveContext";
import { simulateAPICall } from "../CourseDetails/FakeApi";

const LiveCourse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]); // Store filtered course data
  const [showSearchResults, setShowSearchResults] = useState(false);
  const {
    courses,
    isLoading,
    error,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    fetchPaginatedData,
    fetchLiveCourse,
  } = useContext(LiveCourseContext);

  useEffect(() => {
    fetchLiveCourse();
  }, []);

  // useEffect(() => {
  //   // Fetch data when the component mounts or when the current page changes
  //   fetchPaginatedData(currentPage, itemsPerPage);
  // }, [currentPage, itemsPerPage]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Update searchQuery as the user types
    performSearch(query); // Call performSearch with the current query
  };

  // Function to perform the search and update the state
  const performSearch = () => {
    simulateAPICall(searchQuery) // Call your API function with the search query
      .then((data) => {
        console.log(data);
        setFilteredCourses(data);
        setShowSearchResults(true);
      })
      .catch((error) => {
        console.error("Error while fetching search results: ", error);
      });
  };

  // Function to reset to showing all courses
  const resetCourses = () => {
    setFilteredCourses([]); // Set to an empty array to show all courses
    setShowSearchResults(false);
  };

  // const totalPageCount = Math.ceil(
  //   (showSearchResults ? filteredCourses.length : courses.length) / itemsPerPage
  // );

  // // Generate an array of page numbers from 1 to totalPageCount
  // const pageNumbers = Array.from(
  //   { length: totalPageCount },
  //   (_, index) => index + 1
  // );

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

  return (
    <div className="lg:relative lg:overflow-auto">
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorPage errors={error} />
      ) : (
        <>
          <div className="background-card h-[450px] lg:absolute lg:top-0 lg:-z-0 w-full">
            <div className="max-w-6xl mx-auto px-4">
              <div className="relative flex flex-col md:flex-row">
                <div className="lg:w-1/2 w-full lg:mt-12">
                  <div className="flex flex-col">
                    <div className="flex items-center text-blue-400 ">
                      <NavLink to="/">Home</NavLink>
                      <MdOutlineNavigateNext />
                      <p>Courses</p>
                    </div>
                    <div className="lg:mt-12 mt-4 lg:space-y-2">
                      <h1 className="font-bold lg:text-5xl text-2xl">
                        Live Courses
                      </h1>
                      <p className="l:font-bold ">{courses?.title}</p>
                    </div>
                    <div className="relative flex items-center gap-6 lg:mt-28 mt-6">
                      <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                        Course
                      </button>
                      <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                        Popular
                      </button>
                      <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                        Latest
                      </button>
                      <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400 ">
                        Trending
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="flex flex-col">
                    <div className="flex lg:justify-start  justify-center ">
                      <img
                        src={courseImg}
                        alt="course-img"
                        className="mx-auto flex justify-center"
                      />
                    </div>
                    <div className=" flex lg:justify-end justify-center ">
                      <div class="relative ">
                        <input
                          type="text"
                          class="bg-white h-10 px-10 pl-10  text-sm focus:outline-none lg:w-64 w-full "
                          placeholder="SEARCH COURSE"
                        />
                        <div class="absolute top-0 left-0 mt-3 ml-3">
                          <GoSearch />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:mt-[380px] lg:z-50 lg:relative px-2">
            <div className="lg:-z-50">
              <div className="mb-6">
                {showSearchResults ? (
                  filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <CourseCard
                        key={course.id}
                        images={course.images}
                        title={course.title}
                        price={course.price}
                        beginnerText={course.course_level_id}
                        lessonsText={course.lesson_count}
                        hours={course.duration}
                        videos="30"
                        rating="4.3"
                        currency={course.currency}
                        instructor={course.instructors}
                        uuid={course.uuid}
                      />
                    ))
                  ) : (
                    <p>No courses match the search query.</p>
                  )
                ) : (
                  // Show all courses when not searching
                  courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      images={course.images}
                      title={course.title}
                      price={course.price}
                      beginnerText={course.course_level_id}
                      lessonsText={course.lesson_count}
                      hours={course.duration}
                      videos="30"
                      rating="4.3"
                      currency={course.currency}
                      instructor={course.instructors}
                      uuid={course.uuid}
                    />
                  ))
                )}
              </div>

              <div className="flex justify-center p-4 mb-4    text-[#e46601] ">
                {showSearchResults && (
                  <button onClick={resetCourses}>Show All Courses</button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveCourse;
