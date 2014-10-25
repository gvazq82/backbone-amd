define(['backbone','app/views/AboutView'], function(Backbone, AboutView){
	return {
		init: function(data){
			
		},
		run: function(container, data){
			
			new AboutView({
				el: container,
				model: new Backbone.Model()
			}).render();
		}
	};
});