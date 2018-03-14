var path = require('path');
// const app = express();

module.exports  = function(app){

  // Routing for the home page 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

  // Routing for the survey page 
    app.get("/survey", function(req, res) {
     res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

  // Routing for the friends list page 
  app.get("/showfriendslist", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/showfriendslist.html'));
  });
  
}