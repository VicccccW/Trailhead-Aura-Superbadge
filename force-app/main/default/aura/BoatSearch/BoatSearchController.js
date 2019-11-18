({
	
	onFormSubmit : function(component, event, helper){
				
		console.info("event handler started in BoatSerch");
		let formData = event.getParam("formData");		
		const boatTypeId = formData.boatTypeId;
		console.info('boatTypeId in boatSearch: ' + boatTypeId );
		let BoatSearchResult = component.find("boatSearchResults").search(boatTypeId);		        
		console.info("auraMethodResult: " + BoatSearchResult);
		
	}
	
})