import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Login, Signup, Home, About, Profile } from "./components";
import { login, logout } from "./store/authSlice";
import {
  checkActiveSession,
  listenForSessionChanges,
} from "./components/sessionHandler";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [sessionActive, setSessionActive] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    listenForSessionChanges((sessionId) => {
      if (sessionId && sessionId !== localStorage.getItem("sessionId")) {
        setSessionActive(false);
      } else {
        setSessionActive(true);
      }
    });

    if (checkActiveSession()) {
      setSessionActive(false);
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(login(token));
      } else {
        dispatch(logout());
      }
    }
  }, [dispatch]);

  if (!sessionActive) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Error</h2>
          <p className="text-red-500 mt-4">
            You have an active session in another tab.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
