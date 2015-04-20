/*
 * author : Lei Wang : L.WANG@ntu.edu.sg / lwang019@e.ntu.edu.sg
 * publish time: 17/04/2015
 */


(function($){
    $.fn.flash = function(option){
        var defaults = {
        delay: 5000,
		interval: 1000
        };
		
		var debug = True;
		if (debug === True){
			console.log('defaults:', defaults);
		}
		var elements = this;
        var option = $.extend({}, defaults, option);
		var timmer = setTimeout
			
		console.log('option:', option);
		
    function  fadein(curr){
		if (curr >= elements.length){
			curr = 0;
		}
		object = $(elements[curr]).css('-webkit-animation', 
									   'fadein 2s linear 1 normal forwards')
								  .css('display', '');

		// call fade out
        timmer(
			function(){
				fadeout(curr, object);
			}, option.delay);
    } 
    
    function fadeout(curr, object){
		object.css('-webkit-animation', 'fadeout 1s linear 1 normal forwards');
		
		timmer(function(){
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