const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(characters, textColor, color) {
     super(characters, textColor, color) 
     
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
        
    }
}

module.exports = Square;