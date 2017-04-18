angular.module('Calendar').controller("addReservationCtrl", function($scope, $state) {
	var vm = this;
	console.log("AddReservationPage");
	
	$( "#ARStartDatePicker" ).datepicker();
	$( "#AREndDatePicker" ).datepicker();
	
	vm.SearchClick=function(){
		console.log($("#ARStartDatePicker").val());
		console.log(vm.ARStartDate);
	}
	
	
})