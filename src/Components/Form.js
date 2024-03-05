import React from "react";
import { useState } from "react";
import "./Form.css";

export default function Form({ onSubmit, buttonText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Enter email:</label>
      <input
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type your email"
        className="form-input"
      />
      <label>Enter password:</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Type your password"
        className="form-input"
      />

      <button type="submit" className="form-button">
        {buttonText}
      </button>
    </form>
  );
}
