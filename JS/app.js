'use strict';

var IndexApp = angular.module('Calendar', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);

IndexApp.run(function($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on('$stateChangeStart',
		function(event, toState, toParams, fromState, fromParams) {
			console.log("from the state + " + fromState.name);
		});

	$rootScope.$on('$stateChangeSuccess',
		function(event, toState, toParams, fromState, fromParams) {
			console.log("$stateChangeSuccess!!!!" + toState.name);
			$rootScope.getCurrentName = $state.current.name;
			$rootScope.$broadcast('to-child', $rootScope.getCurrentName);
		});
});


IndexApp.controller("headerCtrl", function($scope, $state, $rootScope) {
	//	debugger
	var vm = this;
	console.log('test')

	vm.ProjectMenu = false;
	vm.Projectline = false;
	//	debugger
	vm.Projectline1 = false;
	vm.Projectline2 = false;
	vm.Projectline3 = false;
	vm.Projectline4 = false;
	vm.ReservationsMenu = false;
	vm.smnavContain = false;
	
	vm.smnavOpen = function(){
		vm.smnavContain = true;
	}
	
	vm.smnavClose = function(){
		vm.smnavContain = false;
	}

	vm.showline = function() {
		vm.ProjectMenu = true;
		vm.Projectline = true;
		vm.Projectline1 = false;
		vm.ReservationsMenu = false;
		vm.Projectline2 = false;
		vm.AdminMenu = false;
		vm.Projectline4 = false;
		vm.Projectline3 = false;
	}

	vm.showline1 = function() {
		vm.Projectline1 = true;
		vm.Projectline = false;
		vm.ProjectMenu = false;
		vm.Projectline3 = false;
		vm.ReservationsMenu = false;
		vm.Projectline2 = false;
		vm.AdminMenu = false;
		vm.Projectline4 = false;
	}

	vm.showline2 = function() {
		vm.ReservationsMenu = true;
		vm.Projectline1 = false;
		vm.Projectline = false;
		vm.ProjectMenu = false;
		vm.Projectline3 = false;
		vm.Projectline2 = true;
		vm.AdminMenu = false;
		vm.Projectline4 = false;
	}

	vm.showline3 = function() {
		vm.Projectline1 = false;
		vm.Projectline = false;
		vm.ProjectMenu = false;
		vm.Projectline3 = true;
		vm.ReservationsMenu = false;
		vm.Projectline2 = false;
		vm.AdminMenu = false;
		vm.Projectline4 = false;
	}

	vm.showline4 = function() {
		vm.AdminMenu = true;
		vm.Projectline1 = false;
		vm.Projectline = false;
		vm.ProjectMenu = false;
		vm.Projectline3 = false;
		vm.Projectline2 = false;
		vm.Projectline4 = true;
		vm.ReservationsMenu = false;
	}

	//	vm.hideline1 = function() {
	//		vm.Projectline1 = false;
	//	}
	//	vm.hideline = function() {
	//		if (vm.ProjectMenu == true) {
	//			vm.Projectline = true;
	//		} else {
	//			vm.Projectline = false;
	//		}
	//	}
	//	vm.hideline2 = function() {
	//		if (vm.ReservationsMenu == true) {
	//			vm.Projectline2 = true;
	//		} else {
	//			vm.Projectline2 = false;
	//		}
	//	}
	//	vm.hideline4 = function() {
	//		if (vm.AdminMenu == true) {
	//			vm.Projectline4 = true;
	//		} else {
	//			vm.Projectline4 = false;
	//		}
	//	}
	//	vm.hideline3 = function() {
	//		vm.Projectline3 = false;
	//	}
	//	vm.showProject = function() {
	//		vm.Projectline = true;
	//	};

	vm.hideProjectmenu = function() {
		vm.ProjectMenu = false;
//		vm.Projectline = false;
	};

	vm.hideReservationsmenu = function() {
		vm.ReservationsMenu = false;
//		vm.Projectline2 = false;
	};

	vm.hideAdminmenu = function() {
		vm.AdminMenu = false;
//		vm.Projectline4 = false;
	};
	
	vm.navEnter = function(){
		vm.Projectline4 = false
		vm.AdminMenu = false;
	}
	
	$rootScope.$on('to-child', function(d, data) {
		//debugger
		$rootScope.getCurrentName = data;
		console.log('11111name:' + $rootScope.getCurrentName)
	});
	
	$scope.$watch('getCurrentName', function() {
		console.log('22222name:' + $rootScope.getCurrentName)
		if ($rootScope.getCurrentName == 'home') {
			vm.Projectline1 = true
		} else {
			vm.Projectline1 = false
		}
		if ($rootScope.getCurrentName == 'addReservation' || $rootScope.getCurrentName == 'findReservation' || $rootScope.getCurrentName == 'findASlot' || $rootScope.getCurrentName == 'displayReservationConflicts' || $rootScope.getCurrentName == 'viewReservations') {
			vm.Projectline2 = true
		} else {
			vm.Projectline2 = false
		}
		if ($rootScope.getCurrentName == 'createProject'||$rootScope.getCurrentName == 'viewProject') {
			vm.Projectline = true
		} else {
			vm.Projectline = false
		}
		if ($rootScope.getCurrentName == 'aboutFAQ') {
			vm.Projectline3 = true
		} else {
			vm.Projectline3 = false
		}
		if ($rootScope.getCurrentName == 'masterData'|| $rootScope.getCurrentName == 'management'|| $rootScope.getCurrentName == 'useManagement') {
			vm.Projectline4 = true
		} else {
			vm.Projectline4 = false
		}
	});

})

