define(['backbone','app/views/HomeView'], function(Backbone, HomeView){
	return {
		init: function(data){
			
		},
		run: function(container, data){
			new HomeView({
				el: container,
				model: new Backbone.Model()
			}).render();
		}
	};
});