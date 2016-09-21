/** @jsx React.DOM */
'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

var Hello = require('./Hello');
var factory = React.createFactory(Hello);

ReactDOM.render(factory(), document.getElementById('content'));