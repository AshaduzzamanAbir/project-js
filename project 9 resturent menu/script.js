// items details..
const menu = [
  {
    id: 1,
    title: 'Burger',
    category: 'burger',
    price: 13.99,
    img: './images/dish-1.png',
    desc: `incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  in voluptate velit esse cillum dolore eu fugiat nulla pariatur..`,
  },
  {
    id: 2,
    title: 'chicken fry',
    category: 'fry',
    price: 18.99,
    img: './images/dish-2.png',
    desc: `cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..`,
  },
  {
    id: 3,
    title: 'Chicken',
    category: 'fry',
    price: 23.99,
    img: './images/dish-3.png',
    desc: `elit scelerisque. Lacus vel facilisis volutpat est velit egestas dui id ornare. Enim facilisis gravida neque convallis a cras semper auctor. Risus commodo viverrad.`,
  },
  {
    id: 4,
    title: 'pizza',
    category: 'pizza',
    price: 26.99,
    img: './images/dish-4.png',
    desc: `mmodo ullamcorper a lacus vestibulum sed. Habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus. Sollicitudin n`,
  },
  {
    id: 5,
    title: 'chocolate ice-cream',
    category: 'ice-cream',
    price: 19.99,
    img: './images/dish-5.png',
    desc: `gestas sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet massa vitae tortor condimentum lac Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis placeat quas id.`,
  },
  {
    id: 6,
    title: 'chicker-lagpiss',
    category: 'fry',
    price: 15.99,
    img: './images/dish-6.png',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis placeat quas id.`,
  },
  {
    id: 7,
    title: 'Noodles',
    category: 'noodles',
    price: 18.99,
    img: './images/home-img-1.png',
    desc: `Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Tempor commodo ullamcorper a lacus vestibulum sed. Habitant morbi tristique senectus  d.`,
  },
  {
    id: 8,
    title: 'Roasted Chicken',
    category: 'fry',
    price: 32.99,
    img: './images/home-img-2.png',
    desc: `d tempus urna. Neque sodales ut etiam sit amet nisl purus in mollis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. In eu mi bibendum neque.`,
  },
  {
    id: 9,
    title: 'Supreme pizza',
    category: 'pizza',
    price: 27.99,
    img: './images/menu-1.jpg',
    desc: `aretra vel turpis nunc eget. Lacus sed viverra tellus in hac habitasse platea. Molestie ac feugiat sed lectus vestibulum mattis. Etiam dignissim diam quis enim lobortis. Fringilla phasellus faucibus scelerisque eleifend. Mau`,
  },
  {
    id: 10,
    title: 'Extra-Bif-Burger',
    category: 'burger',
    price: 20.99,
    img: './images/menu-2.jpg',
    desc: `Quam nulla porttitor massa id neque aliquam. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Ut diam quam nulla porttitor. Sit amet nisl placeat quas id.`,
  },
  {
    id: 11,
    title: 'Cup Ice-Cream',
    category: 'ice-cream',
    price: 16.99,
    img: './images/menu-6.jpg',
    desc: `dio aenean sed. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Non Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis placeat quas id.`,
  },
  {
    id: 12,
    title: 'Stobarry Ice-Cream',
    category: 'ice-cream',
    price: 22.99,
    img: './images/menu-8.jpg',
    desc: `Sit amet tellus cras adipiscing enim. Maecenas volutpat blandit aliquam etiam. Non sodales neque sodales ut etiam sit amet nisl purus. placeat quas id.`,
  },
  {
    id: 13,
    title: 'three fruits juices',
    category: 'juice',
    price: 16.99,
    img: './images/menu-7.jpg',
    desc: `dio aenean sed. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Non Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis placeat quas id.`,
  },
  {
    id: 14,
    title: 'orange juice',
    category: 'juice',
    price: 22.99,
    img: './images/menu-9.jpg',
    desc: `Sit amet tellus cras adipiscing enim. Maecenas volutpat blandit aliquam etiam. Non sodales neque sodales ut etiam sit amet nisl purus. placeat quas id.`,
  },
]

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelector('.filter-btns');
// loding items
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
  displayMenuButtons();    
})
// filter items



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item){
    // console.log(item)

    return `<article class="menu-item">
    <img class="photo" src=${item.img} alt=${item.img}>
    <div class="item-info">
      <header>
        <h3>${item.title}</h3>
        <h3>${item.price}</h3>
      </header>
      <div class="item-text">
        ${item.desc}
      </div>
    </div>
  </article>`
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
}
// function for create button
function displayMenuButtons(){
  const categorys = menu.reduce(function(values,item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }

    return values;
  }, ['all']);
  
  const categoryBtn = categorys.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join('');
  
  filterBtns.innerHTML = categoryBtn;


  //filter items
  const filterBtn = filterBtns.querySelectorAll('.filter-btn');
  console.log(filterBtn);
  
  filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        // console.log(menuItem.category)
        if(menuItem.category === category){
          return menuItem;
        }
      })
      if(category === 'all'){
        displayMenuItems(menu);
        // console.log(menu)
      }else{
        displayMenuItems(menuCategory)
      }
      
  
    })
  })
}