import React, { useState } from 'react';
import './Ddco.css';

const Checklist = ({ items, unit }) => {
    // Manage state of checkboxes for each unit
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="checklist-container">
            <h1>{unit}</h1>
            {items.map((item, index) => (
                <div key={index} className="checkbox-item">
                    <input
                        type="checkbox"
                        id={`${unit}-item${index + 1}`}
                        checked={checkedItems[index] || false}
                        onChange={() => handleCheckboxChange(index)}
                    />
                    <label
                        htmlFor={`${unit}-item${index + 1}`}
                        className={checkedItems[index] ? 'checked' : ''}
                    >
                        {item}
                    </label>
                </div>
            ))}
        </div>
    );
};

const DDCOChecklist = () => {
    // Define the items for each unit
    const unit1Items = [
        'Introduction',
        'Boolean Functions and Truth Tables',
        'K-Maps',
        'SOP and POS',
        "Don't Care Conditions",
        'NAND and NOR Implementation',
        'Analysis Procedure',
        'Design Procedure',
        'Adder-Subtractor',
        'Decimal Adder',
        'Binary Multiplier',
        'Magnitude Comparator',
        'Decoders',
        'Encoders',
        'Multiplexers',
    ];

    const unit2Items = [
        'Sequential Circuits and Latches - Introduction',
        'Flip Flops',
        'Analysis of Clocked Sequential Circuits',
        'State Reduction and Assignment',
        'Registers',
        'Shift Register',
        'Ripple Counters',
        'Synchronous Counters',
        'Other Counters',
    ];

    const unit3Items = [
        'Basic Structure of a Computer',
        'Arithmetic Operations and Characters',
        'Memory Locations and Address',
        'Memory Operations - Instructions and Instruction Sequencing',
        'Addressing Modes',
        'Machine Instruction and Programs',
        'I/O Organization',
        'Standard I/O',
    ];

    const unit4Items = [
        'Hashing - Introduction',
        'Open Hashing',
        'Closed Hashing',
        'Collision Handling - Quadratic Probing and Double Hashing',
        'Applications of Hashing in Cryptography',
        'Trie Trees and Suffix Trees - Introduction',
        'Finding a Path in a Network using BFS/DFS',
        'Trie Trees - Implementation',
        'Checking Graph Connectivity using BFS/DFS',
        'Applications - URL Decoding',
        'Applications - Computer Network Topology',
        'Indexing in a Data Base',
    ];

    return (
        <div>
            <header>
                <div className="logo">
                    <img src="../../../../../landing/PESto.png" alt="Logo" />
                </div>
            </header>
            <div className="course-title">Digital Design and Computer Organization</div>

            <Checklist items={unit1Items} unit="UNIT 1" />
            <Checklist items={unit2Items} unit="UNIT 2" />
            <Checklist items={unit3Items} unit="UNIT 3" />
            <Checklist items={unit4Items} unit="UNIT 4" />
        </div>
    );
};

export default DDCOChecklist;