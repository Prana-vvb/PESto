import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Cse = ({ isYear2Open, toggleCourses }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Handle navigation on course click
  const handleNavigation = (coursePath) => {
    navigate(coursePath); // Navigate to the specified course path
  };

  return (
    <div>
      {/* Year 2 CSE/AIML */}
      <h3>
        <i className="fa-solid fa-microchip"></i> Year 2 - CSE/AIML
        <button className="toggle-btn" onClick={() => toggleCourses(2)}>
          {isYear2Open ? 'Hide Courses' : 'Show Courses'}
        </button>
      </h3>
      {isYear2Open && (
        <div className="courses">
          {/* Use onClick to navigate programmatically */}
          <button className="year-link" onClick={() => handleNavigation('/year2/cse/ddco')}>
            Digital Design and Computer Organization (DDCO)
          </button>
          <button className="year-link" onClick={() => handleNavigation('/year2/cse/dsa')}>
            Data Structures and Algorithms (DSA)
          </button>
          <button className="year-link" onClick={() => handleNavigation('/year2/cse/mcse')}>
            Mathematics for Computer Science Engineering (MCSE)
          </button>
          <button className="year-link" onClick={() => handleNavigation('/year2/cse/afll')}>
            Automata and Formal Language Logic (AFLL)
          </button>
          <button className="year-link" onClick={() => handleNavigation('/year2/cse/wt')}>
            Web Technologies (WT)
          </button>
        </div>
      )}
    </div>
  );
}

export default Cse;
