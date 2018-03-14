var friends = require('../data/friends.js');
var path = require('path');


module.exports = function(app){

        app.get('/api/friends', function(req, res){
            console.log("Reading API");
            res.json(friends);
        });
    
        app.post("/api/new", function(req, res) {
          //setup variables for finding match
            let newFriend = req.body;
            let newScore = newFriend.scores;
            let total = 0;
            let bestMatch = 1000;
            let index = -1;
    
            for(let i = 0; i < friends.length; i++){
                //Iterate through the whole list of friends already in database
                total = 0;
    
                for(let j = 0; j < newScore.length; j++){
                    //for each friend calculate the total value
                    let diff = Math.abs(newScore[j] - friends[i].scores[j]);
                    total += diff;
                }
                if(total < bestMatch){
                    bestMatch = total;
                    index = i;
                }
            }
            console.log('Best Match:', friends[index]);
            friends.friends.push(newFriend);
            res.json(friends[index]);
        });

};