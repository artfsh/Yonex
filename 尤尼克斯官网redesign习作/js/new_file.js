var mySwiper = new Swiper ('.swiper1', {
	direction: 'vertical', // 纵向切换
	autoHeight: true, //高度随内容变化。注意此时swiper不能限制高度否则自适应失效
	// slidesPerView :'auto', //设置slider容器能够同时显示的slides数量，'auto'则自动根据slides的宽度来设定数量。
	mousewheel: true, //鼠标滚轮可控
	speed:500,
	
	//滚动条
	scrollbar: {
	    el: '.swiper-scrollbar',
		draggable: 'true',
	},
	
	on: {
		slideChangeTransitionStart: function(){
			if(this.activeIndex!=0){
				anime({
				  targets: '#headtab',
				  height: '111px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#logo',
				  top: '20px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#tab1',
				  top: '43px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#search',
				  top: '40px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#news,#agency,#line,#tab0',
				  top: '-20px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				if(this.activeIndex==1){
					video.play();
				}else{
					video.pause();
				}
			}else{
				video.pause();
				anime({
				  targets: '#headtab',
				  height: '171px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#logo',
				  top: '80px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#tab1',
				  top: '121px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#search',
				  top: '118px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#news,#agency',
				  top: '23px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#line',
				  top: '60px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
				anime({
				  targets: '#tab0',
				  top: '80px',
				  easing: 'easeInOutCirc',
				  duration: 600,
				});
			}
		},
	},
});

var mySwiper2 = new Swiper ('.swiper2', {
	direction: 'horizontal', // 横向切换
	loop: true, // 循环模式
	
	autoplay: {
	    delay: 3000,
	    stopOnLastSlide: false,
	    disableOnInteraction: true,
	},

	//分页器
	pagination: {
		el: '.swiper-pagination2',
		clickable: 'true',
		// bulletActiveClass: 'my-bullet-active',
	},
});