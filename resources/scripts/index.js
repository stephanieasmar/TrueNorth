$('.menu-toggle').click(function() {

    $('ul').toggleClass('opening');
    $(this).toggleClass('open');
  
  })
  

var top1 = $('#image').offset().top;
var top2 = $('#text').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#nav-change').css('background-color', '##054347');
  }
});