export class UI {
    constructor(quiz, questionElem, optionElem) {
        this.quiz = quiz; // экземпляр Quiz
        this.questionElem = questionElem;
        this.optionElem = optionElem;
    }

    questionRender() {
        const CURRENT_QUESTION = this.quiz.getCurrentQuestion();
        this.questionElem.textContent = CURRENT_QUESTION.questionText;
    }
}