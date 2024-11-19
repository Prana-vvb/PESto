import React, { useState } from 'react';
import './Wt.css';

// ChecklistItem component for individual checkbox items
const ChecklistItem = ({ label, checked, onChange }) => {
    return (
        <div className="checkbox-item">
            <input
                type="checkbox"
                id={label}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={label} className={checked ? 'checked' : ''}>
                {label}
            </label>
        </div>
    );
};

// Checklist component to render the list of items for a unit
const Checklist = ({ items, unit, storageKey }) => {
    // Load saved state from localStorage or initialize with default values
    const [checkedItems, setCheckedItems] = useState(() => {
        const savedState = localStorage.getItem(storageKey);
        return savedState ? JSON.parse(savedState) : items.reduce((acc, _, index) => {
            acc[index] = false;  // Initialize each item as unchecked
            return acc;
        }, {});
    });

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevState) => {
            const updatedState = {
                ...prevState,
                [index]: !prevState[index],
            };

            // Save the updated state to localStorage
            localStorage.setItem(storageKey, JSON.stringify(updatedState));
            return updatedState;
        });
    };

    return (
        <div className="checklist-container">
            <h1>{unit}</h1>
            {items.map((item, index) => (
                <ChecklistItem
                    key={index}
                    label={item}
                    checked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                />
            ))}
        </div>
    );
};

// Main WebTechChecklist component
const WebTechChecklist = () => {
    const unit1Items = [
        "Introduction to WWW and Web Protocols",
        "Basic HTML Syntax",
        "HTML Forms",
        "CSS - Introduction",
        "CSS - Box Model and Style Properties",
        "JavaScript - Introduction",
        "JavaScript - Arrays, Functions and Hoisting",
        "JavaScript - Built-in Objects",
        "JavaScript - Objects",
        "JavaScript - DOM",
        "DOM Manipulation",
        "Event and Event Handling",
    ];

    const unit2Items = [
        "XML and JSON",
        "Audio and Video Elements, Progress Bars",
        "Canvas and SVG",
        "Geolocation",
        "jQuery - Introduction",
        "jQuery - Event Handling and Effects",
        "Callbacks and Promises",
        "Single Page Application and Asynchronous Communication",
        "AJAX - Introduction",
        "GET, POST and FETCH",
        "Introduction to MERN Stack",
        "React - Introduction",
        "React - Classes and Components",
        "React - Component Styling and Complex Components",
    ];

    const unit3Items = [
        "Component States and Component Lifecycle Methods",
        "Stateless Components",
        "Refs and Keys",
        "Event Handling",
        "React Hooks",
        "Node - Introduction",
        "Setting up a Node.js App",
        "Node Modules",
        "Buffers, Streams and File System",
        "HTTP Module - Handling HTTP Requests",
    ];

    const unit4Items = [
        "MongoDB - Introduction",
        "MongoDB Connectivity",
        "Event Loop and Event Emitter",
        "React Integration - React Router",
        "Web Services and REST APIs - Introduction",
        "Express.js - Overview",
        "Routing and URL Binding",
        "Error Handling and Express Middleware",
        "Form Data and File Upload"
    ];

    return (
        <div>
            <div className="course-title">Web Technologies</div>

            <Checklist
                items={unit1Items}
                unit="UNIT 1"
                storageKey="webtech-unit-1-checklist"
            />
            <Checklist
                items={unit2Items}
                unit="UNIT 2"
                storageKey="webtech-unit-2-checklist"
            />
            <Checklist
                items={unit3Items}
                unit="UNIT 3"
                storageKey="webtech-unit-3-checklist"
            />
            <Checklist
                items={unit4Items}
                unit="UNIT 4"
                storageKey="webtech-unit-4-checklist"
            />
        </div>
    );
};

export default WebTechChecklist;
