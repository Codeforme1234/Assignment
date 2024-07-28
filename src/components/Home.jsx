import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import About from "./About";

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleProfile = () => {
    setShowProfile((prevShowProfile) => !prevShowProfile);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-end p-4 bg-white shadow-md">
        <button
          onClick={toggleProfile}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 mr-2"
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>

      <div className="p-8">
        <About />
      </div>
    </div>
  );
};

export default Home;
