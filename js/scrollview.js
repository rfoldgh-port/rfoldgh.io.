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
var inView3 = false;
var inView4 = false;

function animateLeft(element, duration, distance){
  let offset;
  let delay;
  if(duration){
    delay = duration;
  } else {
    delay = 800;
  }
  if(distance){
    offset = distance;
  } else {
   offset = 200;
  }

    $(element).animate({
      opacity: 1,
      left:`+=${offset}px`,
    }, delay);

    }


function animateRight(element, duration, distance){
  let offset;
  let delay;

  if(duration){
    delay = duration;
  } else {
    delay = 800;
  }
  if(distance){
    offset = distance;
  } else {
    offset = 200;
  }

    $(element).animate({
      opacity: 1,
      right:`+=${offset}px`,
    }, delay);


}




onViewport("#ski-lift-app-desktop-id","active", 750, function() {
  if(!inView1){
   animateLeft(".ski-lift-app-desktop-image");
   animateLeft("#ski-lift-software", 3000,150);

 }
 inView1 = true;
});

onViewport("#lego-builder-app-desktop-id","active", 750, function() {
  if(!inView2){
   animateRight("#lego-builder-app-desktop-id");
   animateRight("#lego-builder-software",3000,100);

 }
 inView2 = true;
});

onViewport("#fortessa-app-desktop-id","active", 750, function() {
  if(!inView3){
   animateLeft("#fortessa-app-desktop-id");
   animateLeft("#fortessa-software", 3000,50);
 }
 inView3 = true;
});

onViewport("#pestman-app-desktop-id","active", 750, function() {
  if(!inView4){
   animateRight("#pestman-app-desktop-id");
   animateRight("#pestman-software",3000,50);
 }
 inView4 = true;
});
