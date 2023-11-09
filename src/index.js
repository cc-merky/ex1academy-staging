import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./global.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoginProvider } from "./services/LoginAuthContext";
import { CourseDetailProvider } from "./services/CourseDetails";
import { CourseProvider } from "./services/CourseContext";
import { LiveCourseProvider } from "./services/LiveContext";

import { LiveCourseDetailProvider } from "./services/LiveCourseDetail";

import { UserProvider } from "./services/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <UserProvider>
        <LiveCourseDetailProvider>
          <LiveCourseProvider>
            <CourseProvider>
              <CourseDetailProvider>
                <App />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  closeOnClick={true}
                  pauseOnHover={true}
                  draggable={true}
                  progress={undefined}
                  theme="light"
                  type="success"
                />
              </CourseDetailProvider>
            </CourseProvider>
          </LiveCourseProvider>
        </LiveCourseDetailProvider>
      </UserProvider>
    </LoginProvider>
  </React.StrictMode>
);
