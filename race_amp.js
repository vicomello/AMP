define(['pipAPI', 'https://vicomello.github.io/AMP/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b01.jpg'}, 
					{image : 'b02.jpg'}, 
					{image : 'b03.jpg'}, 
					{image : 'b04.jpg'}, 
					{image : 'b05.jpg'}, 
					{image : 'b06.jpg'}, 
					{image : 'b07.jpg'}, 
					{image : 'b08.jpg'}, 
					{image : 'b09.jpg'}, 
					{image : 'b10.jpg'}, 
					{image : 'b11.jpg'}, 
					{image : 'b12.jpg'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'w01.jpg'}, 
					{image : 'w02.jpg'}, 
					{image : 'w03.jpg'}, 
					{image : 'w04.jpg'}, 
					{image : 'w05.jpg'}, 
					{image : 'w06.jpg'}, 
					{image : 'w07.jpg'}, 
					{image : 'w08.jpg'}, 
					{image : 'w09.jpg'}, 
					{image : 'w10.jpg'}, 
					{image : 'w11.jpg'}, 
					{image : 'w12.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'ampumbrella.jpg'}, {image : 'amplamp.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://vicomello.github.io/AMP/imgs'
		}
	});
});