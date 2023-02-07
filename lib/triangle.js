const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(characters, textColor, color, formation) {
        super(characters, textColor, color, formation)
        
    }
    // setColor(color) {
    //     return this.color = color
    // }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
}
}

module.exports = Triangle;