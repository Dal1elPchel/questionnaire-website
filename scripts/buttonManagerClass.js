export class ButtonManager {
    constructor(questionListElem) {
        this.questionListElem = questionListElem;
        this.buttonList = [];// элемент блока со списком вопросов на странице
    }

    creatButtonList() {
        let style = "no_checked";
        for (let button = 1; button < 9; button++) {
            if (button === 1) style = "current";
            else style = "no_checked";
            this.buttonList.push({
                "value": button.toString(),
                "style": style
            });
        }
    }

    displayButtons() {
        this.creatButtonList();
        this.buttonList.forEach((button, index) => {
            const buttonElem = document.createElement("input");
            buttonElem.type = "button";
            buttonElem.value = button.value;
            buttonElem.classList.add("button", button.style);

            button.onclick = () => {
                if (button.classList.contains("no_checked")) {
                    button.classList.remove("no_checked");
                    button.classList.add("current", "checked");
                }
            };

            this.questionListElem.appendChild(buttonElem);
        });
    }

    changeButtonStyle() {
        this.buttonList.forEach((button) => {

        });
    }
}

//<input type="button" value="1" class="current button" />