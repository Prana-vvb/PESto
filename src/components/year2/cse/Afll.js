import React, { useState } from 'react';
import './Afll.css'; // External CSS file for styles (you can include the same styles)

const Checklist = ({ items, unit }) => {
    // Maintain the state of checkboxes for each unit
    const [checkedItems, setCheckedItems] = useState({});

    // Handle checkbox change
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
            <header>
                <div className="logo">
                    <img src="../../../../../landing/PESto.png" alt="Logo" />
                </div>
            </header>
            <div className="course-title">Automata Formal Languages and Logic</div>

            <Checklist items={unit1Items} unit="UNIT 1" />
            <Checklist items={unit2Items} unit="UNIT 2" />
            <Checklist items={unit3Items} unit="UNIT 3" />
            <Checklist items={unit4Items} unit="UNIT 4" />
        </div>
    );
};

export default AFLLChecklist;
