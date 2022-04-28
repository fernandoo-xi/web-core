var firstButton = document.querySelector('.list__first-button-text');
var firstButtonShow = document.querySelector('.first-button-show');
var firstText = document.querySelector('.first-arrow');
var firstList = document.querySelector('.first-list-part');

firstButton.addEventListener('click', function () {
  if (firstList.classList.contains('first-list_hidden')) {
    firstList.classList.remove('first-list_hidden');
    firstText.textContent = 'Скрыть';
    firstButtonShow.classList.add('first-button-show_rotate');
  } else {
    firstList.classList.add('first-list_hidden');
    firstText.textContent = 'Показать все';
    firstButtonShow.classList.remove('first-button-show_rotate');
  }
});

firstText.addEventListener('click', function () {

  if (firstList.classList.contains('first-list_hidden')) {
    firstList.classList.remove('first-list_hidden');
    firstText.textContent = 'Скрыть';
    firstButtonShow.classList.add('first-button-show_rotate');
  } else {
    firstList.classList.add('first-list_hidden');
    firstText.textContent = 'Показать все';
    firstButtonShow.classList.remove('first-button-show_rotate');
  }

});
