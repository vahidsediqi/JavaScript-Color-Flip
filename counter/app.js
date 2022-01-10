let counter = 0;
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        // console.log(event.currentTarget)
        const classes = event.currentTarget.classList;
        if(classes.contains('decrease')) {
            counter --;
        } else if (classes.contains('increase')) {
            counter ++
        } else {
            counter = 0;
        }

        // setting the collor 

        if(counter < 0) {
            value.style.color = 'red'
        }

       else if (counter > 1) {
            value.style.color = 'green'
        }

        value.innerHTML = counter
    })
})