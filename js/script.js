
AOS.init();


$(document).ready(function(){

  var $window = $(window);

// Parallax Backgrounds
// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641


let parallax = () => {

  $('section[data-type="background"]').each(function(){
    // disable parallax if on mobile browser...
    // will attempt to fix this later

    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {

      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // If used on mobiles - disable parallax

      if ($(window).width() <= 800){
        var coords = 0;
      } else {
        var coords = '50% '+ yPos + 'px';
      }


      // Move the background
      $bgobj.css({ backgroundPosition: coords });

    }); // end window scroll
  });

}

parallax();

// on window resize restart parallax function to check for mobiles
$( window ).resize(function() {

    parallax();

});





  // if menu is open and clicks on screen away from menu, hide menu
  $('html').click(function() {
      $('.nav-dropdown').hide();
    });

  $('#nav-toggle').on('click', function(){
    this.classList.toggle('active');
    $('nav ul').toggle();
  });


  // on sign up button submit - do something
  $('#btn-sign-up').click(function() {
    // check if there is text in email sign up
    if ($('input[type="email"]').val()!=""){
      $('input[type="email"]').val('');
      // show thank you text
      $('#submit-thank-you').fadeIn().delay(2000).fadeOut();;
    }
  });






});
