/** @jsx React.DOM */
'use strict'
const React = require('react');
const ReactDOM = require('react-dom');

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;
const hashHistory = require('react-router').hashHistory;

const Hello = require('./Hello');

const NoMatch = React.createClass({
    render: function(){
        return (<h2>404</h2>);
    }
});

const App = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Index</h2>
                <Link to="">Home</Link>
                <Link to="/hello">Link hello</Link>
                <Link to="/lol">Link 404</Link>
                <div>{this.props.children}</div>
            </div>);
    }
});

const Menu = React.createClass({
    render: function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/hello" component={Hello}/>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(
    (
        <Menu />
          ), document.getElementById('content'));