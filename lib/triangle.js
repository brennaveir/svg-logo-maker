const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(characters, textColor, color, formation) {
        super(characters, textColor, color, formation)
        
    }
    
    render() {
        return `<polygon points="150, 0 300, 200 10, 200" fill="${this.color}" />`
}
}

module.exports = Triangle;