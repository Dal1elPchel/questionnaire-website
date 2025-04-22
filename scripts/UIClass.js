export class UI {
    constructor(quiz, questionElem, optionElem) {
        this.quiz = quiz; // экземпляр Quiz
        this.questionElem = questionElem;
        this.optionElem = optionElem;
    }

    questionRender() {
        const CURRENT_QUESTION = this.quiz.getCurrentQuestion();
        this.questionElem.textContent = CURRENT_QUESTION.questionText;

        const options = CURRENT_QUESTION.options;
        const type = CURRENT_QUESTION.type;
        let optionName = "";
        switch (type) {
            case "radio":
                optionName = "radioButton";
                options.forEach((optionText, index) => {
                    const radio = document.createElement("input");
                    radio.type = "radio";
                    radio.name = optionName;
                    radio.value = optionText;
                    radio.id = `radio_${index}`;

                    const label = document.createElement("label");
                    label.htmlFor = `radio_${index}`;
                    label.textContent = optionText;

                    this.optionElem.appendChild(radio);
                    this.optionElem.appendChild(label);
                    this.optionElem.appendChild(document.createElement("br"));
                });
        }
    }
}