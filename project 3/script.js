const clock = document.querySelector('#clock');


setInterval(() => {
  var date = new Date()
  var time = date.toLocaleTimeString()
  clock.innerHTML = time;
}, 1000);


// city hospital ,shonkor ,lal matiya
