const inquirer = require('inquirer')
const fs = require('fs/promises');

//handling user input
class CLI {
    constructor() {

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
                console.log(characters, color, textColor, shape) 
            //  write file named 'logo.svg'
            return writeFile(
                join(__dirname, '..', 'examples', 'logo.svg'),
                createDocument(this.title, this.tasks)
              );
           
        })
           
    }
}
module.exports = CLI
