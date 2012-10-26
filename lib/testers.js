var structr = require("structr"),
Tester      = require("./tester");

module.exports = structr({

	/**
	 */

	"__construct": function() {
		this._source = {};
	},

	/**
	 */

	"register": function(name, message) {
		return this._source[name] = new Tester({
			testers: this,
			name: name,
			message: message
		});
	},

	/**
	 */

	"get": function(key) {
		return this._source[key];
	}
});