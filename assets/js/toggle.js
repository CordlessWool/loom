/**
 
 Scan document for ids beginning with toggle and add class hide to the element have the same id
 
 */


(function($){
	
	const regex = /toggle-([\w-_]*)/;
	
	const buttons = $('[id^="toggle-"]');
	for(var button of buttons){
		$(button).on("click", function () {
			console.log($(this).attr('id'));
			var match = regex.exec($(this).attr('id'));
			console.log(match);
			if(match != null) {
				var id = match[1];
				console.log(id);
				$('#' + id).toggleClass('hide');
			}
		})
	}
	
})(window.jQuery);