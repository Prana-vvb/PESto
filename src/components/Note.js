import React from "react";

function Note({ id, onDelete }) {
  return (
    <div className="note" contentEditable="true">
      <h1 contentEditable="true">Title</h1>
      <p contentEditable="true">Content</p>
      <button onClick={() => onDelete(id)}>Delete Note</button>
    </div>
  );
}

export default Note;
