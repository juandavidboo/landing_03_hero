// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  //gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  
  // wait until external stylesheets, links, images, and other external assets are loaded in the window
  // loading content on viewport
  window.addEventListener("load", function(){

    
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      dots: true,
      nav:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          768:{
              items:2
          },
          1200:{
              items:3,
              loop:false,
              
          },
          1400:{
              items:4,
              loop:false,
              
          }
        }
    })
    




  }, false);
  
});