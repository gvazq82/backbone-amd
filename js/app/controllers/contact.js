define([ 'app','backbone', 'app/views/ContactView', 'app/views/ErrorView',
		'app/collections/contacts' ], function(AmdApp, Backbone, ContactView,
		ErrorView, Contacts) {
	return {
		init : function(data) {

		},
		run : function(container, data) {
			var contacts = new Contacts([ {
				"name" : "Leonard",
				"lastName" : "Perez",
				"address" : "100 Main St",
				"city" : "Stamford",
				"state" : "CT",
				"zipCode" : 06856,
				"phone" : "123456789"
			}, {
				"name" : "Robert",
				"lastName" : "Audrey",
				"address" : "200 Alburn St",
				"city" : "New Heaven",
				"state" : "CT",
				"zipCode" : 06811,
				"phone" : "345678901"
			}, {
				"name" : "Zoe",
				"lastName" : "Dechanel",
				"address" : "30 Corral St",
				"city" : "Stratford",
				"state" : "CT",
				"zipCode" : 06946,
				"phone" : "9087634561"
			}

			]);

			var view = new ContactView({
				collection : contacts
			});
			
			view.on('add', function(){
				var addView = new AddView({
					model: new contacts.model()
				});
				addView.on('added', function(model){
					view.trigger('addContact', model);
				});
				AmdApp.Layout.modal.show(addView);
			});

			container.display(view);

		}
	};
});