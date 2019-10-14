'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function () {
  var browserSlider = $('.browser-slider');
  $('.browser-slider').slick({
    arrows: false
  });

  $('.feature-descriptions .selector').on('click', function (e) {
    if ($(this).parent().hasClass('is-portal')) {
      browserSlider[0].slick.slickGoTo(parseInt($(this).index()));
    }

    $('.feature-descriptions .selector').not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});