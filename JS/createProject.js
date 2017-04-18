angular.module('Calendar').controller("createProjectCtrl", function($scope, $state) {
	var vm = this;

	console.log("createProjectPage");
	$scope.goAddReservation = function() {
		$state.go('addReservation');
	}

	vm.getTableReturn = [{
		ShowRow: 'true',
		RequestID: '42485',
		RequestType: "Country Add",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1461571739037)/",
		LeadAI: "TRINEXAPAC-ETHYL",
		Country: "Ireland",
		CodeDueDate: "/Date(1462435739037)/",
		TradeName: "Tempo",
		PackSize: "12x1 L",
		Status: "Complete",
		FirstSale: "2/1/2017 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '3837r',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '3837b',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383761',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383762',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383763',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383764',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383765',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383766',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383767',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383768',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383769',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '383760',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376a',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376b',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376c',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376d',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, {
		ShowRow: 'true',
		RequestID: '38376e',
		RequestType: "New Pack",
		Originator: "Mike Aldwinckle",
		Date: "/Date(1426153683190)/",
		LeadAI: "PINOXADEN",
		Country: "Ireland",
		CodeDueDate: "/Date(1427731200000)/",
		TradeName: "Croplink Avena (Pro)",
		PackSize: "4x5 L",
		Status: "Complete",
		FirstSale: "3/1/2016 12:00:00 AM"
	}, ];

	vm.pageSize = 5;
	vm.pages = Math.ceil(vm.getTableReturn.length / vm.pageSize);
	console.log("!! + " + vm.pages);
	vm.newPages = vm.pages > 5 ? 5 : vm.pages;
	vm.pageList = [];
	vm.selPage = 1;

	vm.setData = function() {
		vm.pageTableRepeat = vm.getTableReturn.slice((vm.pageSize * (vm.selPage - 1)), (vm.selPage * vm.pageSize));
		//      	for (var i=0; i<vm.pageTableRepeat.length; i++) {
		//			vm.pageTableRepeat[i].show = true;
		//		}
	}

	vm.pageTableRepeat = vm.getTableReturn.slice(0, vm.pageSize);

	for (var i = 0; i < vm.newPages; i++) {
		vm.pageList.push(i + 1);
	}
	vm.selectPage = function(page) {
		if (page < 1 || page > vm.pages) return;
		if (page > 2) {
			var newpageList = [];
			for (var i = (page - 3); i < ((page + 2) > vm.pages ? vm.pages : (page + 2)); i++) {
				newpageList.push(i + 1);
			}
			vm.pageList = newpageList;
		}
		vm.selPage = page;
		vm.setData();
		vm.isActivePage(page);
		console.log("page is：" + page);
	};
	vm.isActivePage = function(page) {
		return vm.selPage == page;
	};

	$scope.Previous = function() {
		vm.selectPage(vm.selPage - 1);
	}

	$scope.Next = function() {
		vm.selectPage(vm.selPage + 1);
	};

	$scope.DeleteRow = true;

	vm.DeleteData = function(dataNumber) {
		vm.pageTableRepeat[dataNumber].ShowRow = false;
		console.log('aaaa' + vm.pageTableRepeat[dataNumber].ShowRow)
		vm.pageTableRepeat.splice(dataNumber, 1);
		console.log(vm.pageTableRepeat);
		console.log(vm.getTableReturn);
		//		$scope.DeleteRow=dataNumber;
		//		console.log($scope.DeleteRow+'hahahaha')
		//		vm.getTableReturn[(vm.selPage-1)*5 + dataNumber].show = false;
		//		console.log(vm.pageTableRepeat);
		//		self.location.reload();  //刷新本页
		//		console.log(vm.getTableReturn);
	}

	$scope.PrintTableToExcel=function(objTab) {
		var objTab = document.getElementById(objTab);
		console.log(objTab);
		
		try {
			var xls = new ActiveXObject("Excel.Application");
		} catch (e) {
			alert(e)
				//alert( "要打印该表，您必须安装Excel电子表格软件，同时浏览器须使用“ActiveX 控件”，您的浏览器须允许执行控件。 请点击【帮助】了解浏览器设置方法！");
			return false;
		}
		xls.visible = true;
		var xlBook = xls.Workbooks.Add;
		var xlsheet = xlBook.Worksheets(1);
		var x = 1;
		var y = 1;
		for (var i = 0; i < objTab.rows.length; i++) {
			y = 1;
			for (var j = 0; j < objTab.rows[i].cells.length; j++) {
				xlsheet.Cells(x, y).Value = objTab.rows[i].cells[j].innerHTML;
				xlsheet.Cells(x, y).Borders.LineStyle = 1;
				y++;
			}
			x++;
		}
		xlsheet.Columns.AutoFit; //自动适应大小
		return;
	}
	
})