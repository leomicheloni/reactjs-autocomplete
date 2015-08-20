var React = require("react");
var AutocompleteItem= require("./AutcompleteItem");

var Autocomplete = React.createClass({
	render: function(){
		return (
			<ul>
			{this.props.data.map(function(item){
					return (<AutocompleteItem value={item.desc} />)
			})}
			</ul>
		);
	}
})

module.exports = Autocomplete;