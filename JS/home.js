angular.module('Calendar').controller("homePageCtrl", function($scope, $state) {
	console.log("HomePage");
	$scope.goAddReservation = function(){
		$state.go('addReservation');
	}
	
})