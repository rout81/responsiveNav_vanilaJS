const burger = document.querySelector('#ham');
const nav = document.querySelector("ul");

burger.addEventListener('click', function() {
  nav.classList.toggle('activeul');
});

// //this is the first one but I think beginners can easily understand the upper one.
// const burger = document.querySelector('#ham');
// const nav = document.querySelector("ul");
// burger.addEventListener('click', () => {nav.classList.toggle('active');});