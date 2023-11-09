import React, { createContext, useState } from "react";
import axios from "axios";

export const LiveCourseContext = createContext();

export function LiveCourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLiveCourse = () => {
    axios
      .get("https://e1x.nueoffshore.com/api/courses/live/live-courses/all")
      .then((response) => {
        if (response.data) {
          setCourses(response.data);
          console.log("let me check", response.data);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <LiveCourseContext.Provider
      value={{
        courses,
        isLoading,
        error,
        fetchLiveCourse,
      }}
    >
      {children}
    </LiveCourseContext.Provider>
  );
}
