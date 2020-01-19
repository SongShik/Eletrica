
/* ---- ERROS COMUNS ----
*  ---- EM CASOS EXTREMOS ---- 
*   chame a função do Jquerry e adicione o codigo dentro
*   --> jQuery(document).ready(function($) {}); <--  
*/

//----- TB-social JS padrão -----
//
$(document).ready(function() {
        $("#tb-social-btn").click(function() {
            if ($(this).hasClass('active')) {
                $(".tb-social-box a:not(#tb-social-btn)").animate({
                    opacity: 0,
                }, {
                    duration: 70,
                    easing: 'swing'
                });
                $(".tb-social-box a").css('top', '');
                $(".tb-social-box a").removeClass('active');
                setTimeout(function() {
                    $(".tb-social-box a:not(#tb-social-btn)").addClass('d-none')
                }, 500)
            } else {
                $(".tb-social-box a").animate({
                    opacity: 1,
                    top: 0,
                }, {
                    duration: 70,
                    easing: 'swing'
                });
                $(".tb-social-box a").removeClass('d-none');
                $(".tb-social-box a").addClass('active')
            }
        });
        if (Modernizr.touch != !0) {
            var toogle = 0;
            $(".tb-phone").click(function() {
                if (toogle == 0) {
                    $(".tb-social-modal.tel").fadeIn(500);
                    $(".tb-social-modal .tb-social-overlay").fadeIn(500);
                    toogle = 1
                } else {
                    $(".tb-social-modal.tel").fadeOut(500);
                    $(".tb-social-modal .tb-social-overlay").fadeOut(500);
                    toogle = 0
                }
            });
            $(".close-tb-social-modal.tel").click(function() {
                $(".tb-social-modal.tel").fadeOut(500);
                $(".tb-social-modal .tb-social-overlay").fadeOut(500);
                toogle = 0
            });
            $(".tb-social-modal .tb-social-overlay").click(function() {
                $(".tb-social-modal.tel").fadeOut(500);
                $(this).fadeOut(500);
                toogle = 0
            })
        } else {
            $(".tb-phone").attr('href', 'tel:551136820391')
        }
    });
    $(document).ready(function() {
        var t = {
            delay: 0,
            overlay: $(".fb-overlay"),
            widget: $(".fb-widget"),
            button: $(".tb-messenger")
        };
        setTimeout(function() {
            $("div.fb-livechat").fadeIn()
        }, 8 * t.delay), $(".ctrlq").on("click", function(e) {
            e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({
                bottom: 0,
                opacity: 0
            }, 2 * t.delay, function() {
                $(this).hide("slow"), t.button.show()
            })) : t.button.fadeOut("medium", function() {
                t.widget.stop().show().animate({
                    bottom: "30px",
                    opacity: 1
                }, 2 * t.delay), t.overlay.fadeIn(t.delay)
            })
        })
    });

//----- TB-social JS padrão -----


