const menubar = document.querySelector('.menu-link-img');
const menuItems = document.querySelector('.menu-items');
const navbar = document.querySelector('.nav');
const topBtn = document.querySelector('.top');

menubar.addEventListener('click', function(){
  menuItems.classList.toggle('toggle')

})

window.addEventListener('scroll', function(){
  const scrollWidth = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
// for navbar fixed
  if (scrollWidth > navHeight) {
    navbar.classList.add('fixed-nav');
  }else{
    navbar.classList.remove('fixed-nav');

  }

  if (scrollWidth > 500) {
    topBtn.classList.add('visivality')
  }else{
    topBtn.classList.remove('visivality')

  }
})

// === === === scroll === === 
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault();

    //clacuate the height
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    
    const position = element.offsetTop - navHeight;
    console.log(navHeight)





    window.scrollTo({
      left:0,
      top: position
    })
    
    if(element === element){
      navbar.classList.remove('fixed-nav');
    }
    else{
      navbar.classList.add('fixed-nav');

    }

    
    console.log(position)
  });
})
