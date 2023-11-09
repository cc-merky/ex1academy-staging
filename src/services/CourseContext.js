import React, { createContext, useState } from "react";
import axios from "axios";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchOnlineCourse = () => {
    axios
      .get("https://e1x.nueoffshore.com/api/courses/online/online-courses/all")
      .then((response) => {
        if (response.data) {
          setCourses(response.data);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const fetchPaginatedData = (page, perPage) => {
    setIsLoading(true);
    axios
      .get(`/api/courses?page=${page}&perPage=${perPage}`)
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
    <CourseContext.Provider
      value={{
        courses,
        isLoading,
        error,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        fetchPaginatedData,
        fetchOnlineCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}
