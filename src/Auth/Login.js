import React from "react";
import Form from "../Components/Form";

export default function Login({ onUserChange }) {
  const handleLogin = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      const data = await response.json();

      // JWT LOGIC
      console.log("JWT", data.accessToken);
      // store it using localStorage
      localStorage.setItem("accessToken", data.accessToken);
      // // store email
      // localStorage.setItem("userEmail", email);
      // console.log(data, "login ok");
      // Notify App.js about the email change
      onUserChange(email);
    } catch (error) {
      console.error("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleLogin} buttonText="Button Login" />
    </div>
  );
}
