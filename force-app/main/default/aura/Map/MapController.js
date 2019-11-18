({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },

    onPlotMapMarker: function(component, event, helper) {
              
        var id = event.getParam('sObjectId');
        var latitude = event.getParam('lat');
        var longitude = event.getParam('long');
        var label = event.getParam('label');
        console.info("handling event on Map with id:" + id + ",label:" + label + ",lat|long:" + latitude + "|" + longitude);           
        //component.set("v.location, "{'latitude' : latitude, 'longitude' : longitude});

        // component.set('v.location', {
    	// 	latitude : latitude, 
    	// 	longitude : longitude
        // });
        
        var lat = event.getParam("lat");
		var long = event.getParam("long");
		console.log("onPlotMapMarker.lat: " + lat);
		console.log("onPlotMapMarker.long: " + long);
		component.set("v.location", {'lat' : lat, 'long' : long}); 
        
    }, 

    getLeafletMap : function(component, latitude, longitude) {

		var leafletMap = component.get('v.leafletMap');

		if (!leafletMap) {
	    	var mapContainer = component.find('map').getElement();
		    leafletMap = L.map(mapContainer, {zoomControl: false, tap: false}).setView([latitude, longitude], 13);
		    component.set('v.leafletMap', leafletMap);
		} else {
            leafletMap.setView([latitude, longitude], 13);
        }

        return leafletMap;
        
	}

})