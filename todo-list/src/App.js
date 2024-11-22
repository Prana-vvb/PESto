import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Afll from './components/year2/cse/Afll.js';
import Ddco from './components/year2/cse/Ddco.js';
import Dsa from './components/year2/cse/Dsa.js';
import Mcse from './components/year2/cse/Mcse.js';
import Wt from './components/year2/cse/Wt.js';
import Cse from './components/year2/Cse';

function App() {
    const [isYear2Open, setYear2Open] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [icon, setIcon] = useState(null);
    const [isLofiPlaying, setLofiPlaying] = useState(false);

    const toggleCourses = (year) => {
        if (year === 2) setYear2Open(!isYear2Open);
    };

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
            setGreeting('Good Evening!');
            setIcon(faMoon);
        }
    }, []);

    const toggleLofi = () => {
        setLofiPlaying(!isLofiPlaying);
    };

    return (
        <Router>
            <div>
                <header>
                    <div className="logo">
                        <h1><span class='PES'>PES</span><span class='to'>to</span></h1>
                    </div>
                    <button className="lofi-button" onClick={toggleLofi}>
                        {isLofiPlaying ? 'Pause Lofi' : 'Play Lofi'}
                    </button>
                </header>

                <div id="greeting-container">
                    <h1 className="heading">
                        <FontAwesomeIcon icon={icon} /> {greeting}
                    </h1>
                    <h2>Choose Your Course</h2>
                </div>

                <div className="content">
                    <Cse isYear2Open={isYear2Open} toggleCourses={toggleCourses} />
                </div>

                {isLofiPlaying && (
                    <audio autoPlay loop>
                        <source src="https://ec3.yesstreaming.net:3755/stream" type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                )}

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
