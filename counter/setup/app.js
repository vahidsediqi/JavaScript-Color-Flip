const value = document.getElementById('value');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
let updatedValue = 0;

increase.addEventListener('click', () => {
    updatedValue ++;
    value.textContent = updatedValue;
    if (updatedValue > 0) {
        value.style.color = 'green'
    }
});

decrease.addEventListener('click', () => {
    updatedValue --;

    value.textContent = updatedValue;

    if(updatedValue < 0) {
        value.style.color = 'red'
    }
});

reset.addEventListener('click', () => {
   value.innerHTML = 0;
})
