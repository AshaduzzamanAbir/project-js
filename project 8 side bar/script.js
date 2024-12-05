const bar = document.querySelector('#show-side-menu');

bar.addEventListener('click', function(){
  document.querySelector('.side-bar').classList.toggle('toggle');
})


const accountBar = document.querySelector('#account-img');

accountBar.addEventListener('click', function(){
  document.querySelector('.account').classList.toggle('show');
})

//using qustion button
// const qustionBtn = document.querySelectorAll('.qustion-btn');

// qustionBtn.forEach(function(btn) {
//   console.log(btn)
//   btn.addEventListener('click', function(e){
//     const qustion = e.currentTarget.parentElement.parentElement;
//     qustion.classList.toggle('show-text')

//     if(qustion.classList.contains('show-text')){
//       qustion.querySelector('.plus-icon').style.display = 'none';
//       qustion.querySelector('.minus-icon').style.display = 'block';
//     }else{
//       qustion.querySelector('.plus-icon').style.display = 'block';
//       qustion.querySelector('.minus-icon').style.display = 'none';
//     }

    
//   });
// })


// using article 

const qustions = document.querySelectorAll('.qustion');
qustions.forEach(function(qustion){
  // console.log(qustion)
  const btn = qustion.querySelector('.qustion-btn')
  // console.log(btn)
  btn.addEventListener('click', function () {
    qustions.forEach(function (item) {
      // console.log(item)
      if(item !== qustion){
        item.classList.remove('show-text')
      }


    })

    // + - button add
    if(qustion.classList.contains('show-text')){
      qustion.querySelector('.plus-icon').style.display = 'block';
      qustion.querySelector('.minus-icon').style.display = 'none';
    }else{
      qustion.querySelector('.plus-icon').style.display = 'none';
      qustion.querySelector('.minus-icon').style.display = 'block';
    }


    qustion.classList.toggle('show-text')

  })
})