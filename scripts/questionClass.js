export class Question {
    constructor(questionText, options, type, correctAnswer) {
        this.questionText = questionText; // текст вопроса
        this.options = options; // массив вариантов ответов
        this.type = type; // тип вопроса ('checkbox', 'radio', 'select', 'text')
        this.correctAnswer = correctAnswer; // правильный ответ
    }

    // проверяет правильность ответа
    checkCorrectAnswer(userAnswer) {
        switch (this.type) {
            case "radio":
            case "select":
                return userAnswer === this.correctAnswer;
            case "checkbox":
                if (!Array.isArray(userAnswer)) return false;

                let correctAnswerSet = new Set(this.correctAnswer);
                let userAnswerSet = new Set(userAnswer);

                if (userAnswerSet.size !== correctAnswerSet.size) return false;
                for (let item of correctAnswerSet) {
                    if (!userAnswerSet.has(item)) return false;
                }

                return true;
            case "text":
                if (typeof userAnswer !== "string") return false;
                return userAnswer.trim().toLowerCase() === this.correctAnswer.trim().toLowerCase();
            default:
                return false;
        }
    }
}
