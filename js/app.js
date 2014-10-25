define(['backbone','app/router'], function(Backbone, Router){
	var AmdApp = {
		View: Backbone.View.extend({}),
		Model: Backbone.Model.extend({}),
		Collection: Backbone.Collection.extend({})
	};
	AmdApp.Router = new Router();
	
	//--Create a method to start the application
	AmdApp.start = function(){
		if(Backbone.history){
			Backbone.history.start();
		}
	};
	
	return AmdApp;
});