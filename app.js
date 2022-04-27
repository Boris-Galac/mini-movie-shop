//// stars

let stars = document.querySelectorAll('.star');

stars.forEach((star, ind, arr) => {
  star.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
  });
});
//// buy btn

let buyBtn = document.querySelectorAll('.movie-watch-btn');
let movies = document.querySelectorAll('.movie');
let undoBtns = document.querySelectorAll('.close');
let spentMoney = document.querySelector('.spent');

let spentSum = 0;

buyBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.innerText = 'Bought';
    btn.disabled = true;
    btn.classList.add('disabled-btn');
    let movie = e.currentTarget.closest('.movie');
    movie.classList.add('disabled-movie');
    let close = movie.querySelector('.close');
    close.style = `
      display: block;
    `;
    ///// spent money
    let price = movie.querySelector('.movie-price').innerText;
    price = Number(price.slice('1'));
    console.log(price);
    let total = (spentSum += price);
    spentMoney.innerText = `$${total}`;
  });
});

//// undo and spent money

undoBtns.forEach((undo) => {
  undo.addEventListener('click', (e) => {
    let parent = undo.closest('.movie');
    let movieBtn = e.target.parentElement.querySelector('.movie-watch-btn');
    parent.classList.remove('disabled-movie');
    e.target.style = `
      display: none;
    `;
    let movie = e.currentTarget.closest('.movie');
    movieBtn.classList.remove('disabled-btn');
    movieBtn.disabled = false;
    movieBtn.innerText = 'Buy a movie';
    let price = movie.querySelector('.movie-price').innerText;
    price = Number(price.slice('1'));
    let total = (spentSum -= price);
    spentMoney.innerText = `$${total}`;
  });
});
