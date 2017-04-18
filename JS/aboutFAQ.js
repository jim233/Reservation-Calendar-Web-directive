angular.module('Calendar').controller("aboutFAQCtrl", function($scope, $state) {
	var vm = this;
	console.log("aboutFAQPage");
	
	
	var ball1 = document.querySelector('.ball1')
			var ball2 = document.querySelector('.ball2')
			var ball3 = document.querySelector('.ball3')
			console.log('aaa' + parseInt(ball1.style.marginLeft, 10))

			//			function animate(ball, distance, callback) {
			//				console.log('hi')
			//				setTimeout(function() {
			//					var marginLeft = parseInt(ball.style.marginLeft, 10)
			//					if(marginLeft === distance) {
			//						callback && callback()
			//					} else {
			//						if(marginLeft < distance) {
			//							marginLeft++;
			//						} else {
			//							marginLeft--
			//						}
			//						ball.style.marginLeft = marginLeft + 'px'
			//						animate(ball, distance, callback)
			//						console.log('bbb' + marginLeft);
			//					}
			//				}, 13)
			//			}
			//			console.log('ccc')
			//			animate(ball1,100,function(){
			//				console.log('1a')
			//				animate(ball2,200,function(){
			//					console.log('2a')
			//					animate(ball3,300,function(){
			//						console.log('3a')
			//						animate(ball3,150,function(){
			//							console.log('4a')
			//							animate(ball2,150,function(){
			//								console.log('5a')
			//								animate(ball1,150,function(){
			//									console.log('6a')
			//								})
			//							})
			//						})
			//					})
			//				})
			//			})

			var Promise = window.Promise

			function promiseAnimate(ball, distance) {
				return new Promise(function(resolve, reject) {
					function _animate() {
						setTimeout(function() {
							console.log('hi')
							var marginLeft = parseInt(ball.style.marginLeft, 10)
							console.log('hellow')
							if(marginLeft === distance) {
								console.log('no resolve')
								resolve()
								console.log('have resolve')
							} else {
								console.log('into else')
								if(marginLeft < distance) {
									marginLeft++;
								} else {
									marginLeft--;
								}
								ball.style.marginLeft = marginLeft + 'px';
								_animate()
								console.log('bbb' + marginLeft);
							}
						}, 13)
					}
					_animate()
				})
			}
			debugger
			promiseAnimate(ball1, 100)
				.then(function(){
					console.log('ball2')
					return promiseAnimate(ball2,200)
				})
				.then(function() {
					console.log('ball3')
					return promiseAnimate(ball3, 300)
				})
				.then(function() {
					console.log('ball33')
					return promiseAnimate(ball3, 150)
				})
				.then(function() {
					console.log('ball22')
					return promiseAnimate(ball2, 150)
				})
				.then(function() {
					console.log('ball11')
					return promiseAnimate(ball1, 150)
				})
})