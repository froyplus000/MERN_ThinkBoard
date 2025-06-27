// NEED! : Import and create express app variable
import express from "express";
const app = express();

// Import file
import notesRoutes from "./routes/notesRoutes.js"; // use with routes prefix

// Routes Prefix
app.use("/api/notes", notesRoutes);

// NEED! : Listening on port 5001 (or other port, can specify)
app.listen(5001, () => {
  console.log("SERVER IS RUNING ON PORT : 5001");
});
