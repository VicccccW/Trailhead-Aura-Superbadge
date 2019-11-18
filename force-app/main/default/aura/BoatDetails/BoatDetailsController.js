({
	handleTabSelect: function(component,event,helper) {
		
		console.info("current tab: " + component.get("v.selectedTabId") );		
		const selectedTabId = event.getSource().get('v.id');
		console.info("tab clicked: " + selectedTabId + " in BoatDetail");
		// set tab id of tbs
		component.find("detailTabset").set("v.selectedTabId", selectedTabId ) 

	},
	
	onBoatSelected: function(component,event,helper){

		// set boat Id from BoatTile
		const boat = event.getParam("boat");
		console.log( "boat id BoatDetails: " + JSON.stringify(boat) );
		component.set("v.Id",boat.id);				
		//component.set("v.boat",boat);
		// reload record using lightning data service 
		let serviceRecordData = component.find("service");        
		serviceRecordData.set("v.recordId",boat.Id);
        serviceRecordData.reloadRecord();
		
	},

	onBoatReviewAdded: function(component,event,helper){

		// go to reviews tab after a review was added	
		console.log( "review added tab switch - event caught on boatDetails!");	
		component.find("detailTabset").set("v.selectedTabId", "boatreviewtab" );

		let boat = component.get("v.boat");
        console.log("recordUpdate in BoatDetails with boat id: " + boat.Id);
        let boatReviews = component.find("boatReviews");        
        console.log("auraMethodResult: " + boatReviews.refresh());

	},

	onRecordUpdated: function(component,event,helper){
				      
	}

})