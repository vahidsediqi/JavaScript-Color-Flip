

const dataURL = ('https://vahidsediqi.github.io/Json-data/review-app/data.json')

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
let currentItem = 0;

// Fetching data from json
async function getData() {
  const data = await fetch(dataURL);
  const reviews = await data.json();
    img.src = reviews[currentItem].img
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;

    // adding to the next button eventListner
    nextBtn.addEventListener('click', ()=> {
      currentItem ++
      if(currentItem >  reviews.length - 1) {
        currentItem = 0
      } 
        img.src = reviews[currentItem].img
        author.textContent = reviews[currentItem].name;
        job.textContent = reviews[currentItem].job;
        info.textContent = reviews[currentItem].text;
      
    });


    // adding to the next previews eventListner
    prevBtn.addEventListener('click',() => {
       if(currentItem >= 1) {
         currentItem --;
         img.src = reviews[currentItem].img
         author.textContent = reviews[currentItem].name;
         job.textContent = reviews[currentItem].job;
         info.textContent = reviews[currentItem].text;
       } else {
        currentItem = reviews.length - 1;
        img.src = reviews[currentItem].img
        author.textContent = reviews[currentItem].name;
        job.textContent = reviews[currentItem].job;
        info.textContent = reviews[currentItem].text;
       }
    } 
    )

    // adding to the next Random button eventListner

    randomBtn.addEventListener('click', () => {
      const randNumber = Math.floor(Math.random() * reviews.length)
      currentItem = randNumber;
      img.src = reviews[currentItem].img
      author.textContent = reviews[currentItem].name;
      job.textContent = reviews[currentItem].job;
      info.textContent = reviews[currentItem].text;
    })
}


getData();
