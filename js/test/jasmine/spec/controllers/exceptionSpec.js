define([ "app", "app/controllers/exception", "app/layout", 'app/views/ErrorView'], function(AmdApp,
		Controller, Layout, ErrorView) {
	
	
	describe("Testing Exception Controller", function() {
		var appLayout = null;
		/*Create a Layout and render on main region*/
		beforeEach(function() {
			appLayout = new Layout();
			appLayout.render();
			//--Add Spy
			spyOn(appLayout.mainRegion, 'display');
			
			Controller.run(appLayout.mainRegion);
		});
		
		it("Expect the Exception Controller has a Init and Run Method", function() {
			expect(Controller.run).not.toBe(undefined);
			expect(Controller.init).not.toBe(undefined);
		});

		/* Include Spy to review the layout main region display was called. */
		it("Expect to render the Controller on Main Region", function() {
			expect(appLayout.mainRegion.display).toHaveBeenCalled();
		});
		
	});
});