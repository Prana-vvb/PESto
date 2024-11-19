import React, { useState } from 'react';
import './Afll.css'; // External CSS file for styles

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

const AFLLChecklist = () => {
    const unit1Items = [
        'Sets, Functions and Relations',
        'Basic Notations',
        'DFA',
        'NDFA',
        'Minimization of Finite Automata',
        'Applications of FSMs',
        'RegEx',
        'RegEx in Practice',
        'Equivalence of Finite Automata and RegEx',
        'Central Limit Theorem',
        'Equivalence of Two Regular Expressions',
        'Regular Grammar',
        'Equivalence of Regular Grammar and Finite Automata',
    ];

    const unit2Items = [
        'Properties of Regular Languages',
        'Pumping Lemma',
        'Linear CFG',
        'Non-Linear CFG',
        'Deterministic PDA',
        'Non-Deterministic PDA',
    ];

    const unit3Items = [
        'Parsing and Ambiguity',
        'Chomsky Normal Form',
        'CYK Algorithm',
        'Greibach Normal Form and CFG to PDA',
        'Properties of Context-Free Languages',
        'Pumping Lemma for Context-Free Languages',
        'Turing Machines',
    ];

    const unit4Items = [
        'PCP, Undecidable Problem, Reduction and UTM',
        'Propositional Logic',
        'Propositional Logic - Syntax and Semantics',
        'Propositional Logic - Simple KB and Inference Procedure',
        'Inference and Proofs',
        'CNF by Proofs and Resolution',
        'First Order Logic - Syntax and Semantics Quantifiers',
        'Number, Set and Electronic Circuit Domain',
        'Prolog Programming',
    ];

    return (
        <div>
            <div className="course-title">Automata Formal Languages and Logic</div>

            <Checklist
                items={unit1Items}
                unit="UNIT 1"
                storageKey="afll-unit-1-checklist"
            />
            <Checklist
                items={unit2Items}
                unit="UNIT 2"
                storageKey="afll-unit-2-checklist"
            />
            <Checklist
                items={unit3Items}
                unit="UNIT 3"
                storageKey="afll-unit-3-checklist"
            />
            <Checklist
                items={unit4Items}
                unit="UNIT 4"
                storageKey="afll-unit-4-checklist"
            />
        </div>
    );
};

export default AFLLChecklist;
