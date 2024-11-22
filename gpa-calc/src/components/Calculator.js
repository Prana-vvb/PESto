import React, { useState } from "react";

function Calculator() {
    const [courses, setCourses] = useState(
        Array.from({ length: 6 }, () => ({ name: "", credits: "", grade: "" }))
    );
    const [gpa, setGpa] = useState(null);

    const handleChange = (index, field, value) => {
        const updatedCourses = [...courses];
        updatedCourses[index][field] = value;
        setCourses(updatedCourses);
    };

    const calculateGPA = () => {
        const gradeValues = { S: 10, A: 9, B: 8, C: 7, D: 6, E: 5 };
        let totalCredits = 0;
        let weightedGrades = 0;

        courses.forEach((course) => {
            if (course.credits && course.grade) {
                const credits = parseFloat(course.credits);
                const grade = gradeValues[course.grade] || 0;
                totalCredits += credits;
                weightedGrades += credits * grade;
            }
        });

        const result = totalCredits > 0 ? (weightedGrades / totalCredits).toFixed(2) : "N/A";
        setGpa(result);
    };

    return (
        <div className="calculator">
            <h1>GPA Calculator</h1>
            <form className="course-form">
                {courses.map((course, index) => (
                    <div key={index} className="course-row">
                        <input
                            type="text"
                            placeholder={`Course Name`}
                            value={course.name}
                            onChange={(e) => handleChange(index, "name", e.target.value)}
                            className="course-input"
                        />
                        <input
                            type="number"
                            placeholder="Credits"
                            value={course.credits}
                            onChange={(e) => handleChange(index, "credits", e.target.value)}
                            className="course-input"
                        />
                        <select
                            value={course.grade}
                            onChange={(e) => handleChange(index, "grade", e.target.value)}
                            className="course-select"
                        >
                            <option value="">Select Grade</option>
                            <option value="S">S</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div>
                ))}
            </form>
            <button onClick={calculateGPA} className="calculate-button">
                Calculate GPA
            </button>
            <div className="gpa-result">
                {gpa && <h2>Your GPA: {gpa}</h2>}
            </div>
        </div>
    );
}

export default Calculator;
