define(['backbone','app/router'], function(Backbone, Router){
	var AmdApp = {
		View: Backbone.View.extend({}),
		Model: Backbone.Model.extend({}),
		Collection: Backbone.Collection.extend({}),
		/*
		 * Create a method to execute all the controllers on the application 
		 * 
		 */
		executeController: function(options){
			var opts = $.extend({
				target: $('#main'),
				data: {},
				controller: '',
				method: 'run'
			}, options);
			
			//---Clean the target before to display the new View
			if(opts.target){
				opts.target.html('');
			}
			//--Call dynamically the controller
			require(['app/controllers/' + opts.controller], function(controller){
				controller.init(opts.data);
				controller[opts.method].call(this, opts.target, opts.data);
			});
		}
	};
	
	//--Create a method to start the application
	AmdApp.start = function(){
		AmdApp.Router = new Router();
		
		if(Backbone.history){
			Backbone.history.start();
		}
	};
	
	return window.AmdApp = AmdApp;
});