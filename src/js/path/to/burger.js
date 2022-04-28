var burgerOpen = document.querySelector('.menu__burger-open');
var burgerClose = document.querySelector('.menu__burger-close');
var burger = document.querySelector('.burger');
var burgerPhone = document.querySelector('.burger-phone');

burgerOpen.addEventListener('click', function () {
  burger.classList.remove('burger_hidden');
  burgerPhone.classList.add('burger_hidden');
});

burgerClose.addEventListener('click', function () {
  burger.classList.add('burger_hidden');
  burgerPhone.classList.remove('burger_hidden');
});
