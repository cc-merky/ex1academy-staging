import React from "react";
import LearningInfo from "./components/LearningInfo";
import { motion, AnimatePresence } from "framer-motion";

function Start() {
  return (
    <div className="bg-[#021b76] py-12">
      <div className="container max-w-6xl mx-auto pb-12">
        <div className="pt-12 py-3">
          <h1 className="text-center text-5xl font-bold pb-4 relative">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r gradient-text-combined absolute top-0 left-0 h-full w-full"
              aria-hidden="true"
            >
              Start Learning With Us Now
            </span>
            Start Learning With Us Now
          </h1>

          <p className="text-center mb-5 text-white">
            Become A Professional In Any Of This Course
          </p>
        </div>
        <div className="flex justify-center items-center">
          <LearningInfo title="Business Dev" />
          <LearningInfo title="Dev Ops" />
          <LearningInfo title="Data Science" />
        </div>
        <div className="flex justify-center items-center ">
          <LearningInfo title="Tableau" />
          <LearningInfo title=" Microsoft SQL" />
          <LearningInfo title="python" />
        </div>
      </div>
    </div>
  );
}

export default Start;
