const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(characters, textColor, color, formation) {
     super(characters, textColor, color, formation) 
     
    }
    setColor(color) {
        return this.color = color
    }
    render() {
        return `<rect x="40" y="40" width="200" height="200" fill="${this.color}" />`
        }
}

module.exports = Square;