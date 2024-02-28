import React from "react";
import { useState } from "react";

export default function Form({ onSubmit, buttonText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter email:</label>
      <input
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type your email"
      />
      <label>Enter password:</label>
      <input
        type="text"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Type your password"
      />

      <button type="submit">{buttonText}</button>
    </form>
  );
}
