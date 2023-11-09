import React from "react";
import backgroundImg from "../../assets/images/videoback.jpg";
import GallerySection from "../GallerySection";

const Gallery = () => {
  return (
    <GallerySection
      backgroundImg={backgroundImg}
      title="Take a short tour in our campus"
      content="E1X Academy is far from ordinary; it thrives on extraordinary educational experiences. We are dedicated to providing exceptional lectures that inspire and stimulate the minds of our students."
    />
  );
};

export default Gallery;
