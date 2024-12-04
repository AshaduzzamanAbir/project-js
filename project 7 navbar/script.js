const bar = document.querySelector('.menu-bar');

bar.addEventListener('click', function(){
  document.querySelector('.links').classList.toggle('show');
})