const express = require("express");
const app = express();
require("dotenv").config();

// Parse requests of content-type - application/json
app.use(express.json());

// Route to handle the root URL
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
