define(['backbone','app/views/AboutView'], function(Backbone, AboutView){
	return {
		init: function(data){
			
		},
		run: function(container, data){
			
			var view = new AboutView({
				model: new Backbone.Model()
			});
			
			container.display(view);
		}
	};
});