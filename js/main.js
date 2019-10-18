//Populate heavy items after DOM loaded
$(window).on("load", function() {
  $('#album1').attr('src', 'img/album/theo_fleck.jpg');
  $('#album2').attr('src', 'img/album/theo_fleck.jpg');
  $('#album3').attr('src', 'img/album/theo_fleck.jpg');
  $('#album4').attr('src', 'img/album/theo_fleck.jpg');
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
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 65
    }, 900);
  }
});