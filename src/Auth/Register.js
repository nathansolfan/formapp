import React from "react";
import Form from "../Components/Form";

export default function Register() {
  const handleRegistration = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log(data, "Registration ok");
    } catch (error) {
      console.error("There is a problem here");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleRegistration} buttonText="Register" />
    </div>
  );
}
