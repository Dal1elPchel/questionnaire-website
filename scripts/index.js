const start_button = document.querySelector('#start_button');

start_button.addEventListener('click', () => {
    const question_randomer = document.querySelector('#rand_question').value;
    const variants_randomer = document.querySelector('#rand_answer').value;
    const timer = parseInt(document.querySelector('#timer').value, 10);
    window.location.href = "victory_form.html";

    localStorage.setItem("rand_q", question_randomer);
    localStorage.setItem("rand_a", variants_randomer);
    localStorage.setItem("timer", timer);
})