const reviews = [
  {
    id: 1,
    name: 'John',
    job: 'webmaster',
    img: 'author-1.jpeg',
    text: 
    'Id harum laudantium doloribus in perspiciatis asperiores nostrum optio! Ut quisquam eos porro voluptates non excepturi odit pariatur.',
  },
  {
    id: 2,
    name: 'lusifar',
    job: 'ui/xi designer',
    img: 'author-2.jpeg',
    text: 
    'sit amet consectetur adipisicing elit. Porro dolorem quaerat sunt nostrum nulla, aliquam dicta labore laborum eum, non, iure illo!',
  },
  {
    id: 3,
    name: 'abira',
    job: 'web development',
    img: 'author-3.jpeg',
    text: 
    'psum dolor sit amet consectetur adipisicing elit. Ab nisi similique vero excepturi dolorum corporis sequi quisquam, aspernatur ipsa perspiciatis?',
  },
  {
    id: 4,
    name: 'henand mudi',
    job: 'back end',
    img: 'author-4.jpeg',
    text: 
    'consectetur adipisicing elit. Explicabo dignissimos excepturi non! Id harum laudantium doloribus in perspiciatis asperiores nostrum optio! Ut quisquam eos porro voluptates non excepturi odit pariatur.',
  },
];

//select item
const img = document.querySelector('#author-img')
const authorName = document.querySelector('#author-name')
const job = document.querySelector('#job')
const info = document.querySelector('#info')

const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const rendomBtn = document.querySelector('#random-btn')

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem)
  
})

// show a person for reuse 
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  authorName.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person 
nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
})
// show prev person
prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})

rendomBtn.addEventListener("click", function(){
  rendomReview = Math.floor(Math.random() * reviews.length );
  showPerson(rendomReview);
})


