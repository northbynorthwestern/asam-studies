$(document).ready(function() {

  var nextArrow = $('.arrow.next');
  var nextText = $('.arrow.next div.title');
  nextText.css('display', 'inline-block');

  var nextTextWidth = nextText.outerWidth();
  nextArrow.css('right', -(nextTextWidth) + 'px');

  nextArrow.hover(function() {
    nextArrow.toggleClass('active');
    if (nextArrow.hasClass('active')) {
      nextArrow.css('right', 0 + 'px');
    } else {
      nextArrow.css('right', -(nextTextWidth) + 'px');
    }
  });

  var previousArrow = $('.arrow.previous');
  var previousText = $('.arrow.previous div.title');
  previousText.css('display', 'inline-block');

  var previousTextWidth = previousText.outerWidth();
  previousArrow.css('left', -(previousTextWidth) + 'px');

  previousArrow.hover(function() {
    previousArrow.toggleClass('active');
    if (previousArrow.hasClass('active')) {
      previousArrow.css('left', 0 + 'px');
    } else {
      previousArrow.css('left', -(nextTextWidth) + 'px');
    }
  });

});
