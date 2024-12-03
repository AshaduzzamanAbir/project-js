const colors = ['red', 'green', 'blue', 'rgba(133,122,200)','#f15025'];
const button = document.querySelector('#btn');
const color = document.querySelector('#color');


button.addEventListener('click', function(){
  const randomColors = getRandomColors()
  document.body.style.backgroundColor = colors[randomColors];
  color.innerHTML = colors[randomColors];
  console.log(randomColors)
});

function getRandomColors(){
  return Math.floor(Math.random()* colors.length);
}
