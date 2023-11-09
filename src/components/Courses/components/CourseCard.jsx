import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoIosMagnet } from "react-icons/io";
import iconBar from "../../../assets/icons/Vector (5).png";
import bookBar from "../../../assets/icons/Group.png";
import { LiaClock } from "react-icons/lia";
import courseGroup from "../../../assets/images/coursegroupimages.png";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiRightArrowCircle } from "react-icons/bi";
import star from "../../../assets/icons/star.png";

const CourseCard = ({
  images,
  title,
  beginnerText,
  lessonsText,
  hours,
  videos,
  rating,
  uuid,
  price,
  instructor,
  currency,
}) => {
  const navigate = useNavigate();
  const courseImage = images && images.length > 0 ? images[0] : "avatar.jpg";

  const handleViewDetails = (uuid) => {
    console.log(uuid);
    navigate(`/course/${uuid}`);
  };
  return (
    <div className="max-w-6xl p-4 mx-auto bg-white">
      <div className="mb-4">
        <div className="flex space-x-4   ">
          <div className="lg:flex w-full lg:gap-12 gap-1 mb-4">
            <div className="flex justify-center md:justify-start">
              <div className="flex space-x-2">
                {images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    width="300"
                    height="300"
                    alt={`course-image-${index}`}
                    className="mx-auto md:mx-0 object-fill"
                  />
                ))}
              </div>
            </div>

            <div className="w-full  ">
              <div className="space-y-3 lg:mt-4    ">
                <h1 className="font-bold lg:text-2xl lg:text-left text-center ">
                  {title}
                </h1>
                <p className=" lg:text-left text-center ">
                  {" "}
                  Instructor : {instructor}
                </p>
                <p className="font-bold lg:text-xl lg:text-left text-center">
                  {currency} {price}
                </p>

                <div className="flex items-center justify-between gap-6 px-4 lg:justify-start lg:px-0 ">
                  <div className="flex items-center gap-1">
                    <img src={iconBar} alt="icon-bar" />
                    <p className="text-sm lg:text-md ">{beginnerText}</p>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <img src={bookBar} alt="icon-bar" />
                    <p className="text-sm lg:text-md">{lessonsText}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 px-4 lg:justify-start lg:px-0">
                  <div className="flex items-center gap-1">
                    <LiaClock />
                    <p className="text-sm lg:text-md"> {hours}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiOutlineVideoCamera />
                    <div className="flex items-center">
                      <p className="text-sm lg:text-md">{videos}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 lg:mt-10">
                <div className="flex justify-between px-4 lg:px-0">
                  <div className="flex gap-4">
                    <img src={courseGroup} alt="course-group" />
                    <div className="flex items-center gap-1">
                      <p className="lg:text-lg">{rating}</p>
                      <img src={star} width="15" height="15" alt="star" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="flex items-center gap-1 lg:text-lg"
                      onClick={() => handleViewDetails(uuid)}
                    >
                      View Details
                      <span>
                        <BiRightArrowCircle />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
