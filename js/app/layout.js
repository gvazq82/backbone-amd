define([ 'backbone', 'underscore' ], function(Backbone, _) {
	var template = [ '<div class="navbar navbar-inverse">',
			'<ul class="nav navbar-nav pull-right">',
			'<li class="active"><a href="#home">Home</a></li>',
			'<li><a href="#about">About</a></li>',
			'<li><a href="#contact">Contact</a></li>', '</ul>',
			'<h3 class="text-muted">Project name</h3>', '</div>',
			'<div class="container">',
			'<div id="main" class="row main"></div>', '<div class="footer">',
			'<p>© Company 2014</p>', '</div>', '</div>' ];
	var Layout = Backbone.View.extend({
		initialize: function(){
			this.on("updateMenu", this.updateMenuOption);
		},
		render : function() {
			this.$el.html(_.template(template.join(""), this.model.toJSON()));
			return this;
		},
		updateMenuOption: function(){
			console.log('updateMenu')
			$('.navbar-nav').find('.active').removeClass('active');
			$('.navbar-nav').find('a[href="'  + window.location.hash + '"]').parent().addClass('active');
		}
	});

	return Layout;
});