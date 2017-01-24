(function(){

	angular.module('app.controllers', [])
		.controller('registerCowCtrl', registerCowCtrl)
		.controller('listCowsCtrl', listCowsCtrl);

	function registerCowCtrl($location, Alert, Restangular){
		var vm = this;

		vm.salvar = salvar;
		vm.listar = listar;

		function listar(){
			$location.path('/list');
		}

		function salvar(){
			Restangular.all('cows').post(vm.cow).then(function(){
				Alert.success('Vaca cadastrada com sucesso!');
				vm.cow = {};
			}, function(){
				Alert.error('Ocorreu algum problema, por favor tente mais tarde.');
			})
		}

	}


	function listCowsCtrl($location, Alert, Restangular, $mdDialog){
		var vm = this;

		vm.cows = [];
		
		vm.pastoMensal = pastoMensal;
		vm.custoAnual = custoAnual;
		vm.excluir = excluir;
		vm.cadastrar = cadastrar;

		getCows();

		function getCows(){
			Restangular.all('cows').getList().then(function(cows){
				angular.forEach(cows, function(cow){
					cow.pastoMensal = pastoMensal(cow.weight);
					cow.custoAnual = custoAnual(cow);
				});
				vm.cows = cows;
			});

		}

		function pastoMensal(weight){
			return Number( (((weight/100)*0.6)*30).toFixed(2) );
		}

		function custoAnual(cow){
			var custoPorAnoRestante = cow.price/(20-cow.age);
			var pastoAnual = pastoMensal(cow.weight)*12;
			return Number( (custoPorAnoRestante + pastoAnual).toFixed(2) );
		}

		function excluir(id){

			var confirm = $mdDialog.confirm()
				.title('Tem certeza que deseja excluir?')
				.ok('Sim')
				.cancel('Não');

			$mdDialog.show(confirm).then(function(){

				Restangular.one('cows',id).remove().then(
					function(){
						Alert.success('Vaca excluida com sucesso!');
						getCows();
				}, function(){
						Alert.error('Ocorreu algum problema, por favor tente mais tarde.');
				});
			}, function(){
				return;
			});

		}

		function cadastrar(){
			$location.path('/register');
		}
	}

})();