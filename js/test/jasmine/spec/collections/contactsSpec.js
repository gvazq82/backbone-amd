define([ "app", "app/collections/contacts", "app/models/contact" ], function(AmdApp, Contacts, Contact) {
	describe("Testing Collection", function() {
		// --Create a Collection
		var contacts = new Contacts([]);
		
		it("Expect the Backbome.Model is Contact", function() {
			expect(contacts.model).toEqual(Contact);
		});
	});
});