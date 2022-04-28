var chatButton = document.querySelector('.part__chat');
var chatCheck = document.querySelector('.chat-review');
var closeChatButton = chatCheck.querySelector('.menu__burger-close');
var chatWhiteBackground = document.querySelector('.chat-white-background');

chatButton.addEventListener('click', function () {
  if (chatCheck.classList.contains('chat-review_hidden')) {
    chatCheck.classList.remove('chat-review_hidden');
    chatWhiteBackground.classList.remove('chat-review_hidden');
  }
});

closeChatButton.addEventListener('click', function () {
  chatCheck.classList.add('chat-review_hidden');
  chatWhiteBackground.classList.add('chat-review_hidden');
});
