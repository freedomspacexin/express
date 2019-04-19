$(function(){
//	$('.li_one').hover(function(){
//		alert(1)
//						$('.sanjiao1').css('display','none');	
//				});

//alert($(window).height())

//		滚动条固定	
		var	oposition2=($(window).width()-450)/2+'px';
		var oposition2Top=($(window).height()-230)/2+'px';
		var oposition1=($(window).width()-1000)/2+1000+50;
		var oposition3=($(window).width()-660)/2+'px';
		var oposition3Top=($(window).height()-440)/2+'px';
		$('.dao').css({'position':'fixed','left':oposition1,'top':'280px'})
		
		
		//几个弹窗		
//		alert(oposition2)
		$('.baojia').css({'position':'fixed','left':oposition2,'top':oposition2Top})
		$('.dazhihe').css({'position':'fixed','left':oposition2,'top':oposition2Top})
		$('.dizhibig').css({'position':'fixed','left':oposition3,'top':oposition3Top})
		$('.shangtu').css({'position':'fixed','left':oposition3,'top':oposition3Top})
		$(window).resize(function(){
		var oposition1=($(window).width()-1000)/2+1000+50;
		var	oposition2=($(window).width()-450)/2+'px';
		var oposition2Top=($(window).height()-230)/2+'px';
		$('.dao').css({'position':'fixed','left':oposition1,'bottom':'280px'});
		$('.baojia').css({'left':oposition2,'bottom':oposition2Top});
		$('.dazhihe').css({'position':'fixed','left':oposition2,'top':oposition2Top})
		$('.dizhibig').css({'position':'fixed','left':oposition3,'top':oposition3Top})
	})
		
		
		
		//快递类型
		$('.duicuo').click(function(){
			$('.duicuo').attr('src','img/2_budui.png')
			$(this).attr('src','img/2_dui.png')
		})
		
		

				
	$('.nav_right').find('.li_1').hover(function(){
			$('.sanjiao1').css('display','none');	
				$('.li_one').hover(function(){
						$('.sanjiao1').css('display','none');	
					})

		$('.nav_right').find('.a_hover').removeClass('a_hover1');
			$('.nav_right').find('.a_hover').eq($(this).index()).addClass('a_hover1');
			
			
			$('.sanjiao').css('display','none');	
//			$('.sanjiao').eq($(this).index()-1).css('display','block');	
//			$('.nav_right').find('.xia_box').css('display','none');	
//			$('.nav_right').find('.xia_box').eq($(this).index()).css('display','block');	
			if($(this).index()==0){
//				alert(1)
			$('.sanjiao1').css('display','none');	
		}else{
			$('.sanjiao').eq($(this).index()-1).css('display','block');	
			$('.nav_right').find('.xia_box').css('display','none');	
			$('.nav_right').find('.xia_box').eq($(this).index()).css('display','block');	
		}
		
	},function(){
		$('.sanjiao').eq($(this).index()-1).css('display','none');	
		$('.nav_right').find('.xia_box').css('display','none');	
	});
	
	$('.dao').find('.dao_lihover').hover(function(){
		$('.dao').find('.img1').eq($(this).index()).attr('src','img/top'+($(this).index()+1)+'_hover.png')
	},function(){
		$('.dao').find('.img1').eq($(this).index()).attr('src','img/top'+($(this).index()+1)+'.png')
	});
	$('.jijiji').hover(function(){
			$(this).find('img').attr('src','img/top4_hover.png')
		},function(){
			$(this).find('img').attr('src','img/top4.png')
		})
	$(window).scroll(function(){
		$('.jijiji').click(function(){
			$('html,body').stop().animate({'scrollTop':'0'},2000)
		})
	});
	
	
		$('.laji').click(function(){
		$('.input1').val('')
		});
		
		
		
//		快件点击加样式


		$('.danjian_zhong2_top3').find('li').click(function(){
			$('.danjian_zhong2_top3').find('li').removeClass('ACTIVE')
			$(this).addClass('ACTIVE');
		})
	
	//点击+—
	var number=1;
	$('.jiayige').click(function(){
		
		$('.jiajiannr').html(++number);
		
	});
	$('.jianyige').click(function(){
		if(number==0)
		{
			return false
		}else{
			$('.jiajiannr').html(--number);
		}	
	});
	var number1=1000;
	$('.jiayige1').click(function(){
		
		$('.jiajiannr1').html(++number1);
		
	});
	$('.jianyige1').click(function(){
		if(number1==0)
		{
			return false
		}else{
			$('.jiajiannr1').html(--number1);
		}	
	});
//	alert($('.danjian_zhong2_top4_ul2>li').length)

//	改变钱
//	$('.kuaidi').find('li').click(function(){
//		var attr=['¥2.50','¥8.50','¥7.50','¥10.50','¥1.50','¥12.50','¥15.50','¥20.50','¥0.50'];
//		$('.qianshu').html(attr[$(this).index()])
//	})


	
	$('.danjian_zhong2_top4_ul1').find('li').click(function(){
		var attr=['¥2.50','¥8.50','¥5.50']
		
		$('.qianshu').html(attr[$(this).index()])
		$('.danjian_zhong2_top4_ul2>li').removeClass('activ_xia');
		$('.danjian_zhong2_top4_ul1').find('li').removeClass('active_kuaidi');
		$(this).addClass('active_kuaidi');
		$('.hover_dui').css('display','none');
		$('.hover_dui1').css('display','none');
			$('.hover_dui3').css('display','none');
		$('.hover_dui').eq($(this).index()).css('display','block');
		$('.huojian1').css('display','block');
		$('.huojian1').eq($(this).index()).css('display','none')
		$('.huojian').css('display','none');
		$('.huojian').eq($(this).index()).css('display','block')
	});
	
	$('.danjian_zhong2_top4_ul2_i>li').click(function(){
		var attr1=['¥10.50','¥1.50','¥12.50','¥15.50'];
		$('.qianshu').html(attr1[$(this).index()])
		
		$('.danjian_zhong2_top4_ul1').find('li').removeClass('active_kuaidi');
		$('.hover_dui').css('display','none');
			$('.hover_dui3').css('display','none');
			
		$('.danjian_zhong2_top4_ul2>li').removeClass('activ_xia');
	
		$(this).addClass('activ_xia');
		$('.hover_dui1').css('display','none');
		
		$('.hover_dui1').eq($(this).index()).css('display','block');
	});

	$('.danjian_zhong2_top4_ul3>li').click(function(){
		var attr2=['¥20.50','¥0.50'];
		$('.qianshu').html(attr2[$(this).index()])
		
		$('.danjian_zhong2_top4_ul1').find('li').removeClass('active_kuaidi');
		$('.hover_dui').css('display','none');
		$('.hover_dui1').css('display','none');
		$('.danjian_zhong2_top4_ul3').find('li').removeClass('active_kuaidi');
		$('.hover_dui').css('display','none');
		
		$('.danjian_zhong2_top4_ul2>li').removeClass('activ_xia');
		$(this).addClass('activ_xia')
		
		$('.hover_dui3').css('display','none');
		
		$('.hover_dui3').eq($(this).index()).css('display','block');
	});
	
	
//	shiqian  
//var a='1fsdfSD<23';
//var value = a.replace(/[^0-9]/ig,""); 
//alert(value);
	
	
	
	
//	确定按钮
	$('.jisuan').click(function(){


		var zhi='(¥'+$('.jiajiannr1').html()+')';
		if(parseInt(zhi.replace(/[^0-9]/ig,""))>=1000)
		{
			 zhi=(parseInt(zhi.replace(/[^0-9]/ig,"")))/1000+'K';
		}
		$('.duo1').eq(5).addClass('ACTIVE')
		$('.shiqian').html(zhi);
		$('.zhegao,.baojia').hide();
		
	})
	
	
//	取消按钮
		$('.cha ,.yexiaoshi').click(function(){
			$('.zhegao,.baojia').hide();
			$('.duo1').eq(5).removeClass('ACTIVE')
		
		})
		$('.duo1:nth-child(6)').click(function(){
			$('.baojia').fadeIn(500).show();
			$('.zhegao').show();
			
		})
//	多选标签


var bb;var sum=0;

	$('.duo1').click(function(){
		var attr4=['¥10','¥11','¥12','¥15','¥10','¥11','¥12.','¥15','¥1'];

		
		

		 
		if ($('.duo1').hasClass('ACTIVE'))
		 {
		 	// $('.zengzhiqian').html(attr4[$(this).index()]);
			bb=parseFloat(attr4[$(this).index()].replace(/[^0-9]/ig,""));
			
			sum=sum+bb;$('.zengzhiqian').html(sum);
		 	// return sum;
		 }
		 	// $('.zengzhiqian').html(sum)
		
		 	// $('.zengzhiqian').html(jig)
		 	
			
		
		if($('.duo1').eq($(this).index()).attr('class').toString()=='duo1 ACTIVE')
		{
			
			$('.duo1').eq($(this).index()).removeClass('ACTIVE')
		}else{
		
			$(this).addClass('ACTIVE')
		}
		
		
	});
	// $('.zengzhiqian').html()
	
	//大纸盒点击
	
	var dianjishu=null;
	var noww=null;
	$('.dazhihe_ul').find('li').click(function(){
		$('.dazhihe_ul').find('li').removeClass('acttt');
		$(this).addClass('acttt');
		noww=$(this).index();
		return noww;
	});
	$('.duo1:nth-child(2)').click(function(){
			$('.dazhihe').fadeIn(500).show();
			$('.zhegao').show();
			
	});
	
	$('.cha,.yexiaoshi1').click(function(){
		$('.dazhihe,.zhegao').hide();
		$('.duo1').eq(1).removeClass('ACTIVE')
	
	})
	
	//点击确定
	$('.jisuan1').click(function(){
		// alert($('.dazhihe_ul').find('li').hasClass('acttt'))
		// 
		// 
		
	if($('.dazhihe_ul').find('li').hasClass('acttt'))	
	{	
		$('.duo1:nth-child(2)').html($('.dazhihe_ul').find('li').eq(noww).html());
	}
		
		$('.duo1').eq(1).addClass('ACTIVE');
		$('.dazhihe,.zhegao').hide();
		// $('.duo1').eq(1).removeClass('ACTIVE')
	});


	//点击图片地址

	$('.shangxia').find('li').hover(function(){
		$('.shangxia').find('li').removeClass('shuzixia');
		$(this).addClass('shuzixia');
	})


	$('.dianjichudizhi1').click(function(){
		
		$('.dizhibig').fadeIn(500).show();
			$('.zhegao').show();
	});


	$('.cha1,.yexiaoshi2').click(function(){
		$('.dizhibig,.zhegao').hide();
	});

	//点击地址前面的对错


	var index1=null;
	$('.td11').click(function(){
		
		$('.td11').attr('src','img/2_budui.png');
		$(this).attr('src','img/2_dui.png');

		 index1 = $('.td11').index(this); 
		//获取不是兄弟元素时候  自己加索引
	
		return index1;
	});


	var aaa=null;


	$('.jisuan2').click(function(){
		// alert(dizhishu)
		// alert(1)
		// alert($('.td1').find('img').attr('src').toString())
		// alert($('.td1').find('img').attr('src'))

			// alert(index1);
			// alert($('.td11').eq(index1).parent().parent().text());
		// alert($('tr:nth-child(index1+1)>td').html());
		// alert($('tr').eq(index1).$().html())
			var atext=$('.td11').eq(index1).parent().next().text();
			var atext1=$('.td11').eq(index1).parent().next().next().text();
			var atext2=$('.td11').eq(index1).parent().next().next().next().text();
			var atext3=$('.td11').eq(index1).parent().next().next().next().next().text();
			// alert(atext)
			// 
			 // $().trim()   // 去除空格
			 // this.replace(/(^\s*)|(\s*$)/g, "");
			$('.zi').eq(0).val(atext.trim());
			$('.zi').eq(1).val(atext1.trim());
			$('.zi').eq(2).val(atext2.trim());
			$('.zi').eq(3).val(atext3.trim());
		
			// alert($('.td1').find('img').parent().parent().text())
			$('.dizhibig,.zhegao').hide();
	})

	//快件管理页面的代码
	
	$('.kuajian_nr_zhong_div1').find('li').click(function(){
		$('.kuajian_nr_zhong_div1').find('li').removeClass('activee_li_');
		$(this).addClass('activee_li_');
		$('.qudao').removeClass('activee');
		$('.qudao').eq($(this).index()).addClass('activee')


	});
	$('.kuaijiasanjiao').hover(function(){
		$(this).attr('src','img/xialassss.png')
	},function(){
		$(this).attr('src','img/xialasnajiao.png')
	});
	
	$('.kuajian_nr_zhong_div2_input1').focus(function(){
		$('.kuaijiasanjiao').attr('src','img/xialassss.png')
	})
	
	$('.kuajian_nr_zhong_div2_input1').blur(function(){
		$('.kuaijiasanjiao').attr('src','img/xialasnajiao.png')
	});
	
	
	$('.kuajian_nr_zhong_div2_span2').hover(function(){
		$('.kuajian_nr_zhong_div2_span2_img').attr('src','img/jingxuan2.png');
	},function(){
		$('.kuajian_nr_zhong_div2_span2_img').attr('src','img/jingxuan1.png');
	})
	
	
	
	var timer11=null
	$('.wuliu_xinxi1').hover(function(){
		$('.wuliu_xinxi1').removeClass('accc');
		$(this).addClass('accc');
		
		$('.wuliu_hover').show();
		clearTimeout(timer11);
	},function(){
		$('.wuliu_xinxi1').removeClass('accc');
		 timer11=setTimeout(function(){
			$('.wuliu_hover').hide();
		},200)
		
	})
	
	
	$('.wuliu_hover').hover(function(){
		$('.wuliu_xinxi1').addClass('accc');
		clearTimeout(timer11);

	},function(){
		
		$('.wuliu_xinxi1').removeClass('accc');
		 timer11=setTimeout(function(){
			$('.wuliu_hover').hide();
		},200)
		
	});
	
	
	
	
	
	
	
	
	
	
	
//	快件查询页面

//$('.chuxinawenzi1').show();
	$('.huoqujiaodian').click(function(){
	
		$('.chuxinawenzi1').show();
		
		 return false;

	});
	
	
	$('.chuxinawenzi1_div1').find('span').click(function(e){
		

		$('.huoqujiaodian').val($(this).html());
	
	});
	
	

	$(document).click(function(){
		$('.chuxinawenzi1').hide();
	})
	
	
//	点击清空历史按钮

	$('.chuxinawenzi1_div2_span1').click(function(){
		$('.chuxinawenzi1').show();
		$('.chuxinawenzi1_div1').find('span').remove();
		
		
//		return false;
	})

	$('.huanguganji').hover(function(){
		$('.nixinaz').fadeIn(500);
	},function(){
		$('.nixinaz').hide();
	});
	
	
	$('.guanli_div1').hover(function(){
		$('.guanli_div1').find('span').css('color','#3c3c3c')
		$(this).find('span').css('color','#ea871d');
	})
	
//	404页面
	

//	if($('.footer_dan1').offset().top<$(window).height()-parseInt($('.footer_dan1').css('height')))
//	{			
//		$('.footer_dan1').css({'position':'fixed','bottom':'0px','left':'0px'})
//	}else{
//
//		$('.footer_dan1').css('position','static');
//	};


//alert($('.ju_top').offset().top-$(window).height())
$(window).scroll(function(){

	if($(document).scrollTop()<1977-$(window).height())
	{
		$('.dingwei_bottom').show();
	}else{
		$('.dingwei_bottom').hide();
	}
})
//	$('.cheng1').hover(function(){
//		$(this).attr('src','img/caidan.png')
//	})




	
})