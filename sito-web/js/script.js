$(document).ready(function(){
    $.fn.isInViewport = function() {
        var elementLeft = $(this).offset().left
        var elementRight = elementLeft + $(this).outerWidth()
    
        var viewportLeft = $(window).scrollLeft()
        var viewportRight = viewportLeft + $(window).width()
    
        return elementRight > viewportLeft && elementLeft < viewportRight
    }

    if ($(window).width() <= 679) {
        $(".politician").on('scroll', function(){
            $(".politician").each(function() {
                if ($(this).isInViewport()) {
                    $(this).addClass("zoom")
                } else {
                    $(this).removeClass("zoom")
                }
            })
        })
    }
})