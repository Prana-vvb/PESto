import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/notes");
                setNotes(response.data);
            } catch (err) {
                console.error("Error fetching notes:", err);
            }
        };

        fetchNotes();
    }, []);

    const addNote = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/notes", {
                title: "",
                content: "",
            });
            setNotes((prevNotes) => [...prevNotes, response.data]);
        } catch (err) {
            console.error("Error adding note:", err);
        }
    };

    const deleteNote = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/notes/${id}`);
            setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
        } catch (err) {
            console.error("Error deleting note:", err);
        }
    };

    return (
        <div>
            <header>
                <h1>
                    <span className="pes">PES</span>
                    <span className="to">to</span>
                </h1>
            </header>
            <button className="add-note-button" onClick={addNote}>
                Add Note
            </button>
            <div className="notes-container">
                {notes.map((note) => (
                    <Note
                        key={note._id} // TODO: Change to use user email instead of mongodb id 
                        id={note._id}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
