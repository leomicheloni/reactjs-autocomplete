var React = require("react");
var Autocomplete = require("./autocomplete");

var items = [
{"desc": "Ariel Ortega", "id": 1},
{"desc": "Hernan Crespo", "id": 2},
{"desc": "Rodrigo Mora", "id": 3},
{"desc": "Matías Kraneviter", "id": 4},
{"desc": "Leonardo Ponzio", "id": 5},
{"desc": "Marcelo Barovero", "id": 6}
];

React.render(<Autocomplete data={items} />, document.getElementById("container"));