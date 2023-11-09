import React from "react";

const GallerySection = ({ backgroundImg, title, content, minHeight }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  };

  const sectionStyle = {
    ...backgroundImageStyle,
    minHeight: minHeight || "600px", // Use the passed prop or default to 600px
  };

  return (
    <div>
      <div
        className="bg-cover bg-center relative object-cover"
        style={sectionStyle}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="max-w-4xl mx-auto py-16 text-white relative z-10 text-center">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-lg">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
