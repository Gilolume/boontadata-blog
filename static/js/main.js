//Gestion couleur de la nav-bar
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        //Check si pas en mode portable
        if ($("#myNavBar").is(":visible") == true) {
            if(scroll_pos > $(".intro-header").height() - $(".navbar-custom").height()) {
                $(".navbar-custom").css('background-color', '#3f79c4');
            } else {
                $(".navbar-custom").css('background-color', '');
            }
        }
    });
});