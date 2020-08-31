jQuery(document).ready(function ($) {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".testimonials__slider").slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    centerMode: true,
    infinite: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });

  const button = document.getElementById("gamburger");

  if (button) {
    button.addEventListener("click", () => {
      let x = document.getElementById("responsivebar");
      if (
        x.classList.contains("responsive-navbar") &&
        !x.classList.contains("responsive")
      ) {
        x.className += " responsive";
      } else {
        x.className = "responsive-navbar";
      }
    });
  }
});
