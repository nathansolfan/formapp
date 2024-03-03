import "./App.css";
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
import Navbar from "./Navbar";

function App() {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <div>
      <div>Hello</div>

      <br />

      <Router>
        <div>
          <Navbar />
          {userEmail && <div> Welcome, {userEmail} </div>}

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
