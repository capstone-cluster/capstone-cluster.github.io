//Populate heavy items after DOM loaded
$(window).on("load", function() {
  $('#album1').attr('src', 'img/theo_fleck.jpg');
  $('#album2').attr('src', 'img/adam_dadey.jpg');
  $('#album3').attr('src', 'img/daniel_may.jpg');
  $('#album4').attr('src', 'img/sam_matylewicz.jpg');
});
//Shrink navbar on scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
// Add smooth scrolling on all links inside the navbar
$("nav a").on('click', function(event) {
  let sectionTo = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(sectionTo).offset().top - 65
  }, 900);
});
