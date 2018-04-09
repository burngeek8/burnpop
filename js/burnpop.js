$(document).ready(function(){
	console.log('ready');
	var flash = $('.burnimg img'), 
		derecha = 0,
		arriba = 0,
		src;
	if(flash.length > 0)
	{
		$("body").append(`<div class="burnpops"></div>`);					
	}
	for (var i = flash.length - 1; i >= 0; i--) {
		src = $('.burnimg img:nth-child('+(i+1)+')').attr('src');	
		$(".burnpops").append(`<div class="burnup">
									<div class="btn-close"><i class="burn-close"></i></div>
									<img src='${src}'>
								  </div>`);			
		//$('.burnup:nth-child('+(i+1)+')').addClass('active');
		console.log(src);
	}
	for (var i = flash.length - 1; i >= 0; i--) {
		arriba = arriba +  40;
        derecha = derecha + 100;
		css = {'right' : derecha,
		       'top' : arriba};
		$('.burnup:nth-child('+(i+1)+')').css(css);
	}
	$('.burnimg').remove();
	$('.btn-close').on('click', burnclose);
});
function burnclose(){
	$(this).parent().remove();
	var flash = $('.burnup');

	console.log('Probando cierre - quedan ' + flash.length);
	if(flash.length == 0){
		$('.burnpops').remove();
	}
}