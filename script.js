const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

const words = ['Please', 'Sige na', 'Payag ka na', 'Maawa ka na'];

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Yeey!!';
});

noBtn.addEventListener('click', () => {
    noBtn.innerHTML = words[Math.floor(Math.random() * words.length)];

});
