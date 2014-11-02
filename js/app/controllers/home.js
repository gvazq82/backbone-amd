define(['backbone','app/views/HomeView'], function(Backbone, HomeView){
	return {
		init: function(data){
			
		},
		run: function(container, data){
			
			var view = new HomeView({
				model: new Backbone.Model()
			});
			
			container.display(view);
		}
	};
});