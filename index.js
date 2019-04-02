/*
*
* Auhtor: Zsolt Gyula Angyal
* Title: Homework Assignment #3
* Description: Frontend for the already existing API
* Date: 2019.03.26.
*
* Primary file for he API
*
*/


// Dependencies
const server = require('./lib/server');

// Declare the app
let app = {};

// Init function
app.init = ()=>{
	// Start the server
	server.init();
};

// Execute
app.init();

// Export the app
module.exports = app;