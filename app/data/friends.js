const app = require('C:/Users/test/repos/friendFinder/app/server.js');

function NewUser(userName, userPhoto, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, arr) {
    this.userName = userName;
    this.userPhoto = userPhoto;
    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
    this.q4 = q4;
    this.q5 = q5;
    this.q6 = q6;
    this.q7 = q7;
    this.q8 = q8;
    this.q9 = q9;
    this.q10 = q10;
    this.arr = arr;
    
}

const friendsArray = [];

module.exports = {
    friendsArray: friendsArray,
    add: function(users){
        friendsArray.push(new NewUser(users.userName, users.userPhoto, users.q1, users.q2, users.q3, users.q4, users.q5, users.q6, users.q7, users.q8, users.q9, users.q10,  [users.q1, users.q2, users.q3, users.q4, users.q5, users.q6, users.q7, users.q8, users.q9, users.q10]));
     
           
        console.log("friendsArray looks like", friendsArray);
        
    }

};