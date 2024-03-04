import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);
  }, []);

  return (
    <div>{userEmail ? <p>Welcome, {userEmail}</p> : <p>Please log in</p>}</div>
  );
}
