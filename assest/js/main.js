var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

function toggleHandler(toggle) {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $(".open").removeClass("oppenned");
    } else {
      this.classList.add("is-active");
      $(".open").addClass("oppenned");
    }
  });
}
$(".sub-menu li a").click(function (event) {
  $(".open").removeClass("oppenned");
  $(".c-hamburger").removeClass("is-active");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(".test-popup-link").magnificPopup({
  type: "iframe",
  iframe: {
    markup:
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      "</div>",

    patterns: {
      youtube: {
        index: "youtube.com/",
        id: "v=",
        src: "//www.youtube.com/embed/%id%?autoplay=1",
      },
      vimeo: {
        index: "vimeo.com/",
        id: "/",
        src: "//player.vimeo.com/video/%id%?autoplay=1",
      },
      gmaps: {
        index: "//maps.google.",
        src: "%id%&output=embed",
      },
    },

    srcAction: "iframe_src",
  },
});
