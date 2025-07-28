
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let userData = null;

  try {
    const userString = localStorage.getItem("user");
    if (userString && userString !== "undefined") {
      userData = JSON.parse(userString);
    }
  } catch (err) {
    console.error("Error parsing user data:", err);
    localStorage.removeItem("user"); // Optional: clean up bad data
  }

  return userData ? children : <Navigate to="/" />;
};

export default PrivateRoute;
