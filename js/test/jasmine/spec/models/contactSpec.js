define([ "app", "app/models/contact" ], function(AmdApp, Contact) {
	describe("Testing Model", function() {
		// --Create a Model
		var contacts = new Contact();
		
		it("Expect the Backbome.Model default values", function() {
			expect(contacts.get("name")).toEqual("");
			expect(contacts.get("lastName")).toEqual("");
			expect(contacts.get("address")).toEqual("");
			expect(contacts.get("phone")).toEqual("");
		});
	});
});