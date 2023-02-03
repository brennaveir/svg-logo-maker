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
                    message: 'Please enter a color for your logo',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Which shape would you like your logo to be?',
                    choices: ['circle', 'triangle', 'square']
                }
            ])
            .then(({ characters, color, shape }) => {
                console.log(characters, color, shape)
            })
    }
}
module.exports = CLI
