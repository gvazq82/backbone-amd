define([ 'backbone', 'underscore' ], function(Backbone, _) {
	var template = [ '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">',
	        '<div class="container-fluid">',
				'<ul class="nav navbar-nav pull-right">',
				'<li class="active"><a href="#home">Home</a></li>',
				'<li><a href="#about">About</a></li>',
				'<li><a href="#contact">Contact</a></li>', '</ul>',
				'<div class="navbar-header">',
					'<h3 class="text-muted">AMD-Basic</h3>', 
				'</div>',
			'</div>',
			'</div>',
			'<div class="container" style="margin-top:75px;">', 
			'<div id="main" class="row main"></div>', 
			'</div>'];
	var Layout = Backbone.View.extend({
		mainRegion: null,
		initialize: function(){
			this.on("updateMenu", this.updateMenuOption);
		},
		render : function() {
			this.$el.html(_.template(template.join(""), this.model.toJSON()));
			this.mainRegion = new AmdApp.Region({
				el: this.$("#main")
			});
			return this;
		},
		updateMenuOption: function(){
			$('.navbar-nav').find('.active').removeClass('active');
			$('.navbar-nav').find('a[href="'  + window.location.hash + '"]').parent().addClass('active');
		}
	});

	return Layout;
});