// NEED! : Import and create express app variable
import express from "express";
const app = express();

// Import file
import notesRoutes from "./routes/notesRoutes.js"; // use with routes prefix

// Connect to MongoDB
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
connectDB();

// middleware
app.use(express.json());

// Routes Prefix
app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5001;
// NEED! : Listening on port 5001 (or other port, can specify)
app.listen(PORT, () => {
  console.log("SERVER IS RUNING ON PORT : ", PORT);
});
