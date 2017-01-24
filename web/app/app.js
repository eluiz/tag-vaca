(function(){


	angular.module('app', [
		'ngRoute',
		'restangular',
		'ngMaterial',
		'app.controllers',
		'app.services',
		'app.directives'
	]).config(config)

	.constant('Config', {
		'baseUrl': '/api'

	});

	function config($routeProvider, $locationProvider, RestangularProvider, Config){
	    $routeProvider
	      .when('/register', {
	        templateUrl: 'app/templates/registerCow.html',
	        controller: 'registerCowCtrl as vm'
	      })
	      .when('/list', {
	      	templateUrl: 'app/templates/listCows.html',
	      	controller: 'listCowsCtrl as vm'
	      });

	    RestangularProvider.setBaseUrl(Config.baseUrl);
	}

})();