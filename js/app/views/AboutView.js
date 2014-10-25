define(['backbone', 'underscore'], function(Backbone, _){
	var template = ['<div class="page-header">',
    '<h1>About</h1>',
    '</div>',
    '<div class="well">',
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>',
    '</div>'];
	var homeView = Backbone.View.extend({
		render: function(){
			this.$el.html(_.template(template.join(""), this.model.toJSON()));
			return this;
		}
	});
	return homeView;
});