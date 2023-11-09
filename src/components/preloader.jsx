import React from "react";
import ReactLoading from "react-loading";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ReactLoading type={"bars"} color={"#d25600"} height={100} width={100} />
    </div>
  );
};

export default Preloader;
