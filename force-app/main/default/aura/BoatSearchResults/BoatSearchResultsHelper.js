({
	
	onSearch : function(component,boatTypeId) {
		// Request from server
		console.info("boatTypeId in BoatSearchResultHelper.onSearch: " + boatTypeId);
		let action = component.get("c.getBoats");
		// assign empty boatTypeId
		if($A.util.isEmpty(boatTypeId)){
			action.setParams({"boatTypeId":""});		
		}else{			
			action.setParams({"boatTypeId":boatTypeId});		
		} 
		
		action.setCallback(this, function(result){

			var status = result.getState();
            if(status === "SUCCESS"){
             	if(!$A.util.isEmpty(result.getReturnValue())){
					let boats = result.getReturnValue();            		
					component.set("v.boats",boats);
				}else{
					component.set("v.boats",null);
				}
			}
			
        });
        $A.enqueueAction(action);
	}

})