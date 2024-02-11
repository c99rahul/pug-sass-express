const express = require("express");
const path = require("path");

// Grab an express instance
const app = express();

// Use any port you like
const port = 3000;

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, "build")));

// Define a route to serve the compiled HTML files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
