import React, { useState, useEffect } from "react";
import InfoBlock from "./components/InfoBlock";
import background from "../../assets/images/Vector.png";

// Import both images
import statsDesktop from "../../assets/images/stats.png";
import statsMobile from "../../assets/images/statsm.png";

function Accredication() {
  // State for the background image
  const [backgroundImage, setBackgroundImage] = useState(statsDesktop);

  useEffect(() => {
    // Function to update the state based on the screen width
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setBackgroundImage(statsMobile); // Set to mobile image if screen width is 600px or less
      } else {
        setBackgroundImage(statsDesktop); // Set to desktop image otherwise
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call the handler right away so the state gets updated with the initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this effect only runs once on mount and unmount

  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    minHeight: "400px",
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ ...backgroundImageStyle, height: "600px" }}
    >
      <div
        className="flex items-center justify-center h-full w-full"
        style={imageStyle}
      >
        {/* Rest of your component */}
      </div>
    </div>
  );
}

export default Accredication;
