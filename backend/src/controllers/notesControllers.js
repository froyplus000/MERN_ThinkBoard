import Note from "../models/Note.js";

// GET - Get all notes
export async function getAllNotes(_, res) {
  // we not use req, so just skip them
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // newest first;
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
// GET - Get note by ID
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not Found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
// POST - Create Notes
export async function createNote(req, res) {
  try {
    const { title, content } = req.body; // Get title and content from request body
    const newNote = new Note({ title, content }); // Create a new notes based on those title and content
    // save new note to the MongoDB with Mongoose model save() method
    const saveNote = await newNote.save();
    // Option 1 : response with created status code and message
    // res.status(201).json({ message: "Note created successfully" });
    // Option 2 : response with created status code and created note detail
    res.status(201).json(saveNote);
  } catch (error) {
    console.error("Error in createNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
// PUT - Update note data by ID
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        // return the note after updated not note before update
        new: true,
      }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not Found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
// DELETE - Delete note by ID
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not Found" });
    // res.status(200).json({ message: "delted Note" });
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error in deleteNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
