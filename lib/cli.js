const inquirer = require('inquirer')
const fs = require('fs/promises');
const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');
const { join } = require('path')

//handling user input
class CLI {
    constructor() {
        
    }
    setShape() {

        switch (this.shape) {
            case 'triangle':
                const triangle = new Triangle(this.characters, this.textColor, this.color)
                this.formation = triangle
                break;
            case 'square':
                const square = new Square(this.characters, this.textColor, this.color)
                this.formation = square
                break;
            case 'circle':
                const circle = new Circle(this. characters, this.textColor, this.color)
                this.formation = circle
                break;
        }
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'characters',
                    message: 'Please enter three characters for your logo',
                    validate(characters) {
                        if (characters.length > 3) {
                            return "You must enter three characters or less!"
                        }
                        else {
                            return true;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Please enter a color for your logo shape',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please enter a color for your text',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Which shape would you like your logo to be?',
                    choices: ['circle', 'triangle', 'square']
                },
            ])
            .then(({ characters, color, textColor, shape }) => {
                // console.log(characters, color, textColor, shape)
                this.characters = characters;
                this.textColor = textColor;
                this.color = color;
                this.shape = shape;

                this.setShape()
                console.log(this.formation)
                console.log(this.formation.render())
                //  write file named 'logo.svg'
                return fs.writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
                    this.formation.render()
                );

            })

    }
}
module.exports = CLI
