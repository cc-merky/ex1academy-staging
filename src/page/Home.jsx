import React from "react";
import {
  Accredication,
  Instructor,
  Learning,
  Main,
  Operation,
  Start,
  Subscribe,
} from "../components/Home/index";

import Course from "../components/Home/Course";

function Home() {
  return (
    <div>
      <Main />

      <Learning />
      <Course />
      <Start />
      <Accredication />
      <Instructor />
      <Operation />
      <Subscribe />
    </div>
  );
}

export default Home;
