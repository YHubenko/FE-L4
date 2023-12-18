let firstElement = document.getElementById('first-element');
let secondElement = document.querySelector('#second-element');

let photo = document.querySelector('#photo');
let showBtn = document.querySelector('#show-btn');
let increaseBtn = document.querySelector('#increase-btn');
let decreaseBtn = document.querySelector('#decrease-btn');
let hideBtn = document.querySelector('#hide-btn');

firstElement.addEventListener('click', () => {
    firstElement.classList.toggle('colored');
})

secondElement.addEventListener('click', () => {
    secondElement.classList.toggle('colored');
})

showBtn.addEventListener('click', () => {
    photo.style.display = 'block';
})

increaseBtn.addEventListener('click', () => {
    let currentWidth = parseInt(getComputedStyle(photo).width);
    photo.style.width = `${currentWidth + 10}px`;
})

decreaseBtn.addEventListener('click', () => {
    let currentWidth = parseInt(getComputedStyle(photo).width);
    photo.style.width = `${Math.max(currentWidth - 10, 0)}px`;
})

hideBtn.addEventListener('click', () => {
    photo.style.display = 'none';
})

console.log(photo.style.width)