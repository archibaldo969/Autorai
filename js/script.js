$(document).ready(function(){
    $('.slider').slick({
        speed: 800,
        slidesToShow: 1,
        dots: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                    breakpoint: 768,
                    settings: {
                      dots: true,
                      arrows: false
                }
            }
        ]
      });
      $('.slider__cars').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.svg"></button>',
      });
      
      window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger__active');
                menu.classList.toggle('menu_active');
            })
        })
    
    
    
    
    
        /* // Modal */
    
        $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });
    
        $('.button_mini').each(function(i) {
            $(this).on('click', function() {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });
    
        function validateForms(form){
            $(form).validate({
                rules: {
                    name: "required",
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: "Пожалуйста, введите своё имя",
                    phone: "Пожалуйста, введите свой номер телефона",
                    mark: "Пожалйста, введите свою марку машины",
                  }
            }); 
        };
    
        validateForms('#consultation-form');
        validateForms('#consultation form');
        validateForms('#order form');
    
    
        $('input[name=phone]').mask("+7 (999) 999-9999");
    
        // Smooth scroll and pageup
    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });

        $("a[href^='#']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
  
    });
});
