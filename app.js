const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=> {
// Get random number between 0 - 3
const randomNambur = getRandomNumber();
console.log(randomNambur)
document.body.style.background = colors[randomNambur];
color.innerHTML = colors[randomNambur];
})

// Get randon number function

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}
