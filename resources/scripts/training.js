$('.menu-toggle').click(function() {

    $('ul').toggleClass('opening');
    $(this).toggleClass('open');
  
  })
  
  $('nav li ul').hide().removeClass('dropdown');
  $('nav li').hover(
    function () {
      $('ul', this).stop().slideDown(50);
    },
    function () {
      $('ul', this).stop().slideUp(50);
    }
  );
