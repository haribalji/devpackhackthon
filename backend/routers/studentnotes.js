


const express = require("express");
const router = express.Router();
const StudentNote = require("../models/StudentNote");
const fetchuser = require("../middleware/fetchuser");
// const fetchuser = require('../middleware/fetchdata');

// 📌 1️⃣ Create a new student note
router.post("/add", fetchuser, async (req, res) => {
  try {
    const { classNumber, subject, chapter, title, description } = req.body;

    const newNote = new StudentNote({
      user: req.user.id, // Fetch authenticated user ID
      classNumber,
      subject,
      chapter,
      title,
      description,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 📌 2️⃣ Get all notes for a user
router.get("/", fetchuser, async (req, res) => {
  try {
    const notes = await StudentNote.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/:classNumber/:subject/:chapter", fetchuser, async (req, res) => {
    try {
        const { classNumber, subject, chapter } = req.params;

        // Fetch notes that match the specific class, subject, and chapter
        const notes = await StudentNote.find({
             user: req.user.id  ,
            classNumber, 
            subject, 
            chapter 
        });

        if (!notes.length) {
            return res.status(404).json({ message: "No notes found" });
        }

        res.json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});




router.put('/update/:id', fetchuser, async (req, res) => {
  try {
    const { classNumber, subject, chapter, title, description } = req.body;

    // Create a new note object with updated values
    const updatedNote = {};
    if (classNumber) updatedNote.classNumber = classNumber;
    if (subject) updatedNote.subject = subject;
    if (chapter) updatedNote.chapter = chapter;
    if (title) updatedNote.title = title;
    if (description) updatedNote.description = description;

    // Find the note in the database
    let note = await StudentNote.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Check if the note belongs to the logged-in user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not Allowed" });
    }

    // Update the note
    note = await StudentNote.findByIdAndUpdate(
      req.params.id,
      { $set: updatedNote },
      { new: true } // Returns the updated note
    );

    res.json(note);
  } catch (error) {
    console.error("Error updating student note:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.delete('/delete/:id', fetchuser, async (req, res) => {
  try {
    // Fetch the note by ID from the database
    let note = await StudentNote.findById(req.params.id);
    console.log("Deleting Note with ID:", req.params.id); // Debugging line

    if (!note) {
      return res.status(404).send("Note not found");
    }

    // Check if the logged-in user owns the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // If authorized, delete the note
    note = await StudentNote.findByIdAndDelete(req.params.id);

    res.json({ "Success": "Note has been deleted", note: note });

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});





module.exports = router;
