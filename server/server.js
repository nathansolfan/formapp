const express = require("express");
const cors = require("cors");
// FileSystem and path
const fs = require("fs");
const path = require("path");
// JWT
const jwt = require("jsonwebtoken");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Import the middleware
const AuthenticateToken = require("./Middleware");
app.get("/protected", AuthenticateToken, (req, res) => {
  res.json({ message: "Access to protected data" });
});
// Define the route for /login
// app.post("/login", async (req, res) => {
//   const {email, password} = req.body

// // for when user is auth
//   if(){
//     const user = { email}
//     const acessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1hr'})
//     res.json({acessToken})
//   } else{
//     res.status(401).send("Email or password is incorrect")
//   }
// })
// Define the POST route for /register
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // path to the users.json
  const userFilePath = path.join(__dirname, "users.json");
  // read
  fs.readFile(userFilePath, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading the dAta" });
      return;
    }
    // parse to Json
    const users = JSON.parse(data.toString() || "[]");
    // check if email exist
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      res.status(400).json({ message: "User exists already" });
      return;
    }
    // add new user .push()
    users.push({ email, password });
    // write the updated data back to users.json
    fs.writeFile(userFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        res.status(500).json({ message: "Error writing user data" });
        return;
      }
    });
  });

  console.log(`Registering user with ${email}, and ${password}`);

  res.json({ message: "Registration successful" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
