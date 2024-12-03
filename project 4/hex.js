const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const color = document.querySelector('#color');
const button = document.querySelector('#btn');

button.addEventListener('click', function(){
  let hexColor = '#';
  for(let i = 0; i < 6 ; i++){
    hexColor += hex[getRandomColor()];
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    
  }
});

function getRandomColor(){
  return Math.floor(Math.random() * hex.length)
}

color.addEventListener('click', function(){
  color.textContent;
  navigator.clipboard.writeText(color.textContent)
  alert(`selected color is ${color.textContent}`)

})