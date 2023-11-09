import React from "react";

function LearningInfo({ title }) {
  return (
    <div className="lg:w-64 md:w-32 p-1 md:text-sm">
      <div className="h-full bg-[#2d418d] border border-[#297bf6]  flex flex-col  justify-center items-center py-2 px-4 rounded-3xl text-white ">
        <p className="sm:text-sm">{title}</p>
      </div>
    </div>
  );
}

export default LearningInfo;
