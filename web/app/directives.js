(function(){

	angular.module('app.directives', [])
		.directive('inputFocus', inputFocus)
		.directive('inputMaskNumber', inputMaskNumber);


	function inputFocus($parse){
		return function(scope, elm, attrs) {
			var model  = $parse(attrs.ngModel);
			var value = attrs.inputFocus;

			model.assign(scope, value);

			elm.bind('focus', function(){
				scope.$watch(model, function(nv){
					if(nv==value){
						model.assign(scope, '');
					}
				});
			});

		}
	}

	function inputMaskNumber(){
		return function(scope, elm, attrs){
			
			elm.bind('keydown', function(e){

				if([46, 8, 9, 27, 13].indexOf(e.keyCode) != -1 ){
					return;
				}

				if(attrs.inputMaskNumber=="dot"){
					if(e.keyCode==190){
						return;
					}
				}
				
				if(isNaN(parseFloat(e.key)) && !isFinite(e.key)){
					 e.preventDefault();
				}
			});

		}
	}

})();