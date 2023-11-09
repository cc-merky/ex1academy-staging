import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../assets/images/logo.jpeg";

function Footer() {
  return (
    <div className="bg-[#F8F8F8] py-10 ">
      <div className="max-w-6xl mx-auto px-2">
        <div className="lg:flex  flex-row ">
          <div className="lg:w-3/5 w-full p-4">
            <div className="h-full  flex flex-col">
              <img
                src={Logo}
                alt="logo"
                width="100"
                height="80"
                className="mb-5"
              />
              <ul className="flex space-x-6">
                <li>
                  <FaFacebookSquare />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitterSquare />
                </li>
                <li>
                  <FaGithubSquare />
                </li>
                <li>
                  <FaDribbbleSquare />
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/4 w-full p-4">
            <div className="h-full  flex flex-col">
              <h2 className="font-bold mb-5">Product</h2>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>Services</li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/4 w-full p-4">
            <div className="flex flex-col">
              <h2 className="font-bold mb-5">About Us</h2>
              <ul className="space-y-2">
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/4 w-full p-4">
            <div className="h-full flex flex-col">
              <h2 className="font-bold mb-5">Company</h2>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Cookie Preference</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
