(function(){

	angular.module('app.services',[])
		.service('Alert', Alert);


	function Alert ($mdDialog){
		var vm = this;

		vm.error = error;
		vm.success = success;

		function Alert(title, msg){

	       	$mdDialog.show({
	         parent: angular.element(document.body),
	         clickOutsideToClose: true,
	         template:`
	           	<md-dialog aria-label="Alert">
	             <md-dialog-content class="md-dialog-content">
	             	<h2 class="md-title `+title+`">`+title+`</h2>
	             		<md-dialog-content-body>
	             		`+msg+`
	             		</md-dialog-content-body>
	             	</md-dialog-content>
	             	<md-dialog-actions>
	               		<md-button ng-click="vm.closeDialog()" class="md-primary">OK</md-button>
	            	</md-dialog-actions>
	           	</md-dialog>`,
	        controller: function($mdDialog){
	        	var vm = this;

	        	vm.closeDialog = function(){
	        		$mdDialog.hide();
	        	}
	        },
	        controllerAs: 'vm',
	        bindToController: true,
	        escapeToClose: true
	       });

		}

		function error(msg){
			Alert('erro', msg);
		}

		function success(msg){
			Alert('sucesso', msg);
		}
	}

})();