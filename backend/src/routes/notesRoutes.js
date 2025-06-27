import express from "express"; // Import express
import { getAllNotes } from "../controllers/notesControllers.js"; // Import logic from controller
const router = express.Router(); // create router variable

// Call function from controller
router.get("/", getAllNotes);

export default router; // export it to use in server.js
