requirejs.config({
    baseUrl: 'js/lib',
    urlArgs: new Date().getTime(),
    paths: {
        "app": '../app',
        "data": '../data',
        "jquery": 'jquery-2.1.1.min',
        "underscore": 'underscore'
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
