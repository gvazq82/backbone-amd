define(
		[ 'backbone', 'underscore' ],
		function(Backbone, _) {
			var template = [
					'<div class="jumbotron">',
					'<h1>Hello, world!</h1>',
					'<p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>',
					'<p><a href="#" class="btn btn-primary btn-lg" role="button">Learn more È</a></p>',
					'</div>' ];
			var homeView = Backbone.View.extend({
				render : function() {
					this.$el.html(_.template(template.join(""), this.model
							.toJSON()));
					return this;
				}
			});
			return homeView;
		});