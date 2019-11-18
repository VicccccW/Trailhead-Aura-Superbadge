({
	onInit : function(component,event) {

		let boat = component.get("v.boat");       
		console.info("boatReviews started with boat id: " + boat.Id); 
		
		// Request from server
		let action = component.get("c.getAll");	
		action.setParams({"boatId":boat.Id});

		action.setCallback(this, function(result){

			var status = result.getState();
            if(status === "SUCCESS"){
             	if(!$A.util.isEmpty(result.getReturnValue())){
					let boatReviews = result.getReturnValue();
					console.log(boatReviews);
					component.set("v.boatReviews", boatReviews);   
				}else{
					component.set("v.boatReviews", null);
				}
			}else{
				console.info("Apex error: " + result );
			}
                     
        });
		$A.enqueueAction(action);
		
	},

	showToast: function (component, title, type, message){

		// init Toast
		let resultsToast = $A.get("e.force:showToast");
		if(resultsToast){
			// prepare error toast
			resultsToast.setParams({
				"title": title,
				"type": type,
				"message": message
			});
			// fire toast with operation result
			resultsToast.fire();
		}else{
			alert(title + ' \n. ' + message);
		}
		
	}

})