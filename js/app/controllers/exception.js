define(['backbone','app/views/ContactView', 'app/views/ErrorView', 'app/collections/contacts'], 
		function(Backbone, ContactView, ErrorView, Contacts){
	return {
		init: function(data){
			
		},
		run: function(container, data){
			var contacts = new Contacts();
			
			contacts.fetch({
				"success": function(){
					var view = new ContactView({
						model: new Backbone.Model()
					});
					
					container.display(view);
				},
				"error": function(){
					var error = new ErrorView();
					
					container.display(error);
				}
			});
			
			
			
		}
	};
});