define([ "app/router" ], function(Router) {
	describe("Testing Router", function() {
		// --Create a Router
		var router = new Router();

		it("The number of routes has not to be empty", function() {
			expect(router.routes).not.toBe(undefined);
		});
		it("There should be a hanlder for home", function() {
			expect(router.routes["home"]).toBeDefined();
			expect(router.home).toBeDefined();
		});
		it("There should be a hanlder for contact", function() {
			expect(router.routes["contact"]).toBeDefined();
			expect(router.contact).toBeDefined();
		});
		it("There should be a hanlder for about", function() {
			expect(router.routes["about"]).toBeDefined();
			expect(router.about).toBeDefined();
		});
		it("There should be a hanlder for other routes", function() {
			expect(router.routes["*other"]).toBeDefined();
		});

	});
});