const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(characters, textColor, color) {
     super(characters, textColor, color) 
     
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="40" y="40" width="200" height="200" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

</svg>`
        
    }
}

module.exports = Square;