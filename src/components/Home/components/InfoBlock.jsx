import React from "react";

function InfoBlock({ imageSrc, title, description }) {
  return (
    <div className="lg:p-4  text-center flex items-center justify-between space-x-3 md:p-2">
      <img src={imageSrc} alt={title} />
      <div className="flex flex-col">
        <h1 className="font-bold lg:text-lg  md:text-lg text-white">{title}</h1>
        <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
          {description}
        </h2>
      </div>
    </div>
  );
}

export default InfoBlock;
