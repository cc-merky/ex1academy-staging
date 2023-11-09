import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import { CourseContext } from "../../../services/CourseContext";

function CourseCard({ imageSrc, title, duration,  uuid }) {
  const navigate = useNavigate();

  const handleViewDetails = (uuid) => {
    console.log("checking ", uuid);
    navigate(`/course/${uuid}`);
  };

  return (
    <div className="p-3 lg:w-96 md:w-80">
      <div className="h-full p-3 bg-white">
        <img
          src={imageSrc}
          alt="course"
          className="duration-300 hover:brightness-110 transition-brightness"
          loading="lazy"
        />

        <div>
          <p className="py-3 font-bold text-center">{title}</p>

          <div className="flex justify-between p-4">
            <p>{duration}</p>
            <button
              className="flex items-center space-x-2"
              onClick={() => handleViewDetails(uuid)}
            >
              <p>View Course</p>
              <BsArrowRightCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
