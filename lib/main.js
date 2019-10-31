'use strict';

$(document).ready(function () {
  var browserSlider = $('.browser-slider');
  var activebandSlider = $('.activeband-slider');

  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $('.navbar-item').click(function () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0 && $(".navbar-burger").hasClass('is-active')) {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    }
  });

  $('.browser-slider').slick({
    arrows: false,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });

  var activebandSlider = $('.activeband-slider').slick({
    arrows: false,
    adaptiveHeight: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });

  $('.feature-descriptions .selector').on('click', function (e) {
    if ($(this).parent().hasClass('is-portal')) {
      browserSlider[0].slick.slickGoTo(parseInt($(this).index()));
      $('.feature-descriptions.is-portal .selector').not(this).removeClass('active');
    } else {
      activebandSlider[0].slick.slickGoTo(parseInt($(this).index()));
      $('.feature-descriptions.is-activeband .selector').not(this).removeClass('active');
    }

    $(this).toggleClass('active');
  });
});