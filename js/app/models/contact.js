define(['app'], function(AmdApp){
	var model = AmdApp.Model.extend({
		defaults: {
			"name" : "",
			"lastName" : "",
			"address" : "",
			"phone" : ""
		}
	});
	return model;
});