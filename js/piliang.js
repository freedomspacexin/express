$(function(){

	$(".trbian:even").css("backgroundColor","#fff"); 
	$(".trbian:odd").css("backgroundColor","#fcfcfc"); 


	$('.biantu1,.bianbian,.bainbainbaibn,.zhucebian,.jizhuwo').click(function(){
		if ($(this).attr('src')=='img/2_dui.png') {
			$(this).attr('src','img/2_budui.png')
		}else {
			$(this).attr('src','img/2_dui.png');
		}
		
	});

	
})