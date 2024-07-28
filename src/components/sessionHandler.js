import { v4 as uuidv4 } from "uuid";

const channel = new BroadcastChannel("session_channel");

export const generateSessionId = () => {
  const sessionId = uuidv4();
  localStorage.setItem("sessionId", sessionId);
  sessionStorage.setItem("sessionActive", "true");
  notifySessionChange(sessionId);
};

export const checkActiveSession = () => {
  const sessionId = localStorage.getItem("sessionId");
  const sessionActive = sessionStorage.getItem("sessionActive");
  return sessionId && !sessionActive;
};

export const clearSession = () => {
  localStorage.removeItem("sessionId");
  sessionStorage.removeItem("sessionActive");
  notifySessionChange(null);
};

const notifySessionChange = (sessionId) => {
  channel.postMessage({ sessionId });
};

export const listenForSessionChanges = (callback) => {
  channel.onmessage = (event) => {
    callback(event.data.sessionId);
  };
};
