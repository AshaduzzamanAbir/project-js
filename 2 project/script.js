const form = document.querySelector('form');


form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  const message = document.querySelector('#message');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a Valid Height is ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a Valid Height is ${weight}`;
  }else{
    const bmi = (weight / ((height * height )/ 10000)).toFixed(2);
    result.innerHTML = `<span>BMI point is ${bmi}</span>`;

    if(bmi < 18.6){
      message.innerHTML = `<span>${bmi} is Under Weight.</span>`
      message.style.color = 'red';
    }else if(bmi > 18.7 && bmi < 24.8){
      message.innerHTML = `<span>${bmi} is Normal.</span>`
      message.style.color = 'green';
  }else if(bmi > 24.9){
    message.innerHTML = `<span>${bmi} is Over Weight.</span>`
    message.style.color = 'blue';
  }
}

})
