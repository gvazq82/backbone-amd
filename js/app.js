define(['backbone','app/router', 'app/layout'], function(Backbone, Router, Layout){
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
				topMenu: null,
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
	AmdApp.start = function(mainContainer){
		AmdApp.Router = new Router();
		//--Create Layout
		AmdApp.Layout = new Layout({
			el: $(mainContainer),
			model: new Backbone.Model()
		}).render();
		
		AmdApp.Layout.trigger("updateMenu");
		
		$(window).on("hashchange", function(){
			AmdApp.Layout.trigger("updateMenu");
		});
		
		if(Backbone.history){
			Backbone.history.start();
		}
	};
	
	return window.AmdApp = AmdApp;
});