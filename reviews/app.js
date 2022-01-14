// // local reviews data
// const reviews = [
//   {
//     id: 1,
//     name: "Neha Karkar",
//     job: "Bollywood Singer",
//     img:
//       "https://i.scdn.co/image/ab6761610000e5eb2eb3676d6d03d8872feb0875",
//     text:
//       "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//   },
//   {
//     id: 2,
//     name: "anna johnson",
//     job: "web designer",
//     img:
//       "https://kirunews.com/wp-content/uploads/2019/12/GG.jpg",
//     text:
//       "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//   },
//   {
//     id: 3,
//     name: "Johnny Depp",
//     job: "Bollywood Actor",
//     img:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpy5AJ7T5ogRTjgXmakPRf0SaxtG5fA-7YtfI7aqZKjBCSi7R",
//     text:
//       "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//   },
//   {
//     id: 4,
//     name: "Keanu Reeves",
//     job: "Hollywood Star",
//     img:
//       "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkqugX0WLc78TSUXjzYAQvwT7nqU8vJknuJGldrNv0FO7kD8vl",
//     text:
//       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
//   },
// ];


const dataURL = ('https://vahidsediqi.github.io/Json-data/review-app/data.json')

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
let currentItem = 0;

async function getData() {
  const data = await fetch(dataURL);
  const reviews = await data.json();
    img.src = reviews[currentItem].img
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;

    // add eventListner
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
