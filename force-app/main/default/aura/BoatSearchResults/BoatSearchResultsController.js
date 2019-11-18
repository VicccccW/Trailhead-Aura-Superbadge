({
	doSearch : function(component, event, helper) {		
		helper.onSearch(component,"");
	},
   
    search: function(component, event, helper){

        let params = event.getParam('arguments');
        const boatTypeId = params.boatTypeId;
        console.log("boatTypeId extracted in BoatSearchResultsController: " + boatTypeId);
        component.set("v.boatTypeId", boatTypeId);
        helper.onSearch(component,boatTypeId);
		return "search complete.";
		
    },
    
    onBoatSelect : function(component, event, helper) {
        const boatId = event.getParam("boatId");
        console.log("selected boat id in BoatSearchResult: " + boatId);
        component.set("v.selectedBoatId",boatId);
    }
	
})