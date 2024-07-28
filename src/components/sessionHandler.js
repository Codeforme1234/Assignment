import { v4 as uuidv4 } from "uuid";

const channel = new BroadcastChannel("session_channel");

// Generate a unique session ID
export const generateSessionId = () => {
  const sessionId = uuidv4();
  localStorage.setItem("sessionId", sessionId);
  sessionStorage.setItem("sessionActive", "true");
  notifySessionChange(sessionId);
};

// Check if there's an active session in another tab
export const checkActiveSession = () => {
  const sessionId = localStorage.getItem("sessionId");
  const sessionActive = sessionStorage.getItem("sessionActive");
  return sessionId && !sessionActive;
};

// Clear the session IDs on logout
export const clearSession = () => {
  localStorage.removeItem("sessionId");
  sessionStorage.removeItem("sessionActive");
  notifySessionChange(null);
};

// Notify other tabs about the session change
const notifySessionChange = (sessionId) => {
  channel.postMessage({ sessionId });
};

// Listen for session changes from other tabs
export const listenForSessionChanges = (callback) => {
  channel.onmessage = (event) => {
    callback(event.data.sessionId);
  };
};
