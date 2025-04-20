import {Timer} from "./timerClass.js"

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
}

document.addEventListener("DOMContentLoaded", init);
