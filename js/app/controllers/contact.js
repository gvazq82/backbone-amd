define(['backbone','app/views/ContactView'], function(Backbone, ContactView){
	return {
		init: function(data){
			
		},
		run: function(container, data){
			
			var view = new ContactView({
				model: new Backbone.Model()
			});
			
			container.display(view);
		}
	};
});