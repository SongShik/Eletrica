/* 

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    TTTTTTT HH   HH IIIII NN   NN KK  KK BBBBB   EEEEEEE YY   YY  OOOOO  NN   NN DDDDD   
      TTT   HH   HH  III  NNN  NN KK KK  BB   B  EE      YY   YY OO   OO NNN  NN DD  DD  
      TTT   HHHHHHH  III  NN N NN KKKK   BBBBBB  EEEEE    YYYYY  OO   OO NN N NN DD   DD 
      TTT   HH   HH  III  NN  NNN KK KK  BB   BB EE        YYY   OO   OO NN  NNN DD   DD 
      TTT   HH   HH IIIII NN   NN KK  KK BBBBBB  EEEEEEE   YYY    OOOO0  NN   NN DDDDDD
      _    _   __   _               _             ___         _        ___   _  
     | \  |_  (_   |_  |\ |  \  /  / \  |   \  /   |   |\/|  |_  |\ |   |   / \ 
     |_/  |_  __)  |_  | \|   \/   \_/  |_   \/   _|_  |  |  |_  | \|   |   \_/ 

         w w w . t b d e s e n v o l v i m e n t o . c o m . b r

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

* @------------ TB Projects Generator ------------@

*

* Project name: NOME DO PROJETO - WWW.URLCLIENTE.COM.BR

* Year: 2018;

* Author:  ;

* TB Token code: @1536rdf7#%$@ˆ$#7;

*

* Todos os Direitos Reservados -   e NOME DO PROJETO

*

* 

* Dúvidas: suporte@tbdesenvolvimento.com.br

*/

jQuery(function($) {
    $(document).on('scroll', function() {
        /*EFEITO MENU DESCER SUAVE*/
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 250) {
            $('#sticktop').addClass('navbar-fixed-top')
        } else if (scrollPos < 48)/*MUDAR ESSE VALOR CONFORME TAMANHO DO MENU*/ {
            $('#sticktop').removeClass('navbar-fixed-top')
        }
    });
   
   // owl slider
        $('#principal-slider').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'slideInRight',
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:10000,
        navText : ['<span class="fas fa-chevron-left fa-3x"></span>',
                   '<span class="fas fa-chevron-right fa-3x"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('#fornecedores-slider').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        autoplay:true,
        stagePadding:50,
        navText : ['<span class="fas fa-chevron-left fa-3x mb-5" ></span>',
                   '<span class="fas fa-chevron-right fa-3x mb-5"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }


    })



/* tooltip produtos*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip({delay: {show: 300, hide: 300}});;
})

/* animações */
new WOW().init(); 

/* nicescroll */
$("body").niceScroll({
  cursorcolor:"#af5058",
  cursorwidth:"10px",
  background:"#6b070f",
  cursorborder:"1px solid #af5058",
  zindex: "1",
  autohidemode:true,

});



    $('#saiba-mais')
      .mouseover(function(){
        $('#saiba-mais').addClass('wow bounceIn infinite ');  
      })
      .mouseout(function(){
        $('#saiba-mais').removeClass('wow bounceIn infinite');  
      });


    /*EFEITO CLICK MENU DESCER SECTIONS*/
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top -100)
        }, 3250, 'easeInOutExpo');
        event.preventDefault()
    });
    /*ADICIONA ACTIVE NO MENU DA SEÇÃO ATIVA*/
    $(document).ready(function() {
        $('body').scrollspy({
            target: '#sticktop',
            offset: 51
        })
    });
    /*MENU MOBILE*/
    $(document).ready(function(){
        $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
        });
    });
    $(window).on('load', function(){
        var style = '';
        $(".mobile-inner-nav a").each(function( index ) {
            style += '.mobile-inner-nav a:nth-child('+ (index+1) +'):after {animation-delay:' +((index+1)/10)+'s} ';
        });
        $("head").append($('<style>'+style+'</style>'));
        $(".mobile-inner-nav a").click(function(){
            $(".mobile-inner-header-icon").click();
        });
    });
    /*END MENU MOBILE*/

    /*BACK TOP*/
    $(document).ready(function() {
        $("#back-top").hide();
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn()
                } else {
                    $('#back-top').fadeOut()
                }
            });
            $('#back-top a').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 2000);
                return !1
            })
        })
    });
    $(document).ready(function() {
        $(".page-scroll a").click(function() {
            $('.offsetWrap').removeClass('active')
        })
    });
    /* DATA FOOTER COPYRIGHT*/
    var currentYear = (new Date).getFullYear();
    $(document).ready(function() {
        $("#tb-copyright-year").text((new Date).getFullYear())
    });
});





