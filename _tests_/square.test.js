const Square = require("../lib/square") 

const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="40" y="40" width="200" height="200" fill="$blue" />');