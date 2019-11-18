// boatsearch component controller
global class BoatSearch_Component_Controller {
	
	@AuraEnabled
	global static BoatType__c[] getBoatTypes() {
		return [SELECT Name, Id FROM BoatType__c ORDER BY Name LIMIT 100];
	}

}