import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
      <Header />
      <button className="add-note-button" onClick={addNote}>
        Add Note
      </button>
      <div className="notes-container">
        {notes.map((note) => (
          <Note key={note.id} id={note.id} onDelete={deleteNote} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
