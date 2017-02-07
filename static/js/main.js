//Gestion couleur de la nav-bar
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        //Check si pas en mode portable
        if ($("#myNavBar").is(":visible") == true && $("#myNavBar").attr("class") != "navbar-collapse collapse in") {
            if(scroll_pos > $(".intro-header").height() - $(".navbar-custom").height()) {
                $(".navbar-custom").css('background-color', '#3f79c4');
            } else {
                $(".navbar-custom").css('background-color', '');
            }
        }
    });




    $(window).resize(function() {
        if ($("#myNavBar").css("display") == "none" && $(".navbar-custom").css('background-color', '#3f79c4')) {
            $(".navbar-custom").css('background-color', '');
        }
    });
});