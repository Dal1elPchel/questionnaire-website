export class Timer {
    constructor(duration, callback) {
        this.duration = duration;
        this.callback = callback;
        this.timeRemaining = duration; // оставшееся время
        this.interval = null;
    }

    start() {
        this.interval = setInterval(() => {
            this.timeRemaining--;
            if (this.timeRemaining <= 0) {
                stop();
                this.callback(); // вызов функции по окончанию времени
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    getTimeRemaining() {
        let minutes = Math.floor(this.timeRemaining / 60);
        let seconds = this.timeRemaining % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
}