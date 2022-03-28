const hiddenMenu = document.querySelector('.menu-container');
const burgerIcon = document.querySelector('.fa-bars');

burgerIcon.addEventListener('click', function () {
  hiddenMenu.classList.toggle('show');
});
