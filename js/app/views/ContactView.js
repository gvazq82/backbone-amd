define(
		[ 'backbone', 'underscore' ],
		function(Backbone, _) {
			var template = ['<div class="page-header">',
					'<h1>Contact</h1>',
					'</div>',
					'<div class="container">',
				      '<form class="form" role="form">',
				      	'<div class="form-group">',
				        '<input type="email" class="form-control" placeholder="Email address" required="" autofocus="">',
				        '</div>',
				        '<div class="form-group">',
				        '<textarea rows="4" cols="50" class="form-control" placeholder="Comments" required=""></textarea>',
				        '</div>',
				        '<button class="btn btn-success btn-block" type="submit">Submit</button>',
				      '</form>',
				    '</div>'];
			var homeView = Backbone.View.extend({
				render : function() {
					this.$el.html(_.template(template.join(""), this.model
							.toJSON()));
					return this;
				}
			});
			return homeView;
		});