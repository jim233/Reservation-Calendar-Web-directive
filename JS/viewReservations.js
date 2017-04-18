angular.module('Calendar').controller("viewReservationsCtrl", function($scope, $state, $document, $parse) {
	var vm = this;
	console.log("viewReservationsPage");

	$("#VRStartDatePicker").datepicker();
	$("#VREndDatePicker").datepicker();

	$scope.message = "Waiting 2000ms for update";
	console.log($scope.message);
	setTimeout(function() {
		$scope.$apply(function() {
			$scope.message = "Timeout called!"; //AngularJS unaware of update to $scope
			console.log($scope.message);
		});
	}, 2000);

	vm.showStatistics = true;
	vm.showEventsList = false;
	vm.sortPart = false;
	vm.leftPartRow = true;
	vm.eyeChange = true;
	vm.leftPartRow1 = true;
	vm.eyeChange1 = true;
	//	vm.leftPartDetailRow1 = false;
	vm.ifConfilct = true;
	vm.leftPartDetailRow2 = false;
	vm.yearLine = true;
	vm.quarterLine = false;
	vm.monthLine = false;
	vm.weekLine = false;
	vm.rightImgStatus = true;
	vm.toolMoveImg = true;
	vm.toolHandsImg = true;
	vm.toolChooseImg = true;
	vm.toolIfToday = true;
	vm.AddImgStatus = true;
	vm.MinusImgStatus = true;
	vm.Showdetails = true;
	$scope.ProjectDetail = "";
	vm.showMoveContain = false;
	vm.useAddBottom = false;
	vm.RightDateline15px = false;
	vm.RightDateline20px = false;
	vm.RightDateline30px = true;
	vm.RightDateline35px = false;

	vm.allLeftData = [{
		judugeNum: 0,
		row1DetailText: 'row1text1 hello jim you are so handsome i really love you',
		eye1Text: '199 Events(188 approved)',
		leftPartRow: true,
		eyeChange: true,
		secondData: [{
			judugeNum: 1,
			row2DetailText: 'row2text11 hello jim you are so handsome i really love you',
			eye2Text: 'eye2Text11 hello jim you are so cute',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 2,
				row3DetailText: 'row3text111 hello jim you are so handsome i really love you',
				ProjectDate: "10/09/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}, {
				judugeNum: 3,
				row3DetailText: 'row3text112 hello jim you are so handsome i really love you',
				ProjectDate: "10/08/2016",
				ifConfilct: true,
				leftPartRow2: true,
			}]
		}, {
			judugeNum: 4,
			row2DetailText: 'row2text12',
			eye2Text: 'eye2Text12',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 5,
			row2DetailText: 'row2text13',
			eye2Text: 'eye2Text13',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 6,
				row3DetailText: 'row3text131',
				ProjectDate: "10/06/2016",
				ifConfilct: true,
				leftPartRow2: true,
			}, {
				judugeNum: 7,
				row3DetailText: 'row3text132',
				ProjectDate: "10/07/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}]
		}]
	}, {
		judugeNum: 8,
		row1DetailText: 'row1text2',
		eye1Text: 'eye1Text2 hello',
		leftPartRow: true,
		eyeChange: true,
		secondData: [{
			judugeNum: 9,
			row2DetailText: 'row2text21',
			eye2Text: 'eye2Text21',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 10,
			row2DetailText: 'row2text22',
			eye2Text: 'eye2Text22',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 11,
				row3DetailText: 'row3text221',
				ProjectDate: "10/05/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}, {
				judugeNum: 12,
				row3DetailText: 'row3text222',
				ProjectDate: "10/04/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}]
		}, {
			judugeNum: 13,
			row2DetailText: 'row2text23',
			eye2Text: 'eye2Text23',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}]
	}, {
		judugeNum: 14,
		row1DetailText: 'row1text3',
		eye1Text: 'eye1Text3',
		leftPartRow: true,
		eyeChange: true,
		secondData: [{
			judugeNum: 15,
			row2DetailText: 'row2text31',
			eye2Text: 'eye2Text31',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 16,
			row2DetailText: 'row2text32',
			eye2Text: 'eye2Text32',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 17,
			row2DetailText: 'row2text33',
			eye2Text: 'eye2Text33',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 18,
				row3DetailText: 'row3text331',
				ProjectDate: "10/03/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}, {
				judugeNum: 19,
				row3DetailText: 'row3text332',
				ProjectDate: "10/02/2016",
				ifConfilct: true,
				leftPartRow2: true,
			}]
		}]
	}, {
		judugeNum: 20,
		row1DetailText: 'row1text1 hello jim you are so handsome i really love you',
		eye1Text: '199 Events(188 approved)',
		leftPartRow: true,
		eyeChange: true,
		secondData: [{
			judugeNum: 21,
			row2DetailText: 'row2text11 hello jim you are so handsome i really love you',
			eye2Text: 'eye2Text11 hello jim you are so cute',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 22,
				row3DetailText: 'row3text111 hello jim you are so handsome i really love you',
				ProjectDate: "10/09/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}, {
				judugeNum: 23,
				row3DetailText: 'row3text112 hello jim you are so handsome i really love you',
				ProjectDate: "10/08/2016",
				ifConfilct: true,
				leftPartRow2: true,
			}]
		}, {
			judugeNum: 24,
			row2DetailText: 'row2text12',
			eye2Text: 'eye2Text12',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 25,
			row2DetailText: 'row2text13',
			eye2Text: 'eye2Text13',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 26,
				row3DetailText: 'row3text131',
				ProjectDate: "10/06/2016",
				ifConfilct: true,
				leftPartRow2: true,
			}, {
				judugeNum: 27,
				row3DetailText: 'row3text132',
				ProjectDate: "10/07/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}]
		}]
	}, {
		judugeNum: 28,
		row1DetailText: 'row1text2',
		eye1Text: 'eye1Text2 hello',
		leftPartRow: true,
		eyeChange: true,
		secondData: [{
			judugeNum: 29,
			row2DetailText: 'row2text21',
			eye2Text: 'eye2Text21',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 30,
			row2DetailText: 'row2text22',
			eye2Text: 'eye2Text22',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 31,
				row3DetailText: 'row3text221',
				ProjectDate: "10/05/2016",
				ifConfilct: false
			}, {
				judugeNum: 32,
				row3DetailText: 'row3text222',
				ProjectDate: "10/04/2016",
				ifConfilct: false
			}]
		}, {
			judugeNum: 33,
			row2DetailText: 'row2text23',
			eye2Text: 'eye2Text23',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}]
	}, {
		judugeNum: 34,
		row1DetailText: 'row1text3',
		eye1Text: 'eye1Text3',
		leftPartRow: true,
		eyeChange: true,
		secondData: [{
			judugeNum: 35,
			row2DetailText: 'row2text31',
			eye2Text: 'eye2Text31',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 36,
			row2DetailText: 'row2text32',
			eye2Text: 'eye2Text32',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: []
		}, {
			judugeNum: 37,
			row2DetailText: 'row2text33',
			eye2Text: 'eye2Text33',
			leftPartRow1: true,
			eyeChange1: true,
			thirdData: [{
				judugeNum: 38,
				row3DetailText: 'row3text331',
				ProjectDate: "10/03/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}, {
				judugeNum: 39,
				row3DetailText: 'row3text332',
				ProjectDate: "10/02/2016",
				ifConfilct: true,
				leftPartRow2: true,
			}, {
				judugeNum: 40,
				row3DetailText: 'row3text332',
				ProjectDate: "10/01/2016",
				ifConfilct: false,
				leftPartRow2: true,
			}]
		}]
	}];

	console.log(vm.allLeftData[0].secondData[0].thirdData)

	vm.allRightTopDate = [{
		YearAndMonth: 'November 2016',
		DayData: ["01", "02", '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
	}, {
		YearAndMonth: 'December 2016',
		DayData: ["01", "02", '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
	}, {
		YearAndMonth: 'January 2017',
		DayData: ["01", "02", '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
	}]

	vm.allRightBottomDate = [{
		YearAndMonth: {
			Month: ['11', '12'],
			Year: "2016"
		}
	}, {
		YearAndMonth: {
			Month: ['01'],
			Year: "2017"
		}
	}];

	$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
	//	console.log("LeftPartDetailHeight:   " + $scope.LeftPartDetailHeight)

	//	function test123(a) {
	//		console.log(a+" test123!!!!!")
	//	}
	//	test123(123);

	vm.Statistics = function() {
		vm.showStatistics = true;
		vm.showEventsList = false;
		vm.sortPart = false;
	}

	vm.EventsList = function() {
		vm.showStatistics = false;
		vm.showEventsList = true;
		setTimeout(function() {
			$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
			//			console.log("LeftPartDetailHeight:   " + $scope.LeftPartDetailHeight)
		}, 0)
	}

	vm.sortPartEnter = function() {
		vm.sortPart = true;
	}

	vm.sortPartLeave = function() {
		vm.sortPart = false;
	}

	vm.rowExpand1 = 0;
	vm.rowExpand1Total = 0;
	vm.rowExpand2 = 0;
	vm.rowExpand2Total = 0;
	vm.rowThirdData = [];
	vm.leftPartRowChange = function(data) {
		data.leftPartRow = !data.leftPartRow;
		console.log("hahahahaaha: " + JSON.stringify(data));
		vm.leftPartRow = data.leftPartRow;
		if (vm.leftPartRow == false) {
			//			vm.rowExpand1 = data.secondData.length;
			//			vm.rowExpand1Total = vm.rowExpand1 + vm.rowExpand1Total;
			//			console.log("rowExpand1Total: " + vm.rowExpand1Total);
			for (var i = 0; i < data.secondData.length; i++) {
				if (data.secondData[i].leftPartRow1 == false) {
					//					vm.rowExpand2 = data.secondData[i].thirdData.length;
					//					vm.rowExpand2Total = vm.rowExpand2 + vm.rowExpand2Total;
					//					console.log("rowExpand2Total: " + vm.rowExpand2Total);
					if (data.secondData[i].thirdData.length != null && data.secondData[i].thirdData.length != undefined) {
						for (var j = 0; j < data.secondData[i].thirdData.length; j++) {
							var tmp = data.secondData[i].thirdData[j].judugeNum;
							//							vm.rowThirdData[tmp] = (tmp-1) * 41 + "px";
							vm.rowThirdData[tmp] = {
								'heightNo': (tmp)
							};
						}
					}
				} else {
					//					vm.rowExpand2Total = vm.rowExpand2Total-vm.rowExpand2;
				}
			}
			console.log("hahaharowThirdData: " + JSON.stringify(vm.rowThirdData));
		} else {
			//			vm.rowExpand1Total = vm.rowExpand1Total - vm.rowExpand1;
			//			for (var i = 0; i < data.secondData.length; i++) {
			//				if (data.secondData[i].leftPartRow1 == false) {
			//					vm.rowExpand2Total = vm.rowExpand2Total;
			//				}else{
			//					vm.rowExpand2Total = vm.rowExpand2Total - vm.rowExpand2;
			//				}
			//			}
			//			console.log("rowExpand1: " + vm.rowExpand1Total);
			if (vm.rowThirdData.length != 0) {
				for (var i = 0; i < data.secondData.length; i++) {
					if (data.secondData[i].thirdData.length != null && data.secondData[i].thirdData.length != undefined) {
						for (var j = 0; j < data.secondData[i].thirdData.length; j++) {
							var tmp = data.secondData[i].thirdData[j].judugeNum;
							vm.rowThirdData[tmp] = null;
						}
					}
				}
			}
			console.log("hahaharowThirdData: " + JSON.stringify(vm.rowThirdData));
		}
		//		console.log("1111111111: "+ JSON.stringify(vm.allLeftData));
		//		debugger;
		vm.rowExpand1Total = 0;
		for (var k = 0; k < vm.allLeftData.length; k++) {
			if (vm.allLeftData[k].leftPartRow == false) {
				for (var x = 0; x < vm.allLeftData[k].secondData.length; x++) {
					vm.rowExpand1Total = vm.rowExpand1Total + 1;
				}
			}
		}
		console.log("111111: " + vm.rowExpand1Total);
		setTimeout(function() {
			$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
			console.log("LeftPartDetailHeight:   " + $scope.LeftPartDetailHeight)
		}, 10)
	}

	vm.eyeChangeFun = function(data) {
		data.eyeChange = !data.eyeChange;
	}

	vm.leftPartRowChange1 = function(data) {
		data.leftPartRow1 = !data.leftPartRow1;
		vm.leftPartDetailRow2 = !vm.leftPartDetailRow2;
		//		debugger;
		if (data.thirdData.length != null && data.thirdData.length != undefined) {
			for (var i = 0; i < data.thirdData.length; i++) {
				if (data.leftPartRow1 == false) {
					data.thirdData[i].leftPartRow2 = false;
					var tmp = data.thirdData[i].judugeNum;
					//							vm.rowThirdData[tmp] = (tmp-1) * 41 + "px";
					vm.rowThirdData[tmp] = {
						'heightNo': (tmp)
					};
				} else {
					data.thirdData[i].leftPartRow2 = true;
					var tmp = data.thirdData[i].judugeNum;
					vm.rowThirdData[tmp] = null;
				}
			}
		}
		console.log("hahahaha111: " + JSON.stringify(data) + "  " + data.thirdData.length);
		console.log("hahaharowThirdData: " + JSON.stringify(vm.rowThirdData));
		vm.rowExpand2Total = 0;
		for (var k = 0; k < vm.allLeftData.length; k++) {
			for (var x = 0; x < vm.allLeftData[k].secondData.length; x++) {
				//				if (vm.allLeftData[k].secondData[x].leftPartRow1 == false && vm.allLeftData[k].secondData[x].thirdData.length != null && vm.allLeftData[k].secondData[x].thirdData.length != undefined && vm.allLeftData[k].secondData[x].thirdData.length != 0) {
				//					vm.rowExpand2Total = vm.rowExpand2Total + 1;
				//				}
				for (var y = 0; y < vm.allLeftData[k].secondData[x].thirdData.length; y++) {
					if (vm.allLeftData[k].secondData[x].leftPartRow1 == false && vm.allLeftData[k].secondData[x].thirdData.length != null && vm.allLeftData[k].secondData[x].thirdData.length != undefined && vm.allLeftData[k].secondData[x].thirdData.length != 0) {
						vm.rowExpand2Total = vm.rowExpand2Total + 1;
					}
				}
			}
		}
		console.log("222222: " + vm.rowExpand2Total);
		setTimeout(function() {
			$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
			//			console.log("LeftPartDetailHeight:   " + $scope.LeftPartDetailHeight)
		}, 0);

	}

	vm.eyeChangeFun1 = function(data) {
		data.eyeChange1 = !data.eyeChange1;
	}

	vm.SearchDetailRows = function() {
		for (var i = 0; i < vm.allLeftData.length; i++) {
			vm.allLeftData[i].leftPartRow = false;
			for (var j = 0; j < vm.allLeftData[i].secondData.length; j++) {
				vm.allLeftData[i].secondData[j].leftPartRow1 = false;
			}
		}
		setTimeout(function() {
			$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
			//			console.log("LeftPartDetailHeight:   " + $scope.LeftPartDetailHeight)
		}, 0)
	}

	vm.showDetailRows = function() {
		if (vm.Showdetails == true) {
			for (var i = 0; i < vm.allLeftData.length; i++) {
				vm.allLeftData[i].leftPartRow = false;
				for (var j = 0; j < vm.allLeftData[i].secondData.length; j++) {
					vm.allLeftData[i].secondData[j].leftPartRow1 = false;
				}
			}
			vm.Showdetails = false;
		} else if (vm.Showdetails == false) {
			for (var i = 0; i < vm.allLeftData.length; i++) {
				vm.allLeftData[i].leftPartRow = true;
				for (var j = 0; j < vm.allLeftData[i].secondData.length; j++) {
					vm.allLeftData[i].secondData[j].leftPartRow1 = true;
				}
			}
			vm.Showdetails = true;
		}
		//		console.log(vm.allLeftData.toString())
		//		console.log(vm.allLeftData)
		//		console.log(JSON.stringify(vm.allLeftData))
		setTimeout(function() {
			$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
			//			console.log("LeftPartDetailHeight:   " + $scope.LeftPartDetailHeight)
		}, 0)
	}

	vm.selectYear = function() {
		vm.yearLine = true;
		vm.quarterLine = false;
		vm.monthLine = false;
		vm.weekLine = false;
	}

	vm.selectQuarter = function() {
		vm.yearLine = false;
		vm.quarterLine = true;
		vm.monthLine = false;
		vm.weekLine = false;
	}

	vm.selectMonth = function() {
		vm.yearLine = false;
		vm.quarterLine = false;
		vm.monthLine = true;
		vm.weekLine = false;
	}

	vm.selectWeek = function() {
		vm.yearLine = false;
		vm.quarterLine = false;
		vm.monthLine = false;
		vm.weekLine = true;
	}

	vm.rightImgChange = function() {
		vm.rightImgStatus = !vm.rightImgStatus;
	}

	//	$("#toolAddImg").mousedown(function() {
	//		$("#toolAddImg").removeClass("tools_add_img").addClass("tools_add_img1");
	//	});
	//	$("#toolAddImg").mouseup(function() {
	//		$("#toolAddImg").removeClass("tools_add_img1").addClass("tools_add_img");
	//	})
	//	
	//	$("#toolMinusImg").mousedown(function() {
	//		$("#toolMinusImg").removeClass("tools_minus_img").addClass("tools_minus_img1");
	//	});
	//	$("#toolMinusImg").mouseup(function() {
	//		$("#toolMinusImg").removeClass("tools_minus_img1").addClass("tools_minus_img");
	//	})

	vm.AddImgDown = function() {
		vm.AddImgStatus = false;
	}

	vm.AddImgUp = function() {
		vm.AddImgStatus = true;
	}

	vm.MinusImgDown = function() {
		vm.MinusImgStatus = false;
	}

	vm.MinusImgUp = function() {
		vm.MinusImgStatus = true;
	}

	vm.MoveImgChange = function() {
		vm.toolMoveImg = !vm.toolMoveImg;
		vm.toolHandsImg = true;
		vm.toolChooseImg = true;
		vm.showMoveContain = !vm.showMoveContain;
	}

	vm.HandsImgChange = function() {
		vm.toolHandsImg = !vm.toolHandsImg;
		vm.toolMoveImg = true;
		vm.toolChooseImg = true;
		vm.showMoveContain = false;
	}

	vm.ChooseImgChange = function() {
		vm.toolChooseImg = !vm.toolChooseImg;
		vm.toolMoveImg = true;
		vm.toolHandsImg = true;
		vm.showMoveContain = false;
	}

	vm.todayBtnClick = function() {
		vm.toolIfToday = !vm.toolIfToday;
	}

	vm.EnterMainPart = function() {
		if (!vm.toolHandsImg) {
			vm.toolHandsOpen = true;
		} else {
			vm.toolHandsOpen = false;
		}
		if (!vm.toolChooseImg) {
			vm.toolChooseOpen = true;
		} else {
			vm.toolChooseOpen = false;
		}
	}

	vm.SrotByDate = function() {
		$scope.ProjectDetail = 'ProjectDate';
		//		console.log("ProjectDate");
	}

	vm.SrotByName = function() {
		$scope.ProjectDetail = 'row3DetailText';
		//		console.log("row3DetailText");
	}

	$scope.ScrollTopD = 0;
	$scope.ScrollLeftD = 0;
	$scope.ScrollTopD1 = 0;
	$scope.ScrollLeftD1 = 0;

	vm.MainPartMDown = function(mousedown) {
		if (vm.toolHandsImg == false) {
			//			console.log("Startmove!!")
			$scope.mouseXS = event.pageX;
			$scope.mouseYS = event.pageY;
			//			console.log("mouseXS:" + $scope.mouseXS + "  mouseYS:" + $scope.mouseYS)
		}
	}
	vm.MainPartMUp = function(mouseup) {
		if (vm.toolHandsImg == false) {
			//			console.log("StopMove!!")
			$scope.mouseXE = event.pageX;
			$scope.mouseYE = event.pageY;
			//			console.log("mouseXE:" + $scope.mouseXE + "  mouseYE:" + $scope.mouseYE);
			$scope.Xmovedistance = ($scope.mouseXS - $scope.mouseXE)
			$scope.Ymovedistance = ($scope.mouseYS - $scope.mouseYE)
				//			console.log("Xmovedistance1:" + $scope.Xmovedistance + "  Ymovedistance1:" + $scope.Ymovedistance)
				//			console.log("outerHeight：" + $("#getmainheight").outerHeight(true))
				//			console.log("outerWidth：" + $("#getmainheight").outerWidth())
			if ($scope.ScrollTopD <= ($("#getmainheight").outerHeight(true) - 690)) {
				if ($scope.ScrollTopD < 0) {
					$scope.ScrollTopD = 0;
					$("#rightPartMainID").scrollTop(0);
				} else if ($scope.ScrollTopD >= 0) {
					$scope.ScrollTopD = $scope.ScrollTopD + $scope.Ymovedistance;
					//					console.log("ScrollTopD:" + $scope.ScrollTopD);
					$("#rightPartMainID").scrollTop($scope.ScrollTopD);
				}
			} else if ($scope.ScrollTopD > ($("#getmainheight").outerHeight(true) - 690)) {
				$scope.ScrollTopD = ($("#getmainheight").outerHeight(true) - 690);
			}
			if ($scope.ScrollLeftD <= ($("#RightTableDatePartID").outerWidth(true) - 926)) {
				if ($scope.ScrollLeftD < 0) {
					$scope.ScrollLeftD = 0;
					$("#rightPartMainID").scrollLeft(0);
				} else if ($scope.ScrollLeftD >= 0) {
					$scope.ScrollLeftD = $scope.ScrollLeftD + $scope.Xmovedistance;
					//					console.log("ScrollLeftD:" + $scope.ScrollLeftD);
					$("#rightPartMainID").scrollLeft($scope.ScrollLeftD);
				}
			} else if ($scope.ScrollLeftD > ($("#RightTableDatePartID").outerWidth(true) - 926)) {
				$scope.ScrollLeftD = ($("#RightTableDatePartID").outerWidth(true) - 926);
			}
		}
	}

	//	var a = 0;
	//	$scope.testClickDown = function() {
	//		a = a + 1;
	//		console.log("aaaaaaaa:   " + a)
	//		setTimeout(function() {
	//			if (a < 5) {
	//				$scope.testClickDown();
	//			}
	//		}, 1000);
	//
	//	}

	$scope.ifEnterTriangelUp = true;
	vm.EnterTriangelUp = function(data) {
		//		console.log("upupupuupupupuup  " + $("#rightPartMainID").scrollTop());
		$scope.ifEnterTriangelUp = true;
		setTimeout(function() {
			if (($("#rightPartMainID").scrollTop() >= 3) && $scope.ifEnterTriangelUp == true) {
				$scope.ScrollTopD = $("#rightPartMainID").scrollTop();
				$scope.ScrollTopD = $scope.ScrollTopD - 3;
				$("#rightPartMainID").scrollTop($scope.ScrollTopD);
				//				console.log("ScrollTopDupupup:  " + $scope.ScrollTopD + "  ifEnterTriangelUp:  " + $scope.ifEnterTriangelUp)
				$scope.ifEnterTriangelUp = true;
				vm.EnterTriangelUp(data);
			} else if ($("#rightPartMainID").scrollTop() < 3) {
				$scope.ifEnterTriangelUp = false;
			}
		}, 10);
	}
	vm.LeaveTriangelUp = function(data) {
		$scope.ifEnterTriangelUp = false;
		//		console.log("ifEnterTriangelUp:  " + $scope.ifEnterTriangelUp);
	}

	$scope.ifEnterTriangelDown = true;
	vm.EnterTriangelDown = function(data) {
		//		console.log("downdowndowndown  " + $("#rightPartMainID").scrollTop());
		$scope.ifEnterTriangelDown = true;
		//		console.log("ScrollTopD:  " + $scope.ScrollTopD + "  ifEnterTriangelDown:  " + $scope.ifEnterTriangelDown)
		setTimeout(function() {
			if (($("#rightPartMainID").scrollTop() < ($("#getmainheight").outerHeight(true) - 690)) && $scope.ifEnterTriangelDown == true) {
				$scope.ScrollTopD = $("#rightPartMainID").scrollTop();
				$scope.ScrollTopD = $scope.ScrollTopD + 4;
				$("#rightPartMainID").scrollTop($scope.ScrollTopD);
				$scope.ifEnterTriangelDown = true;
				vm.EnterTriangelDown(data);
			} else if ($("#rightPartMainID").scrollTop() >= ($("#getmainheight").outerHeight(true) - 690)) {
				$scope.ifEnterTriangelDown = false;
			}
		}, 10);
	}
	vm.LeaveTriangelDown = function(data) {
		$scope.ifEnterTriangelDown = false;
		//		console.log("ifEnterTriangelDown:  " + $scope.ifEnterTriangelDown);
	}

	$scope.ifEnterTriangelLeft = true;
	vm.EnterTriangelLeft = function(data) {
		//		console.log("RightRightRightRight  " + $("#rightPartMainID").scrollLeft());
		$scope.ifEnterTriangelLeft = true;
		//		console.log("ScrollLeftD:  " + $scope.ScrollLeftD + "  ifEnterTriangelLeft:  " + $scope.ifEnterTriangelLeft)
		setTimeout(function() {
			if (($("#rightPartMainID").scrollLeft() >= 3) && $scope.ifEnterTriangelLeft == true) {
				$scope.ScrollLeftD = $("#rightPartMainID").scrollLeft();
				$scope.ScrollLeftD = $scope.ScrollLeftD - 3;
				$("#rightPartMainID").scrollLeft($scope.ScrollLeftD);
				$scope.ifEnterTriangelLeft = true;
				vm.EnterTriangelLeft(data);
			} else if ($("#rightPartMainID").scrollLeft() < 3) {
				$scope.ifEnterTriangelLeft = false;
			}
		}, 10);
	}
	vm.LeaveTriangelLeft = function(data) {
		$scope.ifEnterTriangelLeft = false;
		//		console.log("ifEnterTriangelLeft:  " + $scope.ifEnterTriangelLeft);
	}

	$scope.ifEnterTriangelRight = true;
	vm.EnterTriangelRight = function(data) {
		//		console.log("RightRightRightRight  " + $("#rightPartMainID").scrollLeft());
		$scope.ifEnterTriangelRight = true;
		//		console.log("ScrollLeftD:  " + $scope.ScrollLeftD + "  ifEnterTriangelRight:  " + $scope.ifEnterTriangelRight)
		setTimeout(function() {
			if (($("#rightPartMainID").scrollLeft() < ($("#RightTableDatePartID").outerWidth(true) - 926)) && $scope.ifEnterTriangelRight == true) {
				$scope.ScrollLeftD = $("#rightPartMainID").scrollLeft();
				$scope.ScrollLeftD = $scope.ScrollLeftD + 4;
				$("#rightPartMainID").scrollLeft($scope.ScrollLeftD);
				$scope.ifEnterTriangelRight = true;
				vm.EnterTriangelRight(data);
			} else if ($("#rightPartMainID").scrollLeft() >= ($("#RightTableDatePartID").outerWidth(true) - 926)) {
				$scope.ifEnterTriangelRight = false;
			}
		}, 10);
	}
	vm.LeaveTriangelRight = function(data) {
		$scope.ifEnterTriangelRight = false;
		//		console.log("ifEnterTriangelRight:  " + $scope.ifEnterTriangelRight);
	}

	$scope.obj_date = document.getElementById("RightTableDatePartID");
	$("#leftPartDetailContainID").scroll(function() {
		$scope.ScrollTopD1 = $("#leftPartDetailContainID").scrollTop();
		$scope.ScrollTopD = $scope.ScrollTopD1;
		$("#rightPartMainID").scrollTop($scope.ScrollTopD);
		//		console.log("ScrollTopD:  "+$scope.ScrollTopD+"      rightPartMainIDscrollTop:"+$("#rightPartMainID").scrollTop())
		$scope.obj_date.style.top = $("#rightPartMainID").scrollTop() + "px";
		//		$("#RightTableDatePartID").css("top",$("#rightPartMainID").scrollTop());
	})

	$("#rightPartMainID").scroll(function() {
		$scope.ScrollTopD = $("#rightPartMainID").scrollTop();
		$scope.ScrollTopD1 = $scope.ScrollTopD;
		$("#leftPartDetailContainID").scrollTop($scope.ScrollTopD1);
		$scope.obj_date.style.top = $("#rightPartMainID").scrollTop() + "px";
		//		$("#RightTableDatePartID").css("top",$("#rightPartMainID").scrollTop());
	})

	$scope.$watch('LeftPartDetailHeight', function() {
		if ($scope.LeftPartDetailHeight >= 620) {
			vm.useAddBottom = true;
			setTimeout(function() {
				$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
				$("#getmainheight").height($scope.LeftPartDetailHeight - 20);
				//				console.log("totalHeight:   " + $scope.LeftPartDetailHeight)
			}, 0);
		} else {
			vm.useAddBottom = false;
			setTimeout(function() {
				$scope.LeftPartDetailHeight = $("#GetLeftPartDetailHeight").outerHeight(true);
				$("#getmainheight").height($scope.LeftPartDetailHeight + 50);
				//				console.log("totalHeight:   " + $scope.LeftPartDetailHeight)
			}, 0);
		}
	})

	//	vm.draggable=function(){
	//		$("#getmainheight").draggable();
	//	}

	setTimeout(function() {
		setTimeout(function() {
			$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
		}, 0);
	}, 0);
	$scope.DateSizeChange = 3;
	vm.AddDateBiger = function() {
		if ($scope.DateSizeChange == 3) {
			vm.RightDateline15px = false;
			vm.RightDateline20px = false;
			vm.RightDateline30px = false;
			vm.RightDateline35px = true;
			$scope.DateSizeChange = 4;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		} else if ($scope.DateSizeChange == 4) {
			vm.RightDateline15px = false;
			vm.RightDateline20px = false;
			vm.RightDateline30px = false;
			vm.RightDateline35px = true;
			$scope.DateSizeChange = 4;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		} else if ($scope.DateSizeChange == 2) {
			vm.RightDateline15px = false;
			vm.RightDateline20px = false;
			vm.RightDateline30px = true;
			vm.RightDateline35px = false;
			$scope.DateSizeChange = 3;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		} else if ($scope.DateSizeChange == 1) {
			vm.RightDateline15px = false;
			vm.RightDateline20px = true;
			vm.RightDateline30px = false;
			vm.RightDateline35px = false;
			$scope.DateSizeChange = 2;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		}
	}
	vm.MinusDateSmaller = function() {
		if ($scope.DateSizeChange == 3) {
			vm.RightDateline15px = false;
			vm.RightDateline20px = true;
			vm.RightDateline30px = false;
			vm.RightDateline35px = false;
			$scope.DateSizeChange = 2;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		} else if ($scope.DateSizeChange == 2) {
			vm.RightDateline15px = true;
			vm.RightDateline20px = false;
			vm.RightDateline30px = false;
			vm.RightDateline35px = false;
			$scope.DateSizeChange = 1;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		} else if ($scope.DateSizeChange == 1) {
			vm.RightDateline15px = true;
			vm.RightDateline20px = false;
			vm.RightDateline30px = false;
			vm.RightDateline35px = false;
			$scope.DateSizeChange = 1;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		} else if ($scope.DateSizeChange == 4) {
			vm.RightDateline15px = false;
			vm.RightDateline20px = false;
			vm.RightDateline30px = true;
			vm.RightDateline35px = false;
			$scope.DateSizeChange = 3;
			setTimeout(function() {
				$scope.RightTableDatePartWidth = $("#RightTableDatePartID").outerWidth(true);
			}, 0);
		}
	}

	$scope.$watch('RightTableDatePartWidth', function() {
		$("#RightTablePartWidth").width($scope.RightTableDatePartWidth);
	})

	$scope.BottomMonthTotal = 0;
	vm.getBottomDateDetail = function() {
			for (var i = 0; i < vm.allRightBottomDate.length; i++) {
				var num = vm.allRightBottomDate[i].YearAndMonth.Month.length;
				$scope.BottomMonthTotal = $scope.BottomMonthTotal + num;
			}
			//			console.log($scope.BottomMonthTotal);
		}
		//$scope.BottomMonthWidthArray = [];
	setTimeout(function() {
		vm.getBottomDateDetail();
		$scope.BottomMonthWidth = 926 / $scope.BottomMonthTotal
			//		for(var i=0; i<$scope.BottomMonthTotal; i++){
			//			$scope.BottomMonthWidthArray[i] = $scope.BottomMonthWidth;
			//		}
			//		$(".right_bottom_date_month").width($scope.BottomMonthWidth);
	}, 0)

})