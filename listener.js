const app = require('./app/server.js');

const port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() { 
        console.log(`Started server on  ${port}...`); 
        
});
