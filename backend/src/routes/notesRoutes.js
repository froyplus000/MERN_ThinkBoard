import express from "express"; // Import express
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesControllers.js"; // Import logic from controller
const router = express.Router(); // create router variable

// Call function from controller
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/:id", getNoteById);

export default router; // export it to use in server.js
