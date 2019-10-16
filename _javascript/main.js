document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

$(document).ready(function(){
  var browserSlider = $('.browser-slider');
  var activebandSlider = $('.activeband-slider');

  $('.browser-slider').slick({
    arrows: false
  });

  var activebandSlider = $('.activeband-slider').slick({
    arrows: false,
    adaptiveHeight: true
  });

  $('.feature-descriptions .selector').on('click', function(e) {
    if($(this).parent().hasClass('is-portal')){
      browserSlider[0].slick.slickGoTo(parseInt($(this).index()));
      $('.feature-descriptions.is-portal .selector').not(this).removeClass('active');
    } else {
      activebandSlider[0].slick.slickGoTo(parseInt($(this).index()));
      $('.feature-descriptions.is-activeband .selector').not(this).removeClass('active');
    }

    $(this).toggleClass('active');
  });


});