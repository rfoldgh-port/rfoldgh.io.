function onViewport(el, elClass, offset, callback) {
  /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
  var didScroll = false;
  var this_top;
  var height;
  var top;

  if(!offset) { var offset = 0; }

  $(window).scroll(function() {
      didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();

      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();

        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);

          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

var inView1 = false;
var inView2 = false;

function animateLeft(element){
  if(!inView1){
    $(element).animate({
      opacity: 1,
      left:"+=200px",
    }, 800);
    inView1 = true;
    }
}

function animateRight(element){
  if(!inView2){
    $(element).animate({
      opacity: 1,
      right:"+=200px",
    }, 800);
    inView2 = true;
  }
}




onViewport("#portfolio", function() {
   animateLeft("#ski-lift-app-desktop-id");
});

onViewport("#lego-builder-app-desktop-id", function() {
   animateRight("#lego-builder-app-desktop-id");
});
