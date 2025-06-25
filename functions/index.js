const functions = require("firebase-functions");
const express = require("express");
const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello from Firebase Functions!");
});

// Export the app
exports.api = functions.https.onRequest(app);
