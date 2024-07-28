import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if (!user) {
    return <p className="text-red-500">No user data available.</p>;
  }

  return (
    <div className="space-y-4">
      <div>
        <p>
          <strong>Name:</strong> {user[0].name}
        </p>
        <p>
          <strong>Email:</strong> {user[0].email}
        </p>
        <p>
          <strong>Gender:</strong> {user[0].gender}
        </p>
      </div>
    </div>
  );
};

export default Profile;
