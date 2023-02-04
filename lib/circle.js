const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(characters, textColor, color, shape) {
     super() 
     this.shape = shape  
    }
    render() {
        `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" />`
    }
}

module.exports = Circle;