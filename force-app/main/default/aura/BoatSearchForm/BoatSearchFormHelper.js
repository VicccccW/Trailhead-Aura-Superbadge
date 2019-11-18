({
	
	getBoatTypeOptions : function(component) {
		// Request from server
        let action = component.get("c.getBoatTypes");		
		action.setCallback(this, function(result){
            let boatTypes = result.getReturnValue();
            console.log(boatTypes);
            component.set("v.boatTypes", boatTypes);            
        });
        $A.enqueueAction(action);
	},

	// showNewButton: function (component) {
		
	// 	component.set('v.showNewButton', $A.get('e.force:createRecord'));
		
	// },

	createBoatRecord: function (component,selectedOption) {

		// lunch record creation modal
		let createRecordEvent = $A.get("e.force:createRecord");   
		// set object     
		createRecordEvent.setParams({
			"entityApiName": "Boat__c"
		});		
		// set predefined attributes to modal
		if(!$A.util.isEmpty(selectedOption)){
			createRecordEvent.setParams({			
				"defaultFieldValues": {
					"BoatType__c" : selectedOption		
				}
			});			
		}
		// fire modal
		createRecordEvent.fire();
	},

	showToast: function (component, title, type, message){

		// init Toast
		let resultsToast = $A.get("e.force:showToast");
		// prepare error toast
		resultsToast.setParams({
			"title": title,
			"type": type,
			"message": message
		});
		// fire toast with operation result
		resultsToast.fire();

	}

})