import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type your password"
      />

      <button type="submit">Click to Register</button>
    </form>
  );
}

export default App;
