define(['backbone','app/router', 'app/layout'], function(Backbone, Router, Layout){
	/*
	 * Define the AmdApp object with the basic elements available in the App.
	 */
	var AmdApp = {
		View: Backbone.View.extend({}),
		Model: Backbone.Model.extend({}),
		Region: Backbone.View.extend({
			currentView : null,
			display: function(view){
				//--Remove existent View
				if(this.currentView){
					this.currentView.remove();
				}
				this.currentView = view;
				this.$el.html(view.render().$el);
			}
		}),
		Collection: Backbone.Collection.extend({})
	};
	/*
	 * Create a method to execute all the controllers on the application 
	 * @param {Object} Options: The object with the available options to execute the controller.
	 */
	AmdApp.executeController = function(options){
		var opts = $.extend({
			target: AmdApp.Layout.mainRegion,
			data: {},
			controller: '',
			topMenu: null,
			method: 'run'
		}, options);
		
		//--Call dynamically the controller
		require(['app/controllers/' + opts.controller], function(controller){
			controller.init(opts.data);
			controller[opts.method].call(this, opts.target, opts.data);
		});
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