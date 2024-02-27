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
    } catch (error) {}
  };
  return (
    <div>
      <Form onSubmit={handleLogin} buttonText="Button Login" />
    </div>
  );
}
