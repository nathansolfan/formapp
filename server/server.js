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

// MIDDLEWARE
const AuthenticateToken = require("./Middleware");
app.get("/protected", AuthenticateToken, (req, res) => {
  res.json({ message: "Access to protected data" });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userFilePath = path.join(__dirname, "users.json");

  fs.readFile(userFilePath, (error, data) => {
    if (error) {
      return res
        .status(500)
        .json({ message: "Error reading the user Data Folder" });
    }

    const users = JSON.parse(data.toString() || "[]");
    const user = users.find((u) => u.email === email);

    if (user && user.password === password) {
      const accessToken = jwt.sign(
        { email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1hr" }
      );
      res.json({ accessToken });
    } else {
      res.status(401).json({ message: "Email or PW incorrect" });
    }
  });
});

// REGISTER
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
    res.json({ message: "Registration OK!!" });
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