IndexApp.config(function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
		.state('home', {
			url: "/home",
			views: {
				"lazyLoadView": {
					controller: 'homePageCtrl',
					templateUrl: 'tpls/home.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/home.js');
				}]
			},
		})
		.state('addReservation', {
			url: "/addReservation",
			views: {
				"lazyLoadView": {
					controller: 'addReservationCtrl as ARC',
					templateUrl: 'tpls/addReservation.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/addReservation.js');
				}]
			},
		})
		.state('findReservation', {
			url: "/findReservation",
			views: {
				"lazyLoadView": {
					controller: 'findReservationCtrl as FRC',
					templateUrl: 'tpls/findReservation.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/findReservation.js');
				}]
			},
		})
		.state('findASlot', {
			url: "/findASlot",
			views: {
				"lazyLoadView": {
					controller: 'findASlotCtrl as FASC',
					templateUrl: 'tpls/findASlot.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/findASlot.js');
				}]
			},
		})
		.state('displayReservationConflicts', {
			url: "/displayReservationConflicts",
			views: {
				"lazyLoadView": {
					controller: 'displayResConflictCtrl as DRCC',
					templateUrl: 'tpls/displayReservationConflicts.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/displayReservationConflicts.js');
				}]
			},
		})
		.state('viewReservations', {
			url: "/viewReservations",
			views: {
				"lazyLoadView": {
					controller: 'viewReservationsCtrl as VRC',
					templateUrl: 'tpls/viewReservations.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/viewReservations.js');
				}]
			},
		})
		.state('createProject', {
			url: "/createProject",
			views: {
				"lazyLoadView": {
					controller: 'createProjectCtrl as CPC',
					templateUrl: 'tpls/createProject.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/createProject.js');
				}]
			},
		})
		.state('viewProject', {
			url: "/viewProject",
			views: {
				"lazyLoadView": {
					controller: 'viewProjectCtrl as VPC',
					templateUrl: 'tpls/viewProject.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/viewProject.js');
				}]
			},
		})
		.state('aboutFAQ', {
			url: "/aboutFAQ",
			views: {
				"lazyLoadView": {
					controller: 'aboutFAQCtrl as AFC',
					templateUrl: 'tpls/aboutFAQ.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/aboutFAQ.js');
				}]
			},
		})
		.state('masterData', {
			url: "/masterData",
			views: {
				"lazyLoadView": {
					controller: 'masterDataCtrl as MDC',
					templateUrl: 'tpls/masterData.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/masterData.js');
				}]
			},
		})
		.state('management', {
			url: "/management",
			views: {
				"lazyLoadView": {
					controller: 'managementCtrl as MMC',
					templateUrl: 'tpls/management.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/management.js');
				}]
			},
		})
		.state('useManagement', {
			url: "/useManagement",
			views: {
				"lazyLoadView": {
					controller: 'useManagementCtrl as UMC',
					templateUrl: 'tpls/useManagement.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/useManagement.js');
				}]
			},
		})
		
})