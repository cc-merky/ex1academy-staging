import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(20 / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <nav className=" max-w-6xl mx-auto flex justify-end  py-10  px-4   ">
      <ul className="flex rounded border border-gray-300 overflow-hidden">
        <li>
          <button
            onClick={handlePrevbtn}
            className={`block py-2 px-3 ${
              currentPage === pages[0] ? "bg-blue" : "bg-white"
            } hover:bg-blue-500 hover:text-white`}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pages.map((pageNumber) => {
          if (
            pageNumber < maxPageNumberLimit + 1 &&
            pageNumber > minPageNumberLimit
          ) {
            return (
              <li key={pageNumber}>
                <button
                  onClick={handleClick}
                  className={`flex py-2 px-3 ${
                    pageNumber === currentPage
                      ? "bg-custom-button text-black"
                      : "bg-white"
                  } hover:bg-custom-button hover:text-black`}
                  id={pageNumber}
                >
                  {pageNumber}
                </button>
              </li>
            );
          } else {
            return null;
          }
        })}
        <li>
          <button
            onClick={handleNextbtn}
            className={`block py-2 px-3 ${
              currentPage === pages[pages.length - 1]
                ? "bg-gray-300"
                : "bg-white"
            } hover:bg-blue-500 hover:text-white`}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
