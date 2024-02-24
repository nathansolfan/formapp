const express = require("express");
const cors = require("cors");
// FileSystem and path
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

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
