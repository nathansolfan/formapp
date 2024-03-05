import React from "react";

export default function UserProfile({ email }) {
  // Accept email as prop
  return <div>{email ? <p>Welcome, {email}</p> : <p>Please log in</p>}</div>;
}
