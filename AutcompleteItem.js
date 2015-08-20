var React = require("react");

var AutocompleteItem = React.createClass({
	render: function(){
		return (<li>{this.props.value}</li>);
	}
})

module.exports = AutocompleteItem;