define([ 'backbone'], function(Backbone) {
	var router = Backbone.Router.extend({
		routes : {
			"home" : "home",
			"about" : "about",
			"contact" : "contact",
			"" : "home"
		},
		home : function() {
			console.log('home');
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