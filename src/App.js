import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <button type="submit">Click to Register</button>
    </form>
  );
}

export default App;
