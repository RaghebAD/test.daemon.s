'use strict';

module.exports = {
	serviceName: "singleDaemon1",
	serviceGroup: "test",
	servicePort: 3010,
	type: 'daemon',
	prerequisites: {},
	serviceVersion: 1,
	main: "index.js",
	errors: {},

	"schema": {
		"testJob": {
			"l": "test Job"
		}
	}
};