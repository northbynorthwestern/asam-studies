$(document).ready(function() {

  var small = false;
  $(document).resize(function(){
    var width = $(window).width();
    if (parseInt(width) <= 400) {
      small = true;
    } else {
      small = false;
    }
  });

  var nextArrow = $('.arrow.next');
  var nextText = $('.arrow.next div.title');
  nextText.css('display', 'inline-block');

  var nextTextWidth = nextText.outerWidth();

  if (!small) {
    nextArrow.css('right', -(nextTextWidth) + 'px');
  }

  nextArrow.hover(function() {
    if (!small) {
      nextArrow.css('right', -(nextTextWidth) + 'px');
      nextArrow.toggleClass('active');
      if (nextArrow.hasClass('active')) {
        nextArrow.css('right', 0 + 'px');
      } else {
        nextArrow.css('right', -(nextTextWidth) + 'px');
      }
    }
  });

  var previousArrow = $('.arrow.previous');
  var previousText = $('.arrow.previous div.title');
  previousText.css('display', 'inline-block');

  var previousTextWidth = previousText.outerWidth();

  if (!small) {
    previousArrow.css('left', -(previousTextWidth) + 'px');
  }


  previousArrow.hover(function() {
    if (!small) {
      previousArrow.css('left', -(previousTextWidth) + 'px');
      previousText.css('display', 'inline-block');

      previousArrow.toggleClass('active');
      if (previousArrow.hasClass('active')) {
        previousArrow.css('left', 0 + 'px');
      } else {
        previousArrow.css('left', -(nextTextWidth) + 'px');
      }
    }
  });

  var hammer = new Hammer(document);
  hammer.on("swipeleft", function(ev) {
    goToNextStory(ev);
  });

  hammer.on("swiperight", function(ev) {
    goToPreviousStory(ev);
  });

  function goToNextStory(ev) {
    console.log('goToNextStory');
  }

  function goToPreviousStory(ev) {
    console.log('goToPreviousStory');
  }


});
