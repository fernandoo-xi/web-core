var callButton = document.querySelector('.part__call');
var callCheck = document.querySelector('.call-review');
var closeCallButton = callCheck.querySelector('.menu__burger-close');
var callWhiteBackground = document.querySelector('.call-white-background');

callButton.addEventListener('click', function () {
  if (callCheck.classList.contains('call-review_hidden')) {
    callCheck.classList.remove('call-review_hidden');
    callWhiteBackground.classList.remove('call-review_hidden');
  }
});

closeCallButton.addEventListener('click', function () {
    callCheck.classList.add('call-review_hidden');
    callWhiteBackground.classList.add('call-review_hidden');
});
