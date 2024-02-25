import React from "react";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data + " daTa 1"))
      .catch((error) => console.error("There has been a probrem"));

    console.log({ email, password });
  };

  return <div>Register</div>;
}
