(function($){
    $.fn.flash = function(option){
        var defaults = {
        delay: 5000,
		interval: 1000
        };
		
		console.log('defaults:', defaults);
		
		var elements = this;
        var option = $.extend(defaults, option);
		
		console.log('option:', option);
		
    function  fadein(curr){
		if (curr >= elements.length){
			curr = 0;
		}
		object = $(elements[curr]).css('-webkit-animation', 'fadein 2s linear 1 normal forwards').css('display', '');

        setTimeout(function(){fadeout(curr, object);}, option.delay);
    } 
    
    function fadeout(curr, object){
		object.css('-webkit-animation', 'fadeout 1s linear 1 normal forwards');
		setTimeout(function(){
			object.css('display', 'none');
			/* trigger next picture*/
			fadein(curr + 1);
		}, option.interval);

    }
    
	fadein(0);

    return this;
    
    };
})(jQuery);

$(".section-middle > span").flash({delay: 2000});
$("li.slide").flash();