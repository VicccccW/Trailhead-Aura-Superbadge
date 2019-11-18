({

	doInit: function(component, event, helper) {

		//
		// !IMPORTANT:
		// CAN NOT USE LOGIC IN HELPER CLASS IN ORDER TO PASS CHALLENGES!
		//
		// get boat types for select option
		helper.getBoatTypeOptions(component);
		// calculate if render new button 
		//helper.showNewButton(component);	
		var isEnabled = $A.get("e.force:createRecord");
        if(isEnabled){
            component.set("v.showNewButton",true);
        } 	

	},

	handleBoatTypeChange: function(component, event, helper) {
		
		// get selected option, assign it to component attrribute
		const selectedOption = component.find("boatSelectionId").get("v.value");		
		console.info("selected boat type: " +  selectedOption);
		// set attribute
		component.set("v.selectedBoatType",selectedOption);		

	},

	onFormSubmit: function(component, event, helper){
		
		// get boatTypeId from select
		const selectedOption = component.get("v.selectedBoatType");
		console.info("search function started with: " + selectedOption);
		// get event cmp.getEvent("sampleComponentEvent");
		let formSubmit = component.getEvent("FormSubmit"); 		
		// set event parameters
        formSubmit.setParams({"formData":
                            	{"boatTypeId" : selectedOption}
		});
		console.info("event ready to be fired in boatSearchForm");		
		// fire event
		formSubmit.fire();
		
	},

	// handleNew: function(component, event, helper){
	// 	const selectedOption = component.get("v.selectedBoatType");
	// 	console.info("new function started with: " + selectedOption);		
	// 	helper.createBoatRecord(component,selectedOption);		
	// }
	handleNewBoatForm: function(component, event, helper){
        console.log("handleNewBoatForm handler called.")
        var boatTypeId = component.get("v.selectedBoatType");

        console.log(boatTypeId);
        var createNewBoat = $A.get("e.force:createRecord");
        createNewBoat.setParams({
            "entityApiName": "Boat__c",
        })
        if(! boatTypeId==""){
            createNewBoat.setParams({
                "defaultFieldValues": {'BoatType__c': boatTypeId}
           })
        }
        createNewBoat.fire();
    },
		
})