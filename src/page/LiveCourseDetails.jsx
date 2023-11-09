import React from "react";
import CourseDetails from "../components/LiveCourseDetail/CourseDetails";
import Description from "../components/LiveCourseDetail/Description";
import Learn from "../components/LiveCourseDetail/Learn";
import Benefit from "../components/LiveCourseDetail/Benefit";

import Instructor from "../components/LiveCourseDetail/Instructor";
import Reviews from "../components/LiveCourseDetail/Reviews";
import Grow from "../components/LiveCourseDetail/Grow";
import Course from "../components/LiveCourseDetail/Course";

const LiveCourseDetailPage = () => {
  return (
    <div>
      <CourseDetails />
      <Description />
      <Learn />
      <Benefit />
      <Instructor />
      <Reviews />
      <Grow />
      <Course />
    </div>
  );
};

export default LiveCourseDetailPage;
