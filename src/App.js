import "./App.css";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import Register from "./Auth/Register";

function App() {
  return (
    <div>
      <Register />
      <Login />
      <Logout />
    </div>
  );
}

export default App;
