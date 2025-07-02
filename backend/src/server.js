// NEED! : Import and create express app variable
import express from "express";
const app = express();

// Import file
import notesRoutes from "./routes/notesRoutes.js"; // use with routes prefix

// Connect to MongoDB
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimitter from "./middleware/rateLimitter.js";
dotenv.config();

// middleware
app.use(express.json());
app.use(rateLimitter);
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Routes Prefix
app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5001;
// NEED! : Listening on port 5001 (or other port, can specify)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("SERVER IS RUNING ON PORT : ", PORT);
  });
});
