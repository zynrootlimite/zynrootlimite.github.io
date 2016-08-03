$(function(){
	$('.Tanabata_list_contarir_h span').on('click',function(){
		$(this).addClass('Activ').siblings().removeClass('Activ');
		var flag=$(this).attr('data-index');
		if(flag==1){
			$('.Tanabata_list_contarir_C1').show();
			$('.Tanabata_list_contarir_C2').hide();
		}else if(flag==2){
			$('.Tanabata_list_contarir_C1').hide();
			$('.Tanabata_list_contarir_C2').show();
		}
	})
	$('.dowebok').vTicker({
		showItems: 5,
		pause: 3000
	});

	function flappr(){
		$('.flip-container .flipper').on('click',function(){
		$(this).addClass('hover');
		$(this).parents('.color_full').find('.flipper').off();
	})
	}
	// $('#btn').on('click',function(){
	// 	$('.flip-container .flipper').removeClass('hover').on();
	// 	flappr();
	// })
	flappr();
})