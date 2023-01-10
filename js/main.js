var fullHeight = function() {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
    });

};
fullHeight();

var contentWayPoint = function() {
    var i = 0;
    $('.gnill-animate').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('gnill-animated') ) {
            
            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function(){

                $('body .gnill-animate.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn gnill-animated');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft gnill-animated');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight gnill-animated');
                        } else {
                            el.addClass('fadeInUp gnill-animated');
                        }
                        el.removeClass('item-animate');
                    },  k * 50, 'easeInOutExpo' );
                });
                
            }, 100);
            
        }

    } , { offset: '95%' } );
};
