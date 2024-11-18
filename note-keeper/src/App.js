import React, { useState } from "react";
import Note from "./Note";

function App() {
    const [notes, setNotes] = useState([{ id: Date.now() }]);

    const addNote = () => {
        setNotes((prevNotes) => [...prevNotes, { id: Date.now() }]);
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    return (
        <div>
            <header>
                <h1><span className="pes" >PES</span><span className="to">to</span></h1>
            </header>
            <button className="add-note-button" onClick={addNote}>
                Add Note
            </button>
            <div className="notes-container">
                {notes.map((note) => (
                    <Note key={note.id} id={note.id} onDelete={deleteNote} />
                ))}
            </div>
        </div>
    );
}

export default App;
