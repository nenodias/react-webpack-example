/** @jsx React.DOM */
'use strict'
var React = require('react')
module.exports = React.createClass({
    render: function(){
        var displayName = 'Hello React';
        return <div>{displayName}</div>
    }
})