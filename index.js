const start_button = document.querySelector('#start_button');

start_button.addEventListener('click', () => {
    const question_randomer = document.querySelector('#rand_question').value;
    const variants_randomer = document.querySelector('#rand_answer').value;
    const timer = document.querySelector('#timer').value;
    window.location.href = "victory_form.html";
})