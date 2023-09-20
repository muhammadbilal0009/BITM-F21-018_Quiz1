const numCoursesInput = document.getElementById('numCourses');
const addCoursesButton = document.getElementById('addCourses');
const courseTable = document.getElementById('courseTable').getElementsByTagName('tbody')[0];
const calculateGPAButton = document.getElementById('calculateGPA');
const resetButton = document.getElementById('reset');
const resultDiv = document.getElementById('result');
const gpaResult = document.getElementById('gpaResult');

let courseData = [];

addCoursesButton.addEventListener('click', () => {
    const numCourses = parseInt(numCoursesInput.value);

    if (numCourses > 0) {
        courseTable.innerHTML = '';

        for (let i = 0; i < numCourses; i++) {
            const newRow = courseTable.insertRow();
            newRow.innerHTML = `
                <td><input type="text"></td>
                <td><input type="number" min="1" max="4"></td>
                <td><input type="number" min="0" max="100"></td>
            `;
        }

        calculateGPAButton.style.display = 'block';
        resetButton.style.display = 'block';
    }
});

calculateGPAButton.addEventListener('click', () => {
    const courseRows = courseTable.rows;
    let totalCredits = 0;
    let totalWeightedMarks = 0;

    for (let i = 0; i < courseRows.length; i++) {
        const creditInput = courseRows[i].cells[1].querySelector('input');
        const marksInput = courseRows[i].cells[2].querySelector('input');

        const credits = parseInt(creditInput.value);
        const marks = parseInt(marksInput.value);

        if (!isNaN(credits) && !isNaN(marks)) {
            totalCredits += credits;
            totalWeightedMarks += credits * calculateGPAFromMarks(marks);
        }
    }

    const gpa = (totalWeightedMarks / totalCredits).toFixed(2);
    gpaResult.textContent = gpa;
    resultDiv.style.display = 'block';
});

resetButton.addEventListener('click', () => {
    numCoursesInput.value = '';
    courseTable.innerHTML = '';
    calculateGPAButton.style.display = 'none';
    resetButton.style.display = 'none';
    resultDiv.style.display = 'none';
});

function calculateGPAFromMarks(marks) {
    if (marks >= 85) return 4.0;
    if (marks >= 80) return 3.66;
    if (marks >= 75) return 3.33;
    if (marks >= 71) return 3.0;
    if (marks >= 68) return 2.66;
    if (marks >= 64) return 2.33;
    if (marks >= 61) return 2.0;
    if (marks >= 58) return 1.66;
    if (marks >= 54) return 1.30;
    if (marks >= 50) return 1.0;
    return 0.0;
}
