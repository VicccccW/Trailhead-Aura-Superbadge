({
	onBoatClick : function(component, event, helper) {

        const boatId = event.getSource().get("v.name");
        console.info("fire event with boat id: " + boatId + " from BoatTile");
        
        // fire boatId for boatSearchResult to handle
        let BoatSelect = component.getEvent("BoatSelect");		
        BoatSelect.setParams({
            "boatId" : boatId
        });
        BoatSelect.fire();

        // fire boat object for boatDetails to handle
        const myBoat = component.get("v.boat");      
        // let BoatSelected = component.getEvent("BoatSelected");		
        let BoatSelected = $A.get('e.c:BoatSelected');
        BoatSelected.setParams({
            "boat" : myBoat
        });
        BoatSelected.fire();
        console.info("fire event with boat: " + JSON.stringify(myBoat) + " from BoatTile");
        
        //send geolocation using event       
        const sObjectId = myBoat.Id;
        const lat       = myBoat.Geolocation__Latitude__s;
        const long      = myBoat.Geolocation__Longitude__s;
        const label     = myBoat.Name; 
        console.info("firing map event with sObjectId:" + sObjectId + ",label:" + label + ",lat|long:" + lat + "|" + long);       
        // get application event
        let PlotMapMarker = $A.get("e.c:PlotMapMarker");
        // set params to event
        PlotMapMarker.setParams({     
                        "lat"   : lat,    
                        "long"  : long,     
                        "label" : label,              
                        "SObjectId" : sObjectId});
        // fire
        PlotMapMarker.fire();                
        
    }

})