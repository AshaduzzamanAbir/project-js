const btns = document.querySelectorAll('#btns');
const value = document.querySelector('.value');
let count = 0;

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    if(e.currentTarget.classList.value == "decrease"){
      count--;
    }else if(e.currentTarget.classList.value == "increase"){
      count++;
    }else{
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "white";
    }
    if(count == 0) {
      value.style.color = "black";
    }

    value.textContent = count;
  })
})
