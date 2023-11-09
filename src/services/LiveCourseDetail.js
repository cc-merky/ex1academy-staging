import React, { createContext, useState } from "react";
import axios from "axios";

export const LiveCourseDetailContext = createContext();

export function LiveCourseDetailProvider({ children }) {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLiveCourseDetails = (uuid) => {
    axios
      .get(
        `
        https://e1x.nueoffshore.com/api/courses/live/live-courses/details/${uuid}
      `
      )
      .then((response) => {
        setCourses(response.data);

        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <LiveCourseDetailContext.Provider
      value={{ courses, isLoading, error, fetchLiveCourseDetails }}
    >
      {children}
    </LiveCourseDetailContext.Provider>
  );
}
