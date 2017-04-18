IndexApp.directive("fixmoduledirective", function() {
	return {
		restrict: "AEC",
		templateUrl: 'tpls/fixFunctionModule.html',
		link: function(scope, element, attrs) {
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
				if ($(window).scrollTop() != dest) {
					//is(':animated')是判断一个东西还在不在运动
					if (!this.$el.is(':animated')) {
						this.$el.animate({
							scrollTop: dest
						}, opts.speed);
					}
				}
			}
			ScrollTo.prototype.go = function() {
				if ($(window).scrollTop() != this.opts.dest) {
					this.$el.scrollTop(this.opts.dest);
				}
			}

			//这里是新建一个构造函数来设置ScrollTo函数的默认值。
			//不把次默认值定义到函数里面而定义到全局是因为定义的在函数里面会造成每一个实例都新建一个默认值，从而造成内存的浪费
			ScrollTo.DEFAULTS = {
				dest: 0,
				speed: 800
			}

			function BackTop(el, opts) {
				this.opts = $.extend({}, BackTop.DEFAULTS, opts);
				//el是点击的那个返回顶部按键
				this.$el = $(el);
				this.scroll = new ScrollTo({
					dest: 0,
					speed: this.opts.speed
				});
				this._checkPosition();
				//$.proxy(this._move,this) 中第二个this指的是BackTop这个构造函数实例
				//在方法名加_下划线的意思表示此方法是内部使用的不是给用户的API供外部使用的
				if (this.opts.mode == 'move') {
					this.$el.on('click', $.proxy(this._move, this));
				} else {
					this.$el.on('click', $.proxy(this._go, this));
				}
				$(window).on('scroll', $.proxy(this._checkPosition, this))
			}
			BackTop.DEFAULTS = {
				mode: 'move',
				pos: $(window).height(),
				speed: 800
			};
			BackTop.prototype._move = function() {
				this.scroll.move();
			};
			BackTop.prototype._go = function() {
				this.scroll.go();
			};
			BackTop.prototype._checkPosition = function() {
				var $el = this.$el;
				if ($(window).scrollTop() > this.opts.pos) {
					$el.fadeIn();
				} else {
					$el.fadeOut();
				}
			};

			//jQuery为开发插件提拱了两个方法，分别是：jQuery.fn.extend(); jQuery.extend();
			$.fn.extend({
				backtop: function(opts) {
					//这里之所以要用个each(等同于for循环)遍历的来实例化每个BackTop构造函数，
					//是因为封装成JQuery插件后不但可以通过ID来访问也可以通过类名来访问，而类名有多个所以要遍历
					this.each(function() {
						//这个this是返回顶部的按钮
						new BackTop(this, opts);
					});
					return this;
				}
			})

			$('#backtop').backtop({
				mode: 'move',
				pos: 100,
				speed: 500
			});

		}
	};
});