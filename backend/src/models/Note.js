import mongoose from "mongoose";

// 1. Create Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  //   This will give a createdAt & updatedAt fields
  {
    timestamps: true,
  }
);

// 2. Create a model and export it
const Note = mongoose.model("Note", noteSchema);

export default Note;
