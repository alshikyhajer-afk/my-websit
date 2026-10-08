const questions = [
    {
        question: "She _____ to university every day.",
        answers: ["go", "goes", "going"],
        correct: "B"
    },
    {
        question: "I _____ coffee every morning.",
        answers: ["drink", "drinks", "drinking"],
        correct: "A"
    },
    {
        question: "They _____ football yesterday.",
        answers: ["play", "played", "playing"],
        correct: "B"
    },
    {
        question: "We _____ dinner when he called.",
        answers: ["have", "were having", "had"],
        correct: "B"
    },
    {
        question: "If I _____ more time, I would learn another language.",
        answers: ["have", "had", "will have"],
        correct: "B"
    },
    {
        question: "She has lived in Benghazi _____ 2020.",
        answers: ["for", "since", "from"],
        correct: "B"
    },
    {
        question: "This book is _____ than the one I read last week.",
        answers: ["interesting", "more interesting", "most interesting"],
        correct: "B"
    },
    {
        question: "By the time we arrived, the movie _____.",
        answers: ["started", "has started", "had started"],
        correct: "C"
    },
    {
        question: "He suggested _____ earlier tomorrow.",
        answers: ["leave", "leaving", "to leave"],
        correct: "B"
    },
    {
        question: "If she had studied harder, she _____ the exam.",
        answers: ["would pass", "will pass", "would have passed"],
        correct: "C"
    }
];


let currentQuestion = 0;
let userAnswers = [];


function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-text").textContent =
        question.question;

    document.getElementById("question-number").textContent =
        currentQuestion + 1;


    const answers = document.querySelectorAll(".answers span");

    answers.forEach((answer, index) => {
        answer.textContent = question.answers[index];
    });


    const radioButtons =
        document.querySelectorAll('input[name="answer"]');

    radioButtons.forEach((radio) => {

        radio.checked =
            userAnswers[currentQuestion] === radio.value;

    });


    updateButtons();
}


function saveAnswer() {

    const selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {
        userAnswers[currentQuestion] = selected.value;
    }
}


function updateButtons() {

    const nextButton =
        document.getElementById("next-btn");

    const previousButton =
        document.getElementById("previous-btn");


    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "Finish Test ✓";

    } else {

        nextButton.textContent = "Next →";

    }


    if (currentQuestion === 0) {

        previousButton.disabled = true;

    } else {

        previousButton.disabled = false;

    }
}


function nextQuestion() {

    saveAnswer();


    if (!userAnswers[currentQuestion]) {

        alert("Please select an answer first.");

        return;
    }


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        calculateResult();

    }
}


function previousQuestion() {

    saveAnswer();


    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }
}


function calculateResult() {

    let score = 0;


    questions.forEach((question, index) => {

        if (userAnswers[index] === question.correct) {
            score++;
        }

    });


    localStorage.setItem(
        "bridgeScore",
        score
    );


    localStorage.setItem(
        "bridgeAnswers",
        JSON.stringify(userAnswers)
    );


    window.location.href = "result.html";
}


showQuestion();