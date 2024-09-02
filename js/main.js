$(document).ready(function () {
  $(".header-slider").owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 600,
    margin: 5,
  });

  $(".slider-next").click(function () {
    $(".header-slider").trigger("next.owl.carousel");
  });
  $(".slider-prev").click(function () {
    $(".header-slider").trigger("prev.owl.carousel");
  });

  $(".portfolio-content-slider").owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 600,
    stagePadding: 40,
    margin: 15,
  });
  
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
  var show = true;
  var countbox = ".animated-number";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".num").css("opacity", "1");
      $(".num").spincrement({
        thousandSeparator: "",
        duration: 3000,
      });

      show = false;
    }
  });
});
