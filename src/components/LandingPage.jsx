import React from "react";

const BackgroundImage = ({ imageUrl, text }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 60%",
  };

  return (
    <div className="relative h-96" style={{ ...backgroundImageStyle }}>
      {/* Transparent black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="text-center absolute inset-0 flex items-center justify-center">
        <p className="text-4xl font-bold text-white">{text}</p>
      </div>
    </div>
  );
};

export default BackgroundImage;
