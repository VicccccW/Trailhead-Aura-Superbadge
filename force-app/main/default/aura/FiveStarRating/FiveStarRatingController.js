({
	afterScriptsLoaded : function(component, event, helper) {
	
		// define vars
		var maxRating 		= 5;
		var readOnly 		= component.get('v.readonly');
		var domEl 			= component.find("ratingarea").getElement();
		var currentRating 	= component.get('v.value');
		var callback 		= function(rating) { component.set('v.value',rating); }

		// call third-part function
		component.ratingObj = rating( domEl, currentRating, maxRating, callback, readOnly); 

	},

	onValueChange: function(component,event,helper) {

		if (component.ratingObj) {
			var value = component.get('v.value');
			component.ratingObj.setRating(value,false);
		}

	}

})