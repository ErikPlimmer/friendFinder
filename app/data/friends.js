// const app = require('C:/Users/test/repos/friendFinder/app/server.js');

function NewUser(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    
}

const friends = [ {
    name: "Anna Schultz",
    photo: "https://static.pexels.com/photos/388517/pexels-photo-388517.jpeg",
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  }, {
    name: "Jack Waller",
    photo: "https://static.pexels.com/photos/64385/pexels-photo-64385.jpeg",
    scores: [2, 2, 1, 3, 4, 2, 5, 3, 3, 4]
  }];

module.exports = {
    friends: friends,
    add: function(users){
        friends.push(new NewUser(users.userName, users.userPhoto, [users.q1, users.q2, users.q3, users.q4, users.q5, users.q6, users.q7, users.q8, users.q9, users.q10]));
     
           
        console.log("friends looks like", friends);
        
    },

    bestFriend: function(){
    //     6. Determine the user's most compatible friend using the following as a guide:

    //     * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    //     * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
    //       * Example: 
    //         * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    //         * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
    //         * Total Difference: **2 + 1 + 2 =** **_5_**
    //     * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
    //     * The closest match will be the user with the least amount of difference.
     
    //  7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    //     * The modal should display both the name and picture of the closest match.
    }
};