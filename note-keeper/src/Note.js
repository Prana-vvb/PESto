import React, { useState } from "react";
import axios from "axios";

function Note({ id, onDelete, title, content }) {
    const [noteTitle, setNoteTitle] = useState(title);
    const [noteContent, setNoteContent] = useState(content);
    const [isSaving, setIsSaving] = useState(false);

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setNoteContent(e.target.value);
    };

    const saveNote = async () => {
        setIsSaving(true);
        try {
            // Update note in the database
            await axios.put(`http://localhost:5000/api/notes/${id}`, {
                title: noteTitle,
                content: noteContent,
            });
            console.log("Note saved successfully!");
        } catch (err) {
            console.error("Error saving note:", err);
        }
        setIsSaving(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="note">
            <input
                type="text"
                value={noteTitle}
                onChange={handleTitleChange}
                placeholder="Note title"
                className="note-title"
            />
            <textarea
                value={noteContent}
                onChange={handleContentChange}
                placeholder="Note content"
                className="note-content"
            />
            <button onClick={handleDelete}>Delete Note</button>
            <button onClick={saveNote} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Note"}
            </button>
        </div>
    );
}

export default Note;
