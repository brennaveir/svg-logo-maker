const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run() 
.then(function(data){
    console.log("SVG generated")
})
.catch(function(err){
    console.log(err)
})
