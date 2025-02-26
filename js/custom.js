/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR CHARITY HOME            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1 revolutionSliderActiver
2 galleryMasonaryLayout
3 LightBox / Fancybox
4 Gallery Filters
5 accrodion
6 pieChart RoundCircle
7 progressBarConfig
8 teamCarosule
9 testiCarosule
10 clientsCarosule
11 owlCarosule
12 CounterNumberChanger
13 stickyHeader
14 contactFormValidation
15 event slider
16 Common CssJs
17 selectInput
18 datePicker
19 gMap
20 mobileMenu
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";
/*=====================*/
	/* 8 - LIGHT-BOX */
	/*=====================*/
	
	/*activity indicator functions*/
	var activityIndicatorOn = function(){
		$('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
	};
	var activityIndicatorOff = function(){
		$('#imagelightbox-loading').remove();
	};
	
	/*close button functions*/
	var closeButtonOn = function(instance){
		$('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo('body').on('click touchend', function(){ $(this).remove(); instance.quitImageLightbox(); return false; });
	};
	var closeButtonOff = function(){
		$('#imagelightbox-close').remove();
	};
	
	/*overlay*/
	var overlayOn = function(){$('<div id="imagelightbox-overlay"></div>').appendTo('body');};
	var overlayOff = function(){$('#imagelightbox-overlay').remove();};
	
	/*caption*/
	var captionOff = function(){$('#imagelightbox-caption').remove();};
	var captionOn = function(){
		var description = $('a[href="' + $('#imagelightbox').attr('src') + '"]').data('title');
		if(description.length)
			$('<div id="imagelightbox-caption">' + description +'</div>').appendTo('body');
	};

	/*arrows*/
    var arrowsOn = function(instance, selector) {
        var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"><i class="fa fa-chevron-left"></i></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"><i class="fa fa-chevron-right"></i></button>');
        $arrows.appendTo('body');
        $arrows.on('click touchend', function(e) {
            e.preventDefault();
            var $this = $(this);
            if( $this.hasClass('imagelightbox-arrow-left')) {
                instance.loadPreviousImage();
            } else {
                instance.loadNextImage();
            }
            return false;
        });
    };	
	var arrowsOff = function(){$('.imagelightbox-arrow').remove();};	
			
	var selectorG = '.lightbox';
	if($(selectorG).length){
		var instanceG = $(selectorG).imageLightbox({
			quitOnDocClick:	false,
			onStart:		function() {arrowsOn(instanceG, selectorG);overlayOn(); closeButtonOn(instanceG);},
			onEnd:			function() {arrowsOff();captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff();},
			onLoadStart: 	function() {captionOff(); activityIndicatorOn();},
			onLoadEnd:	 	function() {$('.imagelightbox-arrow').css('display', 'block');captionOn(); activityIndicatorOff();}
		});		
	}			


// 6 pieChart RoundCircle
function expertizeRoundCircle () {
	var rounderContainer = $('.piechart.style-one');
	if (rounderContainer.length) {
		rounderContainer.each(function () {
			var Self = $(this);
			var value = Self.data('value');
			var size = Self.parent().width();
			var color = Self.data('fg-color');

			Self.find('span').each(function () {
				var expertCount = $(this);
				expertCount.appear(function () {
					expertCount.countTo({
						from: 1,
						to: value*100,
						speed: 3000
					});
				});

			});
			Self.appear(function () {					
				Self.circleProgress({
					value: value,
					size: 142,
					thickness: 10,
					emptyFill: 'rgba(208,104,63,1)',
					animation: {
						duration: 3000
					},
					fill: {
						color: color
					}
				});
			});
		});
	};
}

function stickyHeader () {
  if ($('.stricky').length) {
    var strickyScrollPos = $('.stricky').next().offset().top;
    if($(window).scrollTop() > strickyScrollPos) {
      $('.stricky').removeClass('slideIn animated');
      $('.stricky').addClass('stricky-fixed slideInDown animated');
    }
    else if($(this).scrollTop() <= strickyScrollPos) {
      $('.stricky').removeClass('stricky-fixed slideInDown animated');
      $('.stricky').addClass('slideIn animated');
    }
  };
}

// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		expertizeRoundCircle();
	})(jQuery);
});

//
(function($) {
 "use strict"
 
 // Accordion Toggle Items
   var iconOpen = 'fa fa-minus',
        iconClose = 'fa fa-plus';

    $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {
       var $target = $(e.target);
         $target.siblings('.accordion-heading').find('em').toggleClass(iconOpen + ' ' + iconClose);
         if(e.type == 'show') {
           jQuery('#accordion2 em.icon-fixed-width').removeClass(iconOpen);
           jQuery('#accordion2 em.icon-fixed-width').addClass(iconClose);
           jQuery('#accordion2 .accordion-toggle').removeClass('active');
           jQuery('#accordion2 .accordion-body.collapse').removeClass('in');
           $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
           $target.prev('.accordion-group').find('.accordion-body.collapse').addClass('in');            
           $target.siblings('.accordion-heading').find('em').addClass('fa-minus');
           $target.siblings('.accordion-heading').find('em').removeClass('fa-plus');
         }
             
         if(e.type == 'hide') {
           jQuery('#accordion2 em.icon-fixed-width').removeClass(iconOpen);
           jQuery('#accordion2 em.icon-fixed-width').addClass(iconClose);
           jQuery('#accordion2 .accordion-toggle').removeClass('active');
           jQuery('#accordion2 .accordion-body.collapse').removeClass('in');
           $(this).find('.accordion-toggle').not($target).removeClass('active');
           $target.siblings('.accordion-heading').find('em').addClass('fa-plus');
           $target.siblings('.accordion-heading').find('em').removeClass('fa-minus');
         }
   }); 
})(jQuery);

/* Numbers Speed code*/

 $('.static-section ul li h2').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 20000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
});


/* Add New Code*/

// $('.home2 ul li h2').each(function () {
//     var element = $(this);
//     var section = element.closest('.home2');
    
//     section.on('click', function () {
//       element.prop('Counter', 0).animate({
//         Counter: element.text()
//       }, {
//         duration: 20000,
//         easing: 'swing',
//         step: function (now) {
//           element.text(Math.ceil(now));
//         }
//       });
      
     
//       section.off('click');
//     });
//   });
  


  


	 
 $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 50000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
}); 
$(window).scroll(function() {
        if ($(this).scrollTop() > 120){  
        $('#main-navigation-wrapper').removeClass('slideIn animated');
          $('#main-navigation-wrapper').addClass("sticky_header slideInDown animated");
        }
        else{
        $('#main-navigation-wrapper ').removeClass('sticky_header slideInDown animated');
           $('#main-navigation-wrapper ').addClass('slideIn animated');
        }
});
 $(document).ready(function(){
        $(".mob_drop_arrow").click(function(){
          $(this).parent().find(".submenu").toggleClass("show_sub_menu")
        $(this).parent().find(".nav_drop_ar").toggleClass("show")
        $(this).parent().find(".mob_drop_arrow").toggleClass("active")
        })
})
function customTabSingleService () {
    if ($('.tabmenu-box').length) {
        var tabWrap = $('.tab-content-box');
        var tabClicker = $('.tabmenu-box ul li');
        
        tabWrap.children('div').hide();
        tabWrap.children('div').eq(0).show();
        tabClicker.on('click', function() {
            var tabName = $(this).data('tab-name');
            tabClicker.removeClass('active');
            $(this).addClass('active');
            var id = '#'+ tabName;
            tabWrap.children('div').not(id).hide();
            tabWrap.children('div'+id).fadeIn('500');
            return false;
        });        
    }
}

// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
     
        customTabSingleService ();
	})(jQuery);
});

// Home6 Header Sidebar
function openSideNav() {
  document.getElementById("headerSidebar").style.padding = "0 20px 60px 35px";
  document.getElementById("headerSidebar").style.right = "0";
}
function closeSideNav() {
  document.getElementById("headerSidebar").style.right = "-420px";
  document.getElementById("headerSidebar").style.padding = "0";
}

// Home7 Services
jQuery(document).ready(function(){
          "use strict";
          jQuery(".serviceGrid").slick({
            slidesToShow: 4,
            autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            slidesToScroll: 1,
            draggable: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1
                }
            }]
          });
        });
// Home7 Clients
jQuery(document).ready(function(){
          "use strict";
          jQuery(".clientGrid").slick({
            slidesToShow: 5,
			autoplay: true,
			dots: true,
			arrows: false,
			autoplaySpeed: 3000,
			speed: 2000,
            slidesToScroll: 3,
            draggable: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint: 981,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1
                }
            }]
          });
        });

if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };

"use strict"; // Start of use strict

function bootstrapAnimatedLayer() {

    /* Demo Scripts for Bootstrap Carousel and Animate.css article
     * on SitePoint by Maria Antonietta Perna
     */

    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('#minimal-bootstrap-carousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel({
        interval: 7000
    });

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');

    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function(e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
}

function clientCarousel() {
    if ($('.client-carousel').length) {
        $('.client-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoWidth: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 2,
                    autoWidth: false
                },
                600: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 6,
                    autoWidth: false
                }
            }
        });
    };
}

function thmProjectFilter() {
    if ($('.mixit-gallery').length) {
        $('.mixit-gallery').mixItUp();
    };
}

function thmBarChart() {
    if ($('#thm-bar-chart').length) {
        var ctx = $("#thm-bar-chart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Company dataset",
                    backgroundColor: "rgba(248,248,248,0.8)",
                    borderColor: "rgba(218,218,218,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(59,65,94,0.5)",
                    hoverBorderColor: "rgba(218,218,218,1)",
                    data: [55, 65, 90, 85, 75, 95, 98],
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    };
}

function doughnutChartBox() {
    if ($('#doughnut-chartBox').length) {
        var ctx = $("#doughnut-chartBox");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "65%",
                    "13%",
                    "22%"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#CEC2AB",
                        "#8D6DC4",
                        "#F79468"
                    ],
                    hoverBackgroundColor: [
                        "#3B415E",
                        "#3B415E",
                        "#3B415E"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}

function testiCarousel() {
    if ($('.testi-carousel').length) {
        $('.testi-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoWidth: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    };
}

//Drop downs
jQuery('ul i.fa').on('click', function() {
	jQuery(this).toggleClass('DDopen');
	jQuery(this).closest('ul').find('ul').removeClass('opened');
	jQuery(this).parent().find('> ul').addClass('opened');
	jQuery(this).closest('ul').find('ul').not('.opened').slideUp(350);
	jQuery(this).parent().find('> ul').slideToggle(350);
	jQuery(this).closest('ul').find('i.fa').not(this).removeClass('DDopen');
});

// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        bootstrapAnimatedLayer();
        clientCarousel();
        thmProjectFilter();
        thmBarChart();
        doughnutChartBox();
        testiCarousel();
        // thmCounter();
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {

    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {

    })(jQuery);
});

$(document).ready(function() {
   $('#searchedPart').keyup(function() {
       if($('#searchedPart').val()) {
         $('.fancybox').css('display','none');
       }
   });
});