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


const userAnswers =
    JSON.parse(localStorage.getItem("bridgeAnswers")) || [];


const container =
    document.getElementById("review-container");


questions.forEach((question, index) => {

    const userAnswer = userAnswers[index];

    const questionBox =
        document.createElement("div");

    questionBox.className = "review-question";


    const questionTitle =
        document.createElement("h2");

    questionTitle.textContent =
        `${index + 1}. ${question.question}`;


    questionBox.appendChild(questionTitle);


    question.answers.forEach((answer, answerIndex) => {

        const option =
            document.createElement("div");

        const letter =
            String.fromCharCode(65 + answerIndex);


        option.textContent =
            `${letter}. ${answer}`;


        if (letter === question.correct) {

            option.classList.add("correct");

        }


        if (
            letter === userAnswer &&
            letter !== question.correct
        ) {

            option.classList.add("wrong");

        }


        questionBox.appendChild(option);

    });


    if (!userAnswer) {

        const notAnswered =
            document.createElement("p");

        notAnswered.textContent =
            "You didn't answer this question.";

        notAnswered.className =
            "not-answered";

        questionBox.appendChild(notAnswered);

    }


    container.appendChild(questionBox);

});