$(document).ready(function () {
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {


            event.preventDefault();


            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                window.location.hash = hash;
            });
        }
    });
});

$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});