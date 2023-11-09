import React from "react";
import Course from "../components/CourseDetails/Course";

import Reviews from "../components/CourseDetails/Reviews";
import StudentReviews from "../components/CourseDetails/StudentReviews";

const OnlineCourseDetail = () => {
  return (
    <div>
      <Course />

      <Reviews />
      <StudentReviews />
    </div>
  );
};

export default OnlineCourseDetail;
