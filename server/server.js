const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

// Define the POST route for /register
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  console.log(`Registering user with ${email}, and ${password}`);

  res.json({ message: "Registration successful" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
