const friends = require('./data/friends.js');
const express = require("express");
const bodyParser = require("body-parser"); 
const path = require("path");

const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing for the home page 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

// Routing for the survey page 
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

// Routing for the addfriends api 
  app.post("/api/addfriends", function(req, res) {
    // console.log("Added to friendsArray!", req.body);
    res.send(friends.add(req.body));
});

app.get("/api/addfriends", function(req, res) {
  const friendsList = {
    friendsList: friends.friendsArray
  };
  res.json(friendsList);
});
// Routing for the friends list page 
app.get("/showfriendslist", function(req, res) {
  res.sendFile(path.join(__dirname, "showfriendslist.html"));
});

  module.exports = app;


  //================================================================
  // things I need to complete 
  // the math function that shows the best match for users new friend (and display in model)
  // move files into correct folders and require them correctly 
  //