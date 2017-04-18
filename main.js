requirejs.config({
	paths: {
		jquery: 'framework/jquery-1.9.1',
		scrollto: 'JS/scrollto',
		backtop: 'JS/backtop'
	},
});

// scrollto模块不用注入了，在backtop方法里面已经注入了，如果用下面注释的方法那就需要在注入scrollto模块
requirejs(['jquery', 'backtop'], function($, backtop) {
//	setInterval("console.log('qqqqqqq')", 1000)
	//这里提供一种注册成jQuery插件的使用方法，具体看backtop.js
	$('#backtop').backtop({
		mode: 'move',
		pos: 100,
		speed: 1000
	});

	//	//注入backtop模块使用以下代码即可
	//	new backtop.BackTop($("#backtop"), {
	//		mode: 'move',
	//		pos: 1000,
	//		speed: 2000
	//	})

	//	//只注入了scrollto模块没注入backtop模块使用以下代码
	//	//为了使用我们定义的scrollto模块需要先实例化
	//		var scroll = new scrollto.ScrollTo({
	//			dest:0,
	//			speed:2000
	//		});
	//	//$.proxy()可以修改this的指向，第一个参数是要调用的方法第二个参数是this的指向，
	//	//比如这里的this本来是指向#backtop这个按钮，用了proxy后指向了scroll即指向了
	//		$("#backtop").on('click',$.proxy(scroll.move,scroll));
	//
	//	//判断滚动时离顶部的距离
	//	  $(window).on('scroll',function () {
	//	      check($(window).height());
	//	  });
	//	//页面加载时也执行check函数
	//	  check($(window).height());
	//		function check(pos) {
	//	      if ($(window).scrollTop()>pos){
	//	          $('#backtop').fadeIn();
	//	      }else {
	//	          $('#backtop').fadeOut();
	//	      }
	//	  }

	//	console.log(validate.isEqual(1, 1))
});