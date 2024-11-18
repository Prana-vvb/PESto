import React, { useState, useEffect } from 'react';
import '../styles/todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router

// Import components for each course
import Afll from './components/year2/cse/Afll.js';
import Ddco from './components/year2/cse/Ddco.js';
import Dsa from './components/year2/cse/Dsa.js';
import Mcse from './components/year2/cse/Mcse.js';
import Wt from './components/year2/cse/Wt.js';

// Import the CSE component (the toggleable course list)
import Cse from './components/year2/Cse';

function App() {
    const [isYear2Open, setYear2Open] = useState(false);

    const toggleCourses = (year) => {
        if (year === 2) setYear2Open(!isYear2Open);
    };

    const [greeting, setGreeting] = useState('');
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const date = new Date();
        const currentTime = date.getHours();

        if (currentTime >= 3 && currentTime < 12) {
            setGreeting('Good Morning!');
            setIcon(faSun);
        } else if (currentTime >= 12 && currentTime < 16) {
            setGreeting('Good Afternoon!');
            setIcon(faSun);
        } else if (currentTime >= 16 && currentTime < 21) {
            setGreeting('Good Evening!');
            setIcon(faMugHot);
        } else {
            setGreeting('Good Night!');
            setIcon(faMoon);
        }
    }, []);

    return (
        <Router>
            <div>
                {/* Header Section */}
                <header>
                    <div className="logo">
                        <img src="../../landing/public/PESto.png" alt="Logo" width="120" />
                    </div>
                </header>

                {/* Greeting Section */}
                <div id="greeting-container">
                    <h1 className="heading">
                        <FontAwesomeIcon icon={icon} /> {greeting}
                    </h1>
                    <h2>Choose Your Course</h2>
                </div>

                {/* Course List Section */}
                <div className="content">
                    <Cse isYear2Open={isYear2Open} toggleCourses={toggleCourses} />
                </div>

                {/* Define routes for the Year 2 courses */}
                <Routes>
                    <Route path="/year2/cse/ddco" element={<Ddco />} />
                    <Route path="/year2/cse/dsa" element={<Dsa />} />
                    <Route path="/year2/cse/mcse" element={<Mcse />} />
                    <Route path="/year2/cse/afll" element={<Afll />} />
                    <Route path="/year2/cse/wt" element={<Wt />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
