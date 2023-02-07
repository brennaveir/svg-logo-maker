const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run() 
.then(function(data){
    console.log("Generated logo.svg")
})
.catch(function(err){
    console.log(err)
})
