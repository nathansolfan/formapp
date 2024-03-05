import React from "react";

export default function Logout({ onUserChange }) {
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userEmail");
    onUserChange(""); // Notify App.js that the user has logged out
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
