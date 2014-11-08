define([ "app", "app/layout" ], function(AmdApp, Layout) {
	describe("Testing Layout", function() {
		// --Create a Layout
		var layout = new Layout({
			model: new Backbone.Model()
		});
		layout.render();
		
		it("Expect to have a main Region", function() {
			expect(layout.mainRegion).not.toBe(undefined);
		});
		it("Expect to have a template", function() {
			expect(layout.$el).not.toBe(undefined);
		});
	});
});