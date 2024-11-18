const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Note = mongoose.model("Note", noteSchema);

app.post("/api/notes", async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNote = new Note({
            title,
            content,
        });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ error: "Error creating note" });
    }
});

app.delete("/api/notes/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting note" });
    }
});

app.get("/api/notes", async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: "Error fetching notes" });
    }
});

app.put("/api/notes/:id", async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: "Error updating note" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
