'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

Parse.initialize('ZNBDTpwitBRguJj6RMpzbIAJ5yd5QTWucsz41sQb','eCpv4XIiCN0f1HX2rs3AfiTSui63u7HK3TqaSA9K');

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

var app = document.getElementById('app');

Parse.User.logOut();

React.render(
	<NavigationComponent />,
	document.getElementById('nav')
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		if(Parse.User.current()){
		React.render(<DashboardComponent />, app);
		}
		if(!Parse.User.current()) {
			React.render(<LoginComponent router={r} />, app);
		}
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();