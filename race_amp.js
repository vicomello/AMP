define(['pipAPI', 'https://vicomello.github.io/AMP/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'fbimage2.jpg'}, 
					{image : 'fblogo.jpg'}, 
					{image : 'instalogo.jpg'}, 
					{image : 'instalogo2.jpg'}, 
					{image : 'snap.jpg'}, 
					{image : 'tiktok.jpg'}, 
					{image : 'tiktoklogo.jpg'}, 
					{image : 'twitter.jpg'}, 
					{image : 'twitterpic.jpg'}, 
					{image : 'sc2.jpg'}//, 
					//{image : 'b11.jpg'}, 
					//{image : 'b12.jpg'}
				]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'fbimage2.jpg'}, 
					{image : 'fblogo.jpg'}, 
					{image : 'instalogo.jpg'}, 
					{image : 'instalogo2.jpg'}, 
					{image : 'snap.jpg'}, 
					{image : 'tiktok.jpg'}, 
					{image : 'tiktoklogo.jpg'}, 
					{image : 'twitter.jpg'}, 
					{image : 'twitterpic.jpg'}, 
					{image : 'sc2.jpg'}//,
					//{image : 'w11.jpg'}, 
					//{image : 'w12.jpg'}
				]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'neut01.jpg'}, {image : 'neut02.jpg'}, {image : 'neut03.jpg'}, {image : 'neut04.jpg'}, {image : 'neut05.jpg'}, {image : 'neut06.jpg'}, {image : 'neut07.jpg'}, {image : 'neut08.jpg'}, {image : 'neut09.jpg'}, {image : 'neut10.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://vicomello.github.io/AMP/imgs'
		}
	});
});