angular.module('Calendar').controller("findReservationCtrl", function($scope, $state) {
	var vm = this;
	console.log("FindReservationPage");
	
	$( "#FRStartDatePicker" ).datepicker();
	$( "#FREndDatePicker" ).datepicker();
})