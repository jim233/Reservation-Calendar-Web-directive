angular.module('Calendar').controller("findASlotCtrl", function($scope, $state) {
	var vm = this;
	console.log("findASlotPage");
	
	$( "#FSStartDatePicker" ).datepicker();
	$( "#FSEndDatePicker" ).datepicker();
})