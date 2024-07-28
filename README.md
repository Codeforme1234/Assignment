## Overview

This is a simple React web application that includes user authentication, protected routes, and state management using Redux. The app includes functionalities for user signup, login, and viewing protected pages like Profile and About.

## Features

- **Signup Page**: Users can sign up by providing their name, email, and gender.
- **Login Page**: Users can log in using their email. Upon successful login, they receive a session token.
- **Protected Routes**: Only authenticated users can access the About and Profile pages.
- **Session Management**: User sessions are managed with a token stored in the Redux store and are valid for few minutes.
- **Local Storage**: User data is stored in the browser's local storage for simplicity.
- **Responsive Design**: The app uses Tailwind CSS.
- **Session Handling Across Tabs**: Session management across multiple tabs using the `BroadcastChannel` API to ensure that only one tab is active at a time.

## Technologies Used

- **React**: For building the user interface.
- **React Router DOM**: For routing and navigation between pages.
- **Redux**: For state management.
- **Tailwind CSS**: For styling the components.
- **Validator**: To validate user input such as email addresses.
- **BroadcastChannel API**: For managing sessions across multiple tabs.

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Steps to Run

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the Development Server**

   ```bash
   npm start
   ```

   This will start the React development server. Open your browser and navigate to `http://localhost:3000` to view the app.

## Session Handling

The app uses the `BroadcastChannel` API to handle session management across multiple browser tabs. Here’s how it works:

- **Generate Session ID**: When a user logs in, a unique session ID is generated and stored in both `localStorage` and `sessionStorage`.
- **Check Active Session**: On page load, the app checks if there's an active session in another tab by comparing the session IDs in `localStorage` and `sessionStorage`.
- **Clear Session**: On logout, the session IDs are removed from storage.
- **Notify Session Change**: Any changes to the session state are broadcasted to all open tabs using `BroadcastChannel`.
- **Listen for Session Changes**: Tabs listen for session changes to ensure that only one tab remains active at a time. If a new tab is opened while an existing session is active, the new tab will show an error message and remain inactive.

## User Flow

1. **Signup**: Navigate to the Signup page and create a new account by providing your name, email, and gender.
2. **Login**: After signup, navigate to the Login page and log in using the email provided during signup.
3. **Access Protected Pages**: Upon successful login, navigate to the Profile and About pages. These pages are protected and require authentication.
4. **Session Timeout**: The session token is valid for 5 minutes. After this period, you will be logged out automatically.
5. **Multiple Tabs**: If you try to open the app in a new tab while an active session exists in another tab, the new tab will show an error message and remain inactive.
