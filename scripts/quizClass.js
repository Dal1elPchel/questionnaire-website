class Quiz {
    constructor(questions) {
        this.questions = questions; // массив объектов Question
        this.currentQuestionIndex = 0; // индекс текущего вопроса
        this.answers = new Array(questions.length).fill(null); // массив для хранения ответов
        this.viewedQuestions = new Array(questions.length).fill(false);
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    saveAnswer(answer) {
        this.answers[this.currentQuestionIndex] = answer;
    }

    setCurrentQuestion(index) {
        if (index >= 0 && index < this.questions.length) {
            this.viewedQuestions[this.currentQuestionIndex] = true;
            this.currentQuestionIndex = index;
        }
    }
}