import React, { useState } from 'react';
import './Mcse.css';

// Checklist component to render each unit's checklist
const Checklist = ({ items, unit, storageKey }) => {
    // Load saved state from localStorage or initialize with default values
    const [checkedItems, setCheckedItems] = useState(() => {
        const savedState = localStorage.getItem(storageKey);
        return savedState ? JSON.parse(savedState) : {};
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

// Main MCSEChecklist component that will render all units
const MCSEChecklist = () => {
    const unit1Items = [
        "Introduction to Data Science",
        "Sampling - Introduction",
        "Sampling Methods and Sampling Errors",
        "Types of Data and Experiments",
        "Statistics - Introduction",
        "Summary Statistics",
        "Normal Probability Plots",
        "Chebyshev's Inequality",
        "Sampling Distribution",
        "Central Limit Theorem",
        "Point Estimation - MSE",
        "Maximum Likelihood Estimation",
        "Generation of Random Variates"
    ];

    const unit2Items = [
        "Large-Sample Confidence Intervals for a Population Mean",
        "Confidence Intervals for Mean of Small Samples - Student's t Distribution",
        "Confidence Intervals for the Difference between Two Means",
        "Confidence Interval Estimates for Paired Data",
        "Margin of Errors and Factors Affecting Margin of Error",
        "Hypothesis Testing - Introduction",
        "Large Sample Tests for a Population Mean",
        "Drawing Conclusions from the Hypothesis Test",
        "Large Sample Tests for a Population Proportion",
        "Large Sample Tests for the Difference between Two Means",
    ];

    const unit3Items = [
        "Distribution Free Tests",
        "Chi-squared Test",
        "Fixed Level Testing",
        "Type I and Type II Errors",
        "Power of a Test",
        "Factors affecting Power of a Test",
        "Simple Linear Regression",
        "Correlation",
        "Multilinear Regression"
    ];

    const unit4Items = [
        "Introduction to Optimization",
        "Modelling Concepts",
        "Unconstrained Optimization",
        "Discrete Variable Optimization",
        "Genetic and Evolutionary Optimization",
        "Constrained Optimization"
    ];

    return (
        <div>
            <div className="course-title">Mathematics for Computer Science Engineers</div>

            <Checklist
                items={unit1Items}
                unit="UNIT 1"
                storageKey="mcse-unit-1-checklist"
            />
            <Checklist
                items={unit2Items}
                unit="UNIT 2"
                storageKey="mcse-unit-2-checklist"
            />
            <Checklist
                items={unit3Items}
                unit="UNIT 3"
                storageKey="mcse-unit-3-checklist"
            />
            <Checklist
                items={unit4Items}
                unit="UNIT 4"
                storageKey="mcse-unit-4-checklist"
            />
        </div>
    );
};

export default MCSEChecklist;
