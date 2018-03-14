// const friends = require('app/data/friends.js');
const express = require("express");
const bodyParser = require("body-parser"); 
const path = require("path");

var app = express();

app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




const port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() { 
        console.log(`Started server on  ${port}...`); 
});


  // module.exports = app;


  //================================================================
  // things I need to complete 
  // the math function that shows the best match for users new friend (and display in model)
  // move files into correct folders and require them correctly 
  //