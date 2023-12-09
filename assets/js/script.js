$(document).ready(function () {
  // Eadc Comment

  $(".counter").each(function () {
    var e = $(this);
    var s = e.attr("data-count");
    $({
      countNum: 0,
    }).animate(
      {
        countNum: s,
      },
      {
        duration: 3e3,
        easing: "linear",
        step: function () {
          e.text(Math.floor(this.countNum));
        },
        complete: function () {
          e.text(this.countNum);
        },
      }
    );
  });

  // Eadc Panel

  $("#hovr_tab .nav-link").hover(function (t) {
    var e = $(this).attr("data-target");
    $("#hovr_tabContent .tab-pane, #hovr_tab .nav-link").removeClass("active");
    $(e).addClass("active");
    $(this).addClass("active");
  });

  // Eadc Features

  if ($(window).width() <= 992) {
    $(".edu_featrs_lst,.edu_procs_lst").slick({
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 2e3,
      infinite: true,
      loop: true,
      slidesToShow: 2,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // Eadc Video

  $(".watch_vid_popup").on("click", function () {
    $("#w_vid_mdl").modal("show");
  });
  $("#w_vid_mdl .close").on("click", function () {
    $("#w_vid_mdl").modal("hide");
  });

  // Eadc Adv Tech

  $(".edu_advnctchnlgs_lst").slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2e3,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    pauseOnHover: true,
  });

  // Eadc Portfolio

  $(".comn_port_sldr").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    centerMode: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "400px",
    margin: 10,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          centerPadding: "350px",
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  });
});
