import React, { useEffect, useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../services/LoginAuthContext";

function DashboardNavbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  console.log("checking user progile", user.profile_img);

  const handleLogout = async () => {
    console.log("Attempting to logout..."); // Log before calling the logout function
    await logout();
    navigate("/");
  };

  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
        <div className="flex items-center gap-8">
          <NavLink
            to="/dashboard"
            exact
            activeClassName="active"
            className="text-4xl font-semibold text-[#e46601] flex items-center"
          >
            <img src={Logo} alt="logo" width="100" height="80" />
          </NavLink>

          <li className="list-none">
            <NavLink
              to="/dashboard"
              exact
              className={`text-lg ${
                activeLink === "/dashboard" ? "text-blue-500" : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/dashboard")}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/dashboard/course"
              exact
              className={`text-lg ${
                activeLink === "/dashboard/course"
                  ? "text-blue-500"
                  : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/dashboard/course")}
            >
              All Course
            </NavLink>
          </li>

          <li className="list-none">
            <NavLink
              to="/dashboard/my-course"
              exact
              className={`text-lg ${
                activeLink === "/dashboard/my-Course"
                  ? "text-blue-500"
                  : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/dashboard/my-course")}
            >
              My Course
            </NavLink>
          </li>
        </div>

        <ul className="hidden space-x-10 md:flex text-md"></ul>

        <div className="items-center hidden space-x-4 md:flex">
          <div
            to="/sign-in"
            activeClassName="active"
            className="relative text-lg"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-2">
              <p>{user ? user.firstname : ""}</p>
              <img
                src={user ? user.profile_img : ""}
                alt="profile"
                className="h-6 w-6 rounded-full"
              />
              <div>
                <IoIosArrowDown />
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute p-4 text-sm bg-white border rounded-lg shadow-lg top-full left-8">
                <ul className="space-y-2">
                  <li>
                    <NavLink> Profile</NavLink>
                  </li>
                  <li>
                    <NavLink> Email</NavLink>
                  </li>
                  <li>
                    <NavLink> Notification</NavLink>
                  </li>
                  <li>
                    <NavLink> Billing</NavLink>
                  </li>
                  <li>
                    {user ? (
                      <div>
                        <p>Welcome, {user.username}!</p>
                        <ul>
                          <li>
                            <button onClick={handleLogout}>Logout</button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <p>You are not logged in.</p>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
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

export default DashboardNavbar;
