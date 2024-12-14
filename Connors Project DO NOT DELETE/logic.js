const total = 10;
let correct = 0;
let points = 0;

const check = document.getElementById("Butt");
const percentElement = document.getElementById("percent");
const totalElement = document.getElementById("total");

if (check) {
    check.addEventListener("click", () => {
        correct = 0; // Reset correct answers
        points = 0; // Reset points

        questions.forEach((question) => {
            const element = document.getElementById(question.id);
            if (element?.checked) {
                alert(`Correct: ${question.message}`);
                correct++;
                points += question.points;
            } else {
                alert(`Incorrect: ${question.message}`);
            }
        });

        const percent = (correct / total) * 100;
        percentElement.textContent = percent.toFixed(2);
        totalElement.textContent = points;

        // Save results to localStorage
        saveResults(correct, percent);
    });
}

// Load results and display them on page load
const { correct: storedCorrect, score: storedScore } = loadResults();
if (storedCorrect !== null && storedScore !== null) {
    percentElement.textContent = storedScore;
    totalElement.textContent = storedCorrect;
}
