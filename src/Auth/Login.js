import React from "react";
import Form from "../Form";

export default function Login() {
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

      const data = await response.json;
      console.log("JWT", data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
      console.log(data, "login ok");
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
