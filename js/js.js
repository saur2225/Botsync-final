var swiper = new Swiper(".logoSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



  var swiper = new Swiper(".caseStudy", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
  });




  $(document).ready(function () {
    $(".accordian-card").css("cursor", "pointer"); // Add pointer cursor to all accordian cards

    $(".accordian-card").click(function () {
        // Reset all cards by removing 'active', 'previous', 'next' classes and resetting margin
        $(".accordian-card").removeClass("active previous next").css("margin-bottom", "10px").find(".accordian-content").slideUp();

        // Add 'active' class to the clicked card and show its content
        $(this).addClass("active").find(".accordian-content").slideDown();

        $(this).prevAll(".accordian-card").addClass("previous").css({
            "margin-top": "0",
            "margin-bottom": "-20px"
        });

        // Add 'next' class to the next sibling
        $(this).next(".accordian-card").addClass("next");
    });
});


$(document).ready(function () {
    // Add a click event to all nav links
    $('.nav-link').on('click', function () {
      // Remove 'active' class from all links
      $('.nav-link').removeClass('active');
  
      // Add 'active' class to the clicked link
      $(this).addClass('active');
    });
  });
  