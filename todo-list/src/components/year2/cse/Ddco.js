import React, { useState } from 'react';
import './Ddco.css'; // External CSS file for styles

const Checklist = ({ items, unit, storageKey }) => {
    // Load the saved state from localStorage or initialize with default values
    const [checkedItems, setCheckedItems] = useState(() => {
        const savedState = localStorage.getItem(storageKey);
        return savedState ? JSON.parse(savedState) : {};
    });

    // Handle checkbox change and update the state
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
        'Shift - Add Multiplier/Divider - 1',
        'Shift - Add Multiplier/Divider - 2',
        'Shift - Add Multiplier/Divider - 3',
        'Fundamental Concepts',
        'Floating Point',
        'Execution of Complete Instruction',
        'Hardwired Control, Micro programmed control',
    ];

    return (
        <div>
            <div className="course-title">Digital Design and Computer Organization</div>

            <Checklist
                items={unit1Items}
                unit="UNIT 1"
                storageKey="ddco-unit-1-checklist"
            />
            <Checklist
                items={unit2Items}
                unit="UNIT 2"
                storageKey="ddco-unit-2-checklist"
            />
            <Checklist
                items={unit3Items}
                unit="UNIT 3"
                storageKey="ddco-unit-3-checklist"
            />
            <Checklist
                items={unit4Items}
                unit="UNIT 4"
                storageKey="ddco-unit-4-checklist"
            />
        </div>
    );
};

export default DDCOChecklist;
