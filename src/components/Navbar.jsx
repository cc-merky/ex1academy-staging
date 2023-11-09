import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdownOpen = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`p-4 ${isSticky ? "sticky-navbar" : ""}`}>
      <nav className="flex items-center justify-between max-w-6xl mx-auto md:px-2">
        <div>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="text-4xl font-semibold text-[#e46601] flex items-center"
          >
            <img src={Logo} alt="logo" width="100" height="80" />
          </NavLink>
        </div>

        <ul className="hidden space-x-10 md:flex text-md">
          <li>
            <NavLink
              to="/"
              exact
              className={`text-lg ${
                activeLink === "/" ? "text-blue-500" : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`text-lg ${
                activeLink === "/about" ? "text-blue-500" : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/about")}
            >
              About
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/courseDetail"
              activeClassName="active"
              className="text-lg"
            >
              courseDetail
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/dashboard"
              activeClassName="active"
              className="text-lg"
            >
              dashboard
            </NavLink>
          </li> */}

          <li
            className={`relative group ${
              activeLink === "/course" ? "text-blue-500" : "text-black"
            }`}
            ref={navRef}
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <div className="flex items-center space-x-2">
              <NavLink
                to="#"
                activeClassName="active"
                className={`text-lg cursor-pointer hover:text-blue-500`}
              >
                Course
              </NavLink>
              <MdKeyboardArrowDown />
            </div>

            <div
              className={`absolute left-[-2] top-full mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg ${
                isDropdownOpen ? "" : "hidden"
              }`}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
              style={{ zIndex: isDropdownOpen ? 1 : -1 }}
            >
              <NavLink
                to="/course"
                activeClassName="active-link"
                className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                  activeLink === "/course" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setActiveLink("/course")}
              >
                Online Course
              </NavLink>
              <NavLink
                to="/live-course"
                activeClassName="active-link"
                className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                  activeLink === "/live-course" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setActiveLink("/live-course")}
              >
                Live Course
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={`text-lg ${
                activeLink === "/contact" ? "text-blue-500" : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/contact")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="items-center hidden space-x-4 md:flex">
          <NavLink to="/sign-in" activeClassName="active" className="text-lg">
            Sign In
          </NavLink>

          <button className="px-4 py-2 font-bold text-white rounded bg-custom-button hover:bg-custom-button">
            <NavLink to="/sign-up" activeClassName="active">
              Create Account
            </NavLink>
          </button>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <FiMenu style={{ color: "#00AFFF" }} />
          ) : (
            <AiOutlineClose style={{ color: "#00AFFF" }} />
          )}
        </div>

        <div
          ref={navRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray bg-white ease-in-out duration-300 z-10"
              : "fixed left-[-100%]"
          }
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%", // Extend to the full height of the parent container
          }}
        >
          <ul className="flex-col items-center justify-center p-4 uppercase ">
            <div className="flex p-4">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="text-4xl font-semibold text-[#e46601] flex items-center"
              >
                <img src={Logo} alt="logo" width="100" height="80" />
              </NavLink>
            </div>
            <li href="./" className="p-4">
              <NavLink
                to="/"
                exact
                className={`text-lg ${
                  activeLink === "/" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setActiveLink("/")}
              >
                Home
              </NavLink>
            </li>
            <li href="./" className="p-4">
              <NavLink
                to="/about"
                className={`text-lg ${
                  activeLink === "/about" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setActiveLink("/about")}
              >
                About
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/about-us"
                className="p-4 text-customBlue"
                activeClassName="active-link"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="p-4 ">
              <NavLink
                to="/contact-us"
                className="p-4 text-customBlue"
                activeClassName="active-link"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
