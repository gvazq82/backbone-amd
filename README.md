backbone-amd
============

Create a scalable front-end application using Backbone JS, Underscore JS, Require JS and Bootstrap.

Requirements
============
This code is really flexible and does not require an application Server or Web server, the main idea is just to describe the code organization and components.


The Problem
============

According to the Backbone Documentation "Backbone should continue to be a tool that gives you the freedom to design the full experience of your web application", this leaves so many options for the developers to define their own implementation for the application, leaving the architecture decisions be defined according to the developer expertise. This flexibility allows to create great variety of implementations but also open the window to have poor and not scalable application code implementations.

The JavaScript Tools:

RequireJS (http://requirejs.org/)
"It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code"

BackboneJS (http://backbonejs.org/)
"Backbone is an attempt to discover the minimal set of data-structuring (models and collections) and user interface (views and URLs) primitives that are generally useful when building web applications with JavaScript"

Bootstrap(http://getbootstrap.com/)
"Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system."

JasmineJS(http://jasmine.github.io/2.0/introduction.html)
"Jasmine is a behavior-driven development framework for testing JavaScript code."
 

The Design
===========

These are the main considerations for the design:

1.- app.js: Define the base Application Object called "AmdApp" that defines and initialize the main application components.
2.- layout.js: Define a Layout file responsible to handle the Main display for the application.
3.- AmdApp.executeController: Create a generic component to call the different modules or controllers.
4.- Controller: Create atomic pieces of functionality called "controllers" that are responsible to handle a particular functionality. The controller receives the data and the section where the "module" has to be displayed and does not know anything about the layout, allowing to the "Main Handler" to determinate where to display each module.
5.- router.js: Provide the mapping for the different URLs available in the application and the controller to execute the functionality.

Testing
====
I decided to integrate some JasmineJS spec files just to demostrate how this can be integrated to RequireJS and BackboneJS.


UI Considerations
=================
For this application, I am using Bootstrap to style the pages as it provides the classes to style my application without a big learning curve to focus the development in the main objective that is JavaScript.




 
