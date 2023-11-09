import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import DashboardNavbar from "./components/Dashboard/Dashboard_Navbar";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConstent";

import Home from "./page/Home";

import SuccessfulPage from "./page/SuccessfulPage";
import DashboardCourse from "./components/Dashboard/Course";
import ContactPage from "./page/ContactPage";
import LiveCourses from "./page/LiveCourse";

import Courses from "./page/Courses";

import CheckOutPage from "./page/CheckOutPage";
import About from "./page/About";
import Login from "./page/Login";
import ResetPassword from "./page/ResetPassword";
import OnlineCourseDetail from "./page/CourseDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./page/SignUp";

import NotFound from "./page/NotFound";

import PrivateRoute from "./components/PrivateRoute";
import LiveCourseDetailPage from "./page/LiveCourseDetails";
import Callback from "./page/Callback";
import MyCourse from "./components/Dashboard/MyCourse";

import Preloader from "./components/preloader";
import { UserContext } from "./services/UserContext";
import VerifyEmailComponent from "./components/VerifyEmailComponent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false when your app is ready to load
    }, 2000); // Adjust the delay time as needed
  }, []);
  return (
    <BrowserRouter>{loading ? <Preloader /> : <AppContent />}</BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const { user, isEmailVerified } = useContext(UserContext);

  console.log(user, "this");

  const isDashboardPath = location.pathname.startsWith("/dashboard");

  // if (isDashboardPath && isEmailVerified === null) {
  //   navigate(`/verify-email/${userId}`);
  //   return null;
  // }

  return (
    <>
      {isDashboardPath ? <DashboardNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/payment-complete/:reference" element={<Callback />} />
        <Route path="/success" element={<SuccessfulPage />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:uuid" element={<OnlineCourseDetail />} />
        <Route path="/live-course" element={<LiveCourses />} />
        <Route path="/live-course/:uuid" element={<LiveCourseDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmailComponent />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              // isEmailVerified={isEmailVerified}
              Element={<Dashboard />}
            />
          }
        />
        <Route
          path="/dashboard/course"
          element={<PrivateRoute Element={<DashboardCourse />} />}
        />
        <Route
          path="/dashboard/my-course"
          element={<PrivateRoute Element={<MyCourse />} />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
