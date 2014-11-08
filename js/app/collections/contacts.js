define(['app', 'app/models/contact'], function(AmdApp, Contact){
	var contacts = AmdApp.Collection.extend({
		model: Contact,
		url: "assets/data/Contacts.js"
	});
	return contacts;
});