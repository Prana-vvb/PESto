import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources from './Resources.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/resources" element={<Resources />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
