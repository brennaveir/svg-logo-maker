const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(characters, textColor, color, shape) {
     super() 
     this.shape = shape  
    }
    render() {
        `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = Triangle;