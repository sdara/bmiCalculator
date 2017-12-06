( function( height_feet, height_inches ) {
	var weight = 0;
	var bmi_categories = [
		'18.5',
		'24.9',
		'29.9'
	];
	
	var bmi_category_lbls = {
		'18.5': 'Normal',
		'24.9': 'Overweight',
		'29.9': 'Obese'
	};
	
	var height_in_inches = ( height_feet * 12 ) + height_inches;
	
	for( weight = 100; weight < 350; weight += 1 ) {
		if( weight ) {
			// BMI = ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
			var BMI = ( weight / ( height_in_inches * height_in_inches ) ) * 703;
			BMI = parseFloat( BMI.toFixed(1) );
			var label = 'Underweight';
			var i = 0;
			for( i = 0; i < bmi_categories.length; i += 1 ) {
				if( BMI >= parseFloat( bmi_categories[ i ] ) ) {
					label = bmi_category_lbls[ bmi_categories[ i ] ];
				}
			}
			console.log( BMI + ' ( ' + label + ' ) = ( ' + weight + ' / ( ' + height_in_inches + ' * ' + height_in_inches + ' ) * 703 ' );
		}
	}
}( 5, 10 ) );