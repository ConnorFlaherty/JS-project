// Save points to localStorage
function addToScore(points) {
    let currentScore = parseInt(localStorage.getItem("score")) || 0;
    currentScore += points;
    localStorage.setItem("score", currentScore);
}

// Load the score from localStorage
function getScore() {
    return parseInt(localStorage.getItem("score")) || 0;
}

// Clear the score (if needed for reset functionality)
function clearScore() {
    localStorage.setItem("score", 0);
}
