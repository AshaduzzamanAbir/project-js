
const months = [
  "Jan", "Feb", "March", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"
];
const weekdays = ["Sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// Create Future Date
let futureDate = new Date(2024, 2 , 3, 6, 25, 0);

// find current date 
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minuts = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Givwaway Ends on ${weekday}, ${date} ${month} ${year}  ${hours}:${minuts}AM `;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const difference = futureTime - today;

  // 1sec = 1000
  // 1min = 60s
  // 1hour = 60min
  // 1day = 24hr

  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecound =  1000;

  // calculate all thos values
  let days = difference / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((difference % oneDay) / oneHour);
  let minutes = Math.floor((difference % oneHour) / oneMinute);
  let seconds = Math.floor((difference % oneMinute) / oneSecound);

  // set values in array
  const values = [days, hours , minutes, seconds];
  // if item < 10 set "0"
  function formating(item){
    if(item < 10){
      return item = `0${item}`
    }else{
      return item;
    }
  }


  items.forEach(function (item, index) {
    item.innerHTML = formating(values[index]);
  });
  // if different value is < 0 
  if(difference < 0 ){
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expected"> Sorry, this giveway has expeird </h4>`;
  }
  
}

let countDown = setInterval(getRemainingTime, 1000);