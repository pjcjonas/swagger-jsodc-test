const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const app = express();
const fs = require("fs");

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

// ADDED THIS LINE
fs.writeFileSync("./swagger.json", JSON.stringify(spec));
