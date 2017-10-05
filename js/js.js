$(document).ready(function() {

	var $grid = $('.grid').packery();
	if($(window).width() > 640) {
        $grid.imagesLoaded( function() {
            $grid.packery({
                itemSelector: '.item',
                percentPosition: true
            });
        });
	}   else{
        $grid.packery('destroy');
    }
    
});
