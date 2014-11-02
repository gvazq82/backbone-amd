define([ 'backbone'], function(Backbone) {
	var router = Backbone.Router.extend({
		routes : {
			"home" : "home",
			"about" : "about",
			"contact" : "contact",
			"*other" : "home"
		},
		home : function() {
			AmdApp.executeController({
				"controller": 'home'
			});
		},
		about : function(query, page) {
			AmdApp.executeController({
				"controller": 'about'
			});
		},
		contact : function() {
			AmdApp.executeController({
				"controller": 'contact'
			});
		}
	});
	return router;
});