define(['backbone', 'underscore'], function(Backbone, _){
	var template = '';
	var homeView = Backbone.View.extend({
		render: function(){
			this.$el.html(_.template(template, this.model));
			return this;
		}
	});
	return homeView;
});