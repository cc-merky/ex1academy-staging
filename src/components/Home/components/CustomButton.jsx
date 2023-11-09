import React from "react";
import { NavLink } from "react-router-dom";

function CustomButton({ text, link }) {
  return (
    <NavLink to={link}>
      <button className="w-full px-1 py-4 text-white rounded-lg bg-custom-button hover:bg-custom-button lg:w-72">
        {text}
      </button>
    </NavLink>
  );
}

export default CustomButton;

/// hello
