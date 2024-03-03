import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">HomePage</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
