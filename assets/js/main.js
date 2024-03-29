(function ($) {
	"use strict";
/*--document ready functions--*/
    jQuery(document).ready(function($){


	//typed activate
    $('.header-inner h6').typed({
        strings: ["新闻记者", "数据新闻前端", "热爱发现与创造"],
        loop: true,
        startDelay: 1000,
        backDelay: 1000,
        typeSpeed: 30,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });

	/*-- circle progress activate --*/
		CircleProg('.25','#00B9E4',$('#circle-1'),'1');
		CircleProg('.50','#DF457E',$('#circle-2'),'2');
		CircleProg('.75','#2FD4BE',$('#circle-3'),'3');
		CircleProg('1','#F28055',$('#circle-4'),'4');


	/*--- function for Circle progreass var activation ---*/
		function CircleProg(val,color,selector,txt){
			selector.append('<span>'+txt+' </span>');
			selector.circleProgress({
				value: val,
				size: 150,
				fill: {
				  color: color
				},
				 thickness:10,
				 lineCap:'round',
				 emptyFill:"#ddd"
			  });
		}

		/*---- portfolio masonay activation with image load  ------*/
            var Container =$('.container');
                Container.imagesLoaded( function() {
                    var festivarMasonry = $('.portolio-masonary').isotope({
                          layoutMode: 'fitRows',
                          itemSelector: '.grid-size'
                        });
                    $(document).on('click','.porfolio-menu li', function() {
                      var filterValue = $(this).attr('data-filter');
                      festivarMasonry.isotope({ filter: filterValue });
                    });
										$('#try11').click()
            });
        /*---- portfolio menu active  ------*/
        var portfolioMenu = '.porfolio-menu li';
        $(document).on('click',portfolioMenu,function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

		 /* counter section activation  */
             var counternumber = $('.counter-number');
                counternumber.counterUp({
                  delay: 20,
                  time: 5000
                });

		/*--magnific popup Image Activation--*/
        var imgPopUp =$('.image-popup')
            imgPopUp.magnificPopup({

              gallery: {
                enabled: true
              },
              image: {
                titleSrc: 'title'
              },
                type: 'image'

        });

		/*--testimonial carousel activate--*/
        var testimonial = $('#testimonial-slider');
            testimonial.owlCarousel({
            loop:true,
            dots:true,
            nav:false,
            center:true,
            autoplay:true,
            responsive : {
              0 : {
                  items: 1
              },
              768 : {
                  items: 2
              },
              960 : {
                  items: 3
              },
              1200 : {
                  items: 3
              },
              1920 : {
                  items: 3
              }
            }
        });
		/* smoth scroll*/
		 $('#main-menu li a').on('click', function(event) {
			 event.preventDefault();
			 var anchor = $(this).attr('href');
			  var top = $(anchor).offset().top;
			     $('html, body').animate({
						scrollTop: $(anchor).offset().top
					}, 1000);
		  });
        /*bottom to top*/
        $(document).on('click','.go-top',function(){
           $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        /*--slick Nav Responsive Navbar activation--*/
          var SlicMenu = $('#main-menu');
         SlicMenu.slicknav();
		/*--- scroll spy activate --*/
			new ScrollSpy('#main-menu', {
				nav: '#main-menu > li a',
				className: 'active'
			});
    });

/*--window Scroll functions--*/
    $(window).on('scroll', function () {
      /*--show and hide scroll to top --*/
         var ScrollTop = $('.go-top');
        if ($(window).scrollTop() > 1000) {
                ScrollTop.show(1000);
        } else {
                ScrollTop.fadeOut(100);
       }
        /*--sticky menu activation--*/
            var mainMenuTop = $('.nav-area');
            if ($(window).scrollTop() > 300) {
                mainMenuTop.addClass('nav-fixed');
            } else {
                mainMenuTop.removeClass('nav-fixed');
            }
        /*--sticky Mobile menu activation--*/
            var mobileMenuTop = $('.slicknav_menu');
            if ($(window).scrollTop() > 300) {
                mobileMenuTop.addClass('nav-fixed');
            } else {
                mobileMenuTop.removeClass('nav-fixed');
            }


    });

/*--window load functions--*/
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

    });

}(jQuery));
