$(function(){
	
	
	$('.tian1').hover(function(){
		

		
		$('.ZF_hover_block').hide();
		$('.tian1').removeClass('tian1_active');
		$(this).addClass('tian1_active');

		$('.ZF_hover_block').eq($(this).index()-2).show();
		

		
//			$('.mor').hide();
//		$('.mor').removeClass('span_active');	
	});
	
	var index2=null;
	$('.shewei').click(function(){


		index2=$('.shewei').index(this);
		$('.mor').hide();
		$('.mor').removeClass('span_active');
//					alert(index2);
//		
		$('.mor').eq(index2).show().addClass('span_active');
		
		return index2;
	});
	
	var index3=null;
	$('.ZF_s').click(function(){
		index3=$('.ZF_s').index(this);
//		alert(index3)

		var ab=$('.tian1').eq(index3)
		ab.remove();
	});
	
	
//	大的div切换
	var index4=null;var index5=null;
	$('.dian_dian').click(function(){
		// alert($('.dian_dian').find('span').length)
		index4=$('.dian_dian').index(this);
//		$('.dian_dian').css({'background':'#f6f8f4','border':'1px solid #e5e5e5'});
//		$(this).css({'background':'#fff','borderRight':'none'})

		$('.dian_dian_span').css('color','#3c3c3c');
		$('.dian_dian_span').eq(index4).css('color','#f3550f')
		$('.dian_dian').removeClass('li_active1');
		$(this).addClass('li_active1')
		$('.ZF_hober_div').hide();     
		$('.ZF_hober_div').eq(index4).show();
		
		$('.gaisese').hide();$('.gaisese1').show();
//		alert(index5)
	    $('.gaisese1').eq(index4).hide();	
		$('.gaisese').eq(index4).show();

//		$(this).children('img').attr('src','img/gaise'+(index4+1)+'.png');
//		$(this).children('img').attr('src','img/guan_'+(index4)+'.png');
		return index4;
	});
//	$('.dian_dian').hover(function(){
//		
//	})
	
	
	$('.ti1').hover(function(){
		$('.ti1').css('background','#fff');
		$(this).css('background','#fafdf5');
		$('.chabiao_2_span1').find('img').attr('src','img/xiezi123.png');
		$('.chabiao_2_span1').find('img').eq($(this).index()-1).attr('src','img/xiezi321.png');
	});
	
	$('.chabiao_2_span2').find('img').click(function(){
		$(this).parent().parent().parent().remove();
	});
	
//	点击按钮 字体颜色错了 还有 对应图标颜色错了
	
	$('.guan_nr_right8_ul1').find('li').click(function(){
		$('.guan_nr_right8_ul1').find('li').removeClass('li_click');
		$(this).addClass('li_click');
	});



	var bian=null;
	//点击小图片时候 存储index();
	$('.guan_nr_right8_r2_td1').find('img').click(function(){
		bian=$('.guan_nr_right8_r2_td1').find('img').index(this);
			
		if ($(this).attr('src')=='img/2_budui.png') 
		{
			$(this).attr('src','img/2_dui.png');
		}else{
			$(this).attr('src','img/2_budui.png');
		};
		return bian;
	});

	// 全选
	
	$('.guan_nr_right8_r2_td2_bottom_span1').click(function(){

		$('.guan_nr_right8_r2_td1').find('img').attr('src','img/2_dui.png');
		$('.bianduibu').attr('src','img/2_dui.png');
	});

	$('.guan_nr_right8_r2_td2_bottom_span2').click(function(){
		
		if ($('.guan_nr_right8_r2_td1').find('img').eq(bian).attr('src')=='img/2_dui.png')
		 {
		 
		$('.guan_nr_right8_r2_td1').find('img').eq(bian).parent().parent().remove();
		 }else{
		 		alert('请勾选你要删除的选项')
		 }
	});

	$('.guan_nr_right8_r2_td2_bottom_span3').click(function(){

		if ($('.guan_nr_right8_r2_td1').find('img').eq(bian).attr('src')=='img/2_dui.png')
		 {
		 
		$('.guan_nr_right8_r2_td1').find('img').eq(bian).parent().next().children('.weidu_s').remove();
		 }else{
		 		alert('请勾选你要删除的选项')
		 };
		 $('.guan_nr_right8_r2_td1').find('img').eq(bian).attr('src','img/2_budui.png');
	})
	

})