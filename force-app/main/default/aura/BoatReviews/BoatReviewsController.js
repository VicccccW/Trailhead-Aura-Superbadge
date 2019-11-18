({
	doInit : function(component, event, helper) {
		helper.onInit(component,event);
	},

	onUserInfoClick : function(component,event,helper){

		// get user id from data-userid
		var userId = event.currentTarget.getAttribute("data-userid");
		// navigate to user
        $A.get("e.force:navigateToSObject").setParams({
            "recordId" : userId,
        }).fire();

	},

	refresh : function(component,event,helper){
        console.log("refresh called on BoatReviews")
        doInit(component,event,helper);
	}
	
})