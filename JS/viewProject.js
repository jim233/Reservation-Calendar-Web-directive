angular.module('Calendar').controller("viewProjectCtrl", function($scope, $state) {
	var vm = this;
	console.log("viewProjectPage");
	
	$scope.goAddReservation = function(){
		$state.go('viewReservations');
	}
	
	vm.getTableReturn = [
	{ RequestID: '42485', RequestType: "Country Add", Originator: "Mike Aldwinckle", Date: "/Date(1461571739037)/", LeadAI: "TRINEXAPAC-ETHYL", Country: "Ireland", CodeDueDate: "/Date(1462435739037)/", TradeName: "Tempo", PackSize: "12x1 L", Status: "Complete", FirstSale: "2/1/2017 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '3837r', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '3837b', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383761', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383762', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383763', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383764', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383765', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383766', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383767', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383768', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383769', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383760', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376a', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376b', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376c', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376d', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376e', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
    ];


    vm.pageSize = 5;
    vm.pages = Math.ceil(vm.getTableReturn.length / vm.pageSize);
    console.log("!! + " + vm.pages);
    vm.newPages = vm.pages > 5 ? 5 : vm.pages;
    vm.pageList = [];
    vm.selPage = 1;

    vm.setData = function () {
        vm.pageTableRepeat = vm.getTableReturn.slice((vm.pageSize * (vm.selPage - 1)), (vm.selPage * vm.pageSize));
    }

    vm.pageTableRepeat = vm.getTableReturn.slice(0, vm.pageSize);
    for (var i = 0; i < vm.newPages; i++) {
        vm.pageList.push(i + 1);
    }
    vm.selectPage = function (page) {
        if (page < 1 || page > vm.pages) return;
        if (page > 2) {
            var newpageList = [];
            for (var i = (page - 3) ; i < ((page + 2) > vm.pages ? vm.pages : (page + 2)) ; i++) {
                newpageList.push(i + 1);
            }
            vm.pageList = newpageList;
        }
        vm.selPage = page;
        vm.setData();
        vm.isActivePage(page);
        console.log("page is：" + page);
    };
    vm.isActivePage = function (page) {
        return vm.selPage == page;
    };

    $scope.Previous = function () {
        vm.selectPage(vm.selPage - 1);
    }

    $scope.Next = function () {
        vm.selectPage(vm.selPage + 1);
    };
    
    
    vm.getTableReturn1 = [
	{ RequestID: '42485', RequestType: "Country Add", Originator: "Mike Aldwinckle", Date: "/Date(1461571739037)/", LeadAI: "TRINEXAPAC-ETHYL", Country: "Ireland", CodeDueDate: "/Date(1462435739037)/", TradeName: "Tempo", PackSize: "12x1 L", Status: "Complete", FirstSale: "2/1/2017 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '3837r', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '3837b', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383761', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383762', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383763', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383764', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383765', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
    ];


    vm.pageSize1 = 5;
    vm.pages1 = Math.ceil(vm.getTableReturn1.length / vm.pageSize1);
    console.log("!! + " + vm.pages1);
    vm.newPages1 = vm.pages1 > 5 ? 5 : vm.pages1;
    vm.pageList1 = [];
    vm.selPage1 = 1;

    vm.setData1 = function () {
        vm.pageTableRepeat1 = vm.getTableReturn1.slice((vm.pageSize1 * (vm.selPage1 - 1)), (vm.selPage1 * vm.pageSize1));
    }

    vm.pageTableRepeat1 = vm.getTableReturn1.slice(0, vm.pageSize1);
    for (var i = 0; i < vm.newPages1; i++) {
        vm.pageList1.push(i + 1);
    }
    vm.selectPage1 = function (page) {
        if (page < 1 || page > vm.pages1) return;
        if (page > 2) {
            var newpageList1 = [];
            for (var i = (page - 3) ; i < ((page + 2) > vm.pages1 ? vm.pages1 : (page + 2)) ; i++) {
                newpageList1.push(i + 1);
            }
            vm.pageList1 = newpageList1;
        }
        vm.selPage1 = page;
        vm.setData1();
        vm.isActivePage1(page);
        console.log("page is：" + page);
    };
    vm.isActivePage1 = function (page) {
        return vm.selPage1 == page;
    };

    $scope.Previous1 = function () {
        vm.selectPage1(vm.selPage1 - 1);
    }

    $scope.Next1 = function () {
        vm.selectPage1(vm.selPage1 + 1);
    };
})