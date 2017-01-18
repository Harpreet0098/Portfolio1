/*********************Counts************************/
$(function() {
    
    //Cache reference to window and animation items
    var $animationElements = $('.skillsPercentage span');
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
            (elementTopPosition <= windowBottomPosition)) {
              //Function for counter 
            function count($this){
            var current = parseInt($this.html(), 10);
            $this.html(++current);
            if(current !== $this.data('count')){
            setTimeout(function(){count($this)}, 50);
            }
        }    
            
        $(".skillsPercentage span").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
       });
    }           
 });
}
   
    //Hooking scroll and handling resize event
    $window.on('scroll resize', checkIfInView);
    //Trigger as soon as DOM is ready
    $window.trigger('scroll',checkIfInView);
});
