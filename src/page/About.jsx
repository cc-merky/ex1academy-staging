import React from "react";
import Landing from "../components/About/Landing";
import Ambition from "../components/About/Ambition";
import Choose from "../components/About/Choose";
import Advisor from "../components/About/Advisor";
import Gallery from "../components/About/Gallery";
import More from "../components/About/More";
function About() {
  return (
    <div>
      <Landing />
      <Ambition />
      <Choose />
      <Advisor />
      {/* <Gallery /> */}
      {/* <More /> */}
    </div>
  );
}

export default About;
