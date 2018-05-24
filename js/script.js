(function ($) {
    $(document).ready(function () {
        $("header").sticky({
            topSpacing: -20,
            className: "stickied"
        }).on('sticky-start', function () {
            $("h3").addClass("stickied");
        }).on('sticky-end', function () {
            $("h3").removeClass("stickied");
        });
    });
})(jQuery);