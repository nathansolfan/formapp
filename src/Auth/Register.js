import React from "react";
import Form from "../Form";

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
      if (!response) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json;
      console.log(data, "Registration ok");
    } catch (error) {
      console.error("There is a problem here");
    }
  };
  return <Form />;
}
