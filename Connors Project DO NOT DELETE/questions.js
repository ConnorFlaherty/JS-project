// Define the questions
const questions = [
    { id: "bioware", points: 5, message: "Bioware is the creator of Mass Effect." },
    { id: "Leviathans", points: 10, message: "The Leviathans built the AI to prevent organic-synthetic conflict." },
    { id: "Reap", points: 8, message: "The Reapers built the Citadel to facilitate galactic harvest." },
    { id: "AI", points: 8, message: "The Reapers want to preserve organic races. Ironic, isn't it?" },
    { id: "Javik", points: 8, message: "Javik is the last voice of the Protheans." },
    { id: "2183", points: 15, message: "Mass Effect 1 happens in 2183." },
    { id: "50ago", points: 6, message: "The Protheans died 50,000 years ago." },
    { id: "False", points: 8, message: "False! That role goes to Harbinger." },
    { id: "Truer", points: 20, message: "She is from Goose Bay." },
    { id: "Truest", points: 12, message: "Parts of dead Reapers can indoctrinate, even millions of years later." },
];

// Dynamically add questions to the form
const quizForm = document.getElementById("quiz");
questions.forEach((question) => {
    const label = document.createElement("label");
    label.innerHTML = `
        <input type="checkbox" id="${question.id}"> ${question.message}
    `;
    quizForm.appendChild(label);
    quizForm.appendChild(document.createElement("br"));
});
