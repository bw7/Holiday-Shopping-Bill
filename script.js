function HolidayShoppingBillController($scope){

	// Defines the model properties. The view will loop
	// through the gifts array and generate a li
	// element for every one of the items.

	$scope.gifts = [
		{
			name: 'Amazon Kindle Tablet',
			price: 99,
			active:true
		},{
			name: 'Artificial Christmas Tree',
			price: 68.87,
			active:false
		},{
			name: 'Running Shoes',
			price: 45.80,
			active:false
		},{
			name: 'Treadmill',
			price: 176.95,
			active:false
		}			
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Adds helper method for calculating total price

	$scope.total = function(){

		var total = 0;

		// Uses the AngularJS forEach helper method to
		// loop through the gifts array:

		angular.forEach($scope.gifts, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
