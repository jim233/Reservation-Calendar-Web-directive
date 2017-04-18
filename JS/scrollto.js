define(['jquery'], function($) {
	function ScrollTo(opts) {
		//这里jQuery的extend方法可以把用户传入的参数覆盖一个已有的参数并生成一个新的对象返回出来
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
		this.$el = $('html,body');
	}
	ScrollTo.prototype.move = function() {
		var opts = this.opts,
			dest = opts.dest;
		//var opts = this.opts.dest;	
		//注意：这里要先判断下是否已经到顶部不然点击多次会造成animate执行多次
		if($(window).scrollTop() != dest) {
			//is(':animated')是判断一个东西还在不在运动
			if(!this.$el.is(':animated')) {
				this.$el.animate({
					scrollTop: dest
				}, opts.speed);
			}
		}
	}
	ScrollTo.prototype.go = function() {
		if($(window).scrollTop() != this.opts.dest) {
			this.$el.scrollTop(this.opts.dest);
		}
	}

	//这里是新建一个构造函数来设置ScrollTo函数的默认值。
	//不把次默认值定义到函数里面而定义到全局是因为定义的在函数里面会造成每一个实例都新建一个默认值，从而造成内存的浪费
	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800
	}

	//为了模块能与外部通信需要将其返回出去
	return {
		//第一个ScrollTo是返回出去的对象名，第二个ScrollTo是定义的构造函数ScrollTo
		ScrollTo: ScrollTo
	}
})