// The questions, choices, and correct answers
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Shakespeare", "Dickens", "Twain", "Austen"],
        answer: 0
    }
    
];

let currentQuestion = 0; // Keep track of the current question
let userAnswer = null;   // Store the user's selected answer

// Load the first question
function loadQuestion() {
    const q = quizData[currentQuestion]; // Get the current question
    document.getElementById('question').textContent = q.question; // Display the question
    
    // Display the choices
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = ''; // Clear previous choices
    q.choices.forEach((choice, index) => {
        choicesDiv.innerHTML += `<label><input type="radio" name="choice" value="${index}" onclick="userAnswer = ${index}"> ${choice}</label><br>`;
    });
}

// Check the user's answer when they click "Submit"
function checkAnswer() {
    const correctAnswer = quizData[currentQuestion].answer;
    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Wrong!";
    }
}

// Go to the next question when they click "Next"
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;  // Move to the next question
        userAnswer = null;  // Reset the user's answer
        document.getElementById('result').textContent = ''; // Clear the result
        loadQuestion();     // Load the next question
    } else {
        alert("You've finished the quiz!");
    }
}


window.onload = loadQuestion;
