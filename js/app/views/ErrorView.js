define(
		[ 'app', 'backbone', 'underscore' ],
		function(AmdApp, Backbone, _) {
			var template = [
					'<div class="container">',
					'<div class="">',
					'<div class="text-danger">',
					'<h3>Ops!! Unexpected Error</h3>',
					'</div>',
					'<div class="">',
					'<span>There was an unexpected exception.</span>',
					'</div>',
					'</div>',
				    '</div>'];
			var erroView = AmdApp.View.extend({
				render : function() {
					this.$el.html(_.template(template.join("")));
					return this;
				}
			});
			return erroView;
		});