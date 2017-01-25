/*********************Counts************************/
$(function() {
    
    //############# In-view Detector################
    //Cache reference to window and animation items
    var $animationElements = $('.animation-element');
    var $window = $(window);
    
    //Scroll position detection
    function checkIfInView(){
        //window position
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);
        //element position
        $.each($animationElements, function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

        //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)){
                $element.addClass('in-view');
            }
            else{
                $element.removeClass('in-view');
            }
        });
    }
    //Hooking scroll and handling resize event
    $window.on('scroll resize', checkIfInView);
    //Trigger as soon as DOM is ready
    $window.trigger('scroll',checkIfInView);   

    //#################  Skills Section  #####################
    counter();
    //Calls counter function every 10 sec
    setInterval(counter,10000);
    // Function to increment 
    function counter(){
        //grabbing all the elements in an for each loop.
            $('.skillsPercentage span').each(function () {
                //we start from zero
                //prop is used to set properties for all elements.
            $(this).prop('Counter',0).animate({
                //calling an animation property for text
                Counter: $(this).text()
            }, {
                duration: 4000,//time in milliseconds
                easing: 'swing',//transition
                step: function (now) {
                    //set value before it is finally set
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

});
    
