const swaggerJSDoc = require("swagger-jsdoc");
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Hello World",
			description: "A sample API",
			version: "1.0.0",
		},
	},
	apis: ["./api*.js"],
};

const spec = swaggerJSDoc(options);
