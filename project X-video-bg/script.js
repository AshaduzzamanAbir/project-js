const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
  if(!btn.classList.contains('slide')){
  btn.classList.add('slide');
  video.pause();
}else{
  btn.classList.remove('slide');
  video.play();
}
})

// set preloader

const preloader = document.querySelector('.loader');

window.addEventListener('load', function(){
  preloader.classList.add('remove')

  console.log(preloader)
});