const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(characters, textColor, color) {
     super(characters, textColor, color) 
      
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

</svg>`
        
    }
}

module.exports = Circle;