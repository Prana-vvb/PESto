import React from "react";
import { BrowserRouter as Router, Route, Rotes, Navigate } from 'react-router-dom';
import Landing from './pages/index.js';
import Gpa from './components/gpa.js';
import NoteKeep from './components/note-keeper.js';
import Todo from './components/todo.js';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/landing" />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/gpa-calc" element={<Gpa />} />
                    <Route path="/note-keeper" element={<NoteKeep />} />
                    <Route path="/todo-list" element={<Todo />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
