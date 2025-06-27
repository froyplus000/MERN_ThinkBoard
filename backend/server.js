// NEED! : Import and create express app variable
import express from "express";
const app = express();

// 1. Create a simple GET API
app.get("/api/notes", (req, res) => {
  // Also send 200 status code
  res.status(200).send("You got 5 Notes in the system");
});

// NEED! : Listening on port 5001 (or other port, can specify)
app.listen(5001, () => {
  console.log("SERVER IS RUNING ON PORT : 5001");
});
