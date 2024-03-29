import "./App.css";
import "./Styles/utilities.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import Register from "./Auth/Register";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import UserProfile from "./Auth/UserProfile";
import { useState } from "react";

function App() {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));

  const handleUserChange = (email) => {
    if (email) {
      localStorage.setItem("userEmail", email);
    } else {
      localStorage.removeItem("userEmail");
    }
    setUserEmail(email);
  };

  return (
    <div>
      <h1>WEBSITE</h1>

      <br />

      <Router>
        <div>
          <Navbar />
          <UserProfile email={userEmail} />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login onUserChange={handleUserChange} />}
            />
            <Route
              path="/logout"
              element={<Logout onUserChange={handleUserChange} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
