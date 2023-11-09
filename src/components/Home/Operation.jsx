import React from "react";
import background from "../../assets/images/partners.png";

function Operation() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", // Center the background image
  };

  return (
    
    <div
      className="flex justify-center items-center h-screen w-screen" // Set width as well
      style={{
        ...backgroundImageStyle,
        backgroundSize: "cover", // Default size for larger devices
        "@media (max-width: 768px)": {
          backgroundSize: "20%", // Smaller size on medium devices
        },
      }}
    ></div>
  );
}

export default Operation;
