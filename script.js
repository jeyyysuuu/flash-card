const answerContainer = document.getElementsByClassName('answer-container');
const questions = document.querySelectorAll('.questions > div');
const answers = document.querySelectorAll('.answers > div');
const of = document.querySelector('.progress > span');
const prog = document.getElementById('percent');
const pre = document.getElementById('pre');
const show = document.getElementById('show');
const hide = document.getElementById('hide');
const next = document.getElementById('next');

let currentQuestionIndex = 0;
let currentAnswerIndex = 0;
let currentWidth = 25;

show.addEventListener('click', () => {
    if (show.textContent === 'Show Answer'){
        answerContainer[0].style.display = 'flex';
        show.textContent = 'Hide Answer';
    } else {
        answerContainer[0].style.display = 'none'
        show.textContent = 'Show Answer';
    }
});

function updateWidth(){
    prog.style.width = `${currentWidth}%`;
}

function updateVisibility() {
    questions.forEach((question, index) => {
        if (index === currentQuestionIndex) {
            question.classList.remove('hidden'); 
        } else {
            question.classList.add('hidden');
        }
    });
}

function updateAnswers() {
    answers.forEach((answer, index) => {
        if (index === currentAnswerIndex) {
            answer.classList.remove('hidden'); 
        } else {
            answer.classList.add('hidden'); 
        }
    });
}

next.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        of.textContent = currentQuestionIndex + 2 + ' of 4';
        currentQuestionIndex++;
        currentAnswerIndex++;
        updateVisibility();
        updateAnswers();
    }

    if (currentWidth < 100){
        currentWidth += 25;
        prog.textContent = `${currentWidth}%`
        updateWidth()
    }
});

pre.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        of.textContent = currentQuestionIndex + ' of 4';
        currentQuestionIndex--;
        currentAnswerIndex--;
        updateVisibility();
        updateAnswers();
    }

    if (currentWidth > 25){
        currentWidth -= 25;
        prog.textContent = `${currentWidth}%`
        updateWidth()
    }
});


