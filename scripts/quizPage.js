import {Timer} from "./timerClass.js"
import {Question} from "./questionClass.js";
import {Quiz} from "./quizClass.js";
import {UI} from "./UIClass.js";


async function loadQuestion() {
    const RESPONSE = await fetch("../data/package.json");
    const QUESTIONS_DATA = await RESPONSE.json();
    const QUESTION_LIST = QUESTIONS_DATA.questions;
    let q_array = new Array(0);

    QUESTION_LIST.forEach(q => { q_array.push(new Question(q.questionText, q.options, q.type, q.correctAnswers)); });
    return q_array;
}

async function initializeTest() {
    const questionsList = await loadQuestion();
    const QUIZ = new Quiz(questionsList);
    let questionElem = document.getElementById("question");
    let optionsElem = document.getElementById("options");
    const UI_MANAGER = new UI(QUIZ, questionElem, optionsElem);

    UI_MANAGER.questionRender();
}

function initializeTimer() {

    let duration = parseInt(localStorage.getItem("timer"), 10);
    let timer = new Timer(duration, () => {
        alert("Время прохождения теста вышло!");
        window.location.href = "results.html";
    });

    if (duration < 300 && duration > 0) {
        timer.start();
        const timerElem = document.getElementById("timer");
        const timerDisplay = setInterval(() => {
            timerElem.innerText = timer.getTimeRemaining();
        }, 1000);
    } else {
        alert("Введите корректное значение таймера!");
        window.location.href = "index.html";
        return null;
    }



}

async function init() {
    initializeTimer();
    initializeTest();
}

document.addEventListener("DOMContentLoaded", init);
