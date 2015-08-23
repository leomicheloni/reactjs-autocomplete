var React = require("react");
var AutocompleteItem= require("./AutcompleteItem");

var Autocomplete = React.createClass({
	getInitialState: function(){
		return {items: [
									{"desc": "Ariel Ortega", "id": 1},
									{"desc": "Hernan Crespo", "id": 2},
									{"desc": "Rodrigo Mora", "id": 3},
									{"desc": "Matías Kraneviter", "id": 4},
									{"desc": "Leonardo Ponzio", "id": 5},
									{"desc": "Marcelo Barovero", "id": 6}
								]};
	},

	onKeyDown: function(){
		var code = event.keyCode;
            switch (code) {
                case 13:
                    //this.selectItem(this.state.data[this.state.highlightedIndex]);
                    break
                case 40:
                    //highlightedIndex < this.state.data.length - 1 && (highlightedIndex += 1);
                    break
                case 38:
                    //highlightedIndex > -1 && (highlightedIndex -= 1);
                    break
				default:
					this.filterContent(code);
					break;
            };
	},
	filterContent: function(code){
		var filteredItems = this.state.items.filter(function(item){
			return item.desc.indexOf(this.refs.searchInput.getDOMNode().value) > -1;
		}, this);
		this.setState({
			items: filteredItems
		})
	},
	render: function(){
		return (
			<div>
				<input ref="searchInput" onKeyDown={this.onKeyDown}>{this.state.currentText}</input>
				<ul>
					{this.state.items.map(function(item){
							return (<AutocompleteItem value={item.desc} />)
					})}
				</ul>
			</div>
		);
	}
})

module.exports = Autocomplete;