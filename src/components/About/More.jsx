import React from "react";
import YoungStudent from "../../assets/images/young-student-working-assignment.jpg";
import mediumImage from "../../assets/images/medium-shot-hard-working-student.jpg";
import closeImage from "../../assets/images/close-up-students-learning-class (1).jpg";
import studyImage from "../../assets/images/study-group-african-people.jpg";
import workingImage from "../../assets/images/study-group-learning-library.jpg";
import youngWoman from "../../assets/images/young-woman-studying-library.jpg";
const More = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="  font-bold space-y-3 ">
          <p className="text-4xl gradient-text-blue text-center mb-4 ">
            RECENT GALLERY
          </p>
        </div>
        <div className="space-y-9 mt-9">
          <div className="flex gap-5">
            <div className="lg:w-1/2 w-full">
              <img
                src={YoungStudent}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={youngWoman}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={mediumImage}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="lg:w-1/2 w-full">
              <img
                src={closeImage}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={studyImage}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={workingImage}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
