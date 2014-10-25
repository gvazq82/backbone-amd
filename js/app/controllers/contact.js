define(['backbone','app/views/ContactView'], function(Backbone, ContactView){
	return {
		init: function(data){
			
		},
		run: function(container, data){
			
			new ContactView({
				el: container,
				model: new Backbone.Model()
			}).render();
		}
	};
});