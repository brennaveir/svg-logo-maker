const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(characters, textColor, color, shape) {
     super() 
     this.shape = shape  
    }
    render() {
        `<rect x="10" y="10" width="30" height="30" fill="${this.color}" />`
    }
}

module.exports = Square;