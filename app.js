const express = require("express");
const logger = require("./middleware/logger");

const app = express();
const port = 3000;

// Feel free to add a few Express endpoints here to manually test your functions
// Configure the Express app to use your custom middleware below

app.get("/", (req, res) => {
  res.send("👋 Hello");
});

app.get("/user", logger, (req, res) => {
  res.status(200).json({ name: "Bestun" });
});

app.get("/user/:id", logger, (req, res) => {
  res.status(200).json({ name: "Sara" });
});

app.listen(port, () => console.log(`Application running on port ${port}`));

module.exports = app;
