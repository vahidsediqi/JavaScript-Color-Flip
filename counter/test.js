const numbers = document.querySelectorAll('.btn');
let display = document.querySelector('.output');
numbers.forEach((no) => {
    no.addEventListener('click', (e) => {
        const number = e.currentTarget.textContent;
        console.log(number.textContent);

        display.innerHTML =+  number;
    })
})