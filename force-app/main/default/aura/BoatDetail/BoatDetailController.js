({
	doInit: function(component,event,helper) {		
        // calculate show details button		

    },
    
    onFullDetails: function(component,event,helper){
        
        // fire record details of selected boat
        $A.get("e.force:navigateToSObject").setParams({
            "recordId": component.get("v.boat.Id")
        }).fire();

    }

})