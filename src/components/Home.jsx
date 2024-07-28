import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Profile from "./Profile";

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
    console.log("profile toggled");
  };

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

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <button
              onClick={toggleProfile}
              className=" left-0 text-black hover:text-gray-800"
            >
              &times;
            </button>
            <Profile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
