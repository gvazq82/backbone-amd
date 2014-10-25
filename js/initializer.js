requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-2.1.1.min',
        underscore: 'underscore'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_',
            deps: ['jquery']
        }
    }
});
require(['app'], function(AmdApp){
	AmdApp.start();
});
