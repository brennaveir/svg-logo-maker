const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(color) {
        super(color)
        //  this.shape = shape  
    }
    render() {
        return `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        `
}
}

module.exports = Triangle;