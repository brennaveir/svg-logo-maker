const inquirer = require('inquirer')

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
                }
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Which shape would you like your logo to be?',
                    choices: ['circle', 'triangle', 'square']
                }
            ])
            .then(({ characters, color, shape }) => {
                console.log(characters, textColor, color, shape)
            })
    }
}
module.exports = CLI
