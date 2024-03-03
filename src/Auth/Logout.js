import React from "react";

export default function Logout() {
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userEmail");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
