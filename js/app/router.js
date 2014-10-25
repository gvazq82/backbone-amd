define([ 'backbone' ], function(Backbone) {
	var router = Backbone.Router.extend({
		routes : {
			"home" : "home",
			"about" : "about",
			"contact" : "contact",
			"" : "home"
		},
		executeController: function(options){
			var opts = $.extend({
				target: $('#main'),
				data: {},
				controller: '',
				method: 'run'
			}, options);
			
			require(['app/controllers/' + opts.controller], function(controller){
				if(opts.target){
					
				};
				controller.init(opts.data);
				controller[opts.method].call(this, opts.target, opts.data);
			});
		},
		home : function() {
			
			this.executeController({
				"controller": 'home'
			});
		},
		about : function(query, page) {
			console.log('about')
			this.executeController({
				"controller": 'about'
			});
		},
		contact : function() {
			console.log('Contact');
			this.executeController({
				"controller": 'contact'
			});
		}
	});
	return router;
});