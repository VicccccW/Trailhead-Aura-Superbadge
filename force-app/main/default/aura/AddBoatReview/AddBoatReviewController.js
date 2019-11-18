({
	doInit: function(component,event,helper){

		helper.onInit(component,event);
		
	},

	onSave : function(component, event, helper){
				
		// create boatreview__c record using lsd
		// set boat review record - to avoid bugs		
		let currentBoat = component.get("v.boat");
		component.set("v.boatReview.Boat__c",currentBoat.Id);	
		component.find("service").saveRecord(function(saveResult) {
			if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {

				// Success! Prepare a toast UI message
				let resultsToast = $A.get("e.force:showToast");

				if(resultsToast){
					resultsToast.setParams({
						"title": "Boat Review Posted",
						"message": "Thanks for the feedback.",
						"type": "success"
					});
					// Update the UI: close panel, show toast, refresh account page
					// $A.get("e.force:closeQuickAction").fire();
					resultsToast.fire();					
				}else{
					alert("Boat Review Posted Successfully");
				}
												
				// fire event to switch to Reviews Tab
				let BoatReviewAdded=component.getEvent("BoatReviewAdded");
				BoatReviewAdded.fire();
				
				// re init form to allow new boatReviews
				helper.onInit(component,event);
			
			}
			else if (saveResult.state === "INCOMPLETE") {
				console.info("User is offline, device doesn't support drafts.");
			}
			else if (saveResult.state === "ERROR") {
				console.info('Problem saving record, error: ' + JSON.stringify(saveResult.error));
			}
			else {
				console.info('Unknown problem, state: ' + saveResult.state +', error: ' + JSON.stringify(saveResult.error));
			}
		});
		
	},
	
	onRecordUpdated: function(component,event,helper){

		console.info("recordUpdate of AddBoatReview");
		
		let changeType = event.getParams().changeType;
		if( changeType === "CHANGED" ){
			// Success! Prepare a toast UI message
			let resultsToast = $A.get("e.force:showToast");

			if(resultsToast){
				resultsToast.setParams({
					"title": "Changed",
					"message": "Review record changed.",
					"type": "warning"
				});
				// Update the UI: close panel, show toast, refresh account page
				// $A.get("e.force:closeQuickAction").fire();
				resultsToast.fire();					
			}else{
				alert("Review Changed");
			}
		}

	}


})