var secondButton = document.querySelector('.list__second-button-text');
var secondButtonShow = document.querySelector('.second-button-show');
var secondText = document.querySelector('.second-arrow');
var secondList = document.querySelector('.second-list-part');

secondButton.addEventListener('click', function () {
  if (secondList.classList.contains('second-list_hidden')) {
    secondList.classList.remove('second-list_hidden');
    secondText.textContent = 'Скрыть';
    secondButtonShow.classList.add('second-button-show_rotate');
  } else {
    secondList.classList.add('second-list_hidden');
    secondText.textContent = 'Показать все';
    secondButtonShow.classList.remove('second-button-show_rotate');
  }
});

secondText.addEventListener('click', function () {

  if (secondList.classList.contains('second-list_hidden')) {
    secondList.classList.remove('second-list_hidden');
    secondText.textContent = 'Скрыть';
    secondButtonShow.classList.add('second-button-show_rotate');
  } else {
    secondList.classList.add('second-list_hidden');
    secondText.textContent = 'Показать все';
    secondButtonShow.classList.remove('second-button-show_rotate');
  }

});
