import React from "react";

export default function Logout() {
  const logout = () => {
    localStorage.removeItem("accessToken");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
