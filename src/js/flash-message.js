export default function(text) {
  let flashMessageContainer = $('.flash-message');
  let flashMessageId = new Date().getTime();
  let flashMessageItem;

  flashMessageContainer
    .append('<div class="flash-message__item fadeInDown animated" data-id="' + flashMessageId + '">\
      <p class="flash-message__p">' + text + '</p>\
      <span class="flash-message__close">&times;</span>\
      </div>');

  flashMessageItem = $('.flash-message__item[data-id="' + flashMessageId + '"]');

  flashMessageItem
    .find('.flash-message__close')
    .off('click.flashMessage')
    .on('click.flashMessage', function() {
      flashMessageItem.fadeOut();
    });

  setTimeout(function() {
    flashMessageItem.fadeOut();
  }, 6000);
}
