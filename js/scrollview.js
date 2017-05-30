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

// var inView1 = false;
// var inView2 = false;
// var inView3 = false;
// var inView4 = false;
//
// function animateLeft(element, duration, distance){
//   let offset;
//   let delay;
//   if(duration){
//     delay = duration;
//   } else {
//     delay = 800;
//   }
//   if(distance){
//     offset = distance;
//   } else {
//    offset = 200;
//   }
//
//     $(element).animate({
//       opacity: 1,
//       left:`+=${offset}px`,
//     }, delay);
//
//     }

//
// function animateRight(element, duration, distance){
//   let offset;
//   let delay;
//
//   if(duration){
//     delay = duration;
//   } else {
//     delay = 800;
//   }
//   if(distance){
//     offset = distance;
//   } else {
//     offset = 200;
//   }
//
//     $(element).animate({
//       opacity: 1,
//       right:`+=${offset}px`,
//     }, delay);
//
//
// }




onViewport("#ski-lift-app-desktop-id","active", 750, function() {
   $(".ski-lift-app-desktop-image").addClass('animate');
});

// onViewport(".lego-builder-desktop-image","active", 750, function() {
//   if(!inView2){
//    animateRight(".lego-builder-desktop-image");
//    animateRight("#lego-builder-software",2000,200);
//
//  }
//  inView2 = true;
// });
//
// onViewport(".fortessa-app-desktop-image","active", 750, function() {
//   if(!inView3){
//    animateLeft(".fortessa-app-desktop-image");
//    animateLeft("#fortessa-software", 2000,200);
//  }
//  inView3 = true;
// });
//
// onViewport(".pestman-desktop-image","active", 750, function() {
//   if(!inView4){
//    animateRight(".pestman-desktop-image");
//    animateRight("#pestman-software",2000,200);
//  }
//  inView4 = true;
// });
