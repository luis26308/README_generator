const inquirer = require('inquirer')
const fs = require('fs')
const api = require('./utils/githubapi.js');
const util = require('util')

const generateMarkdown = require('./utils/generateMarkdown.js')
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Enter your github username.',
        name: 'username'
    },

    {
        type: 'input',
        message: 'Enter your github repo name.',
        name: 'repo'
    },

    {
        type: 'input',
        message: 'Enter your project name.',
        name: 'Title'
    },

    {
        type: 'input',
        message: 'Give a description of the project',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Describe the installation process.',
        name: 'installation'
    },

    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
function init() {
    userInput = inquirer.prompt(questions)
    userInfo = api.getUser(userInput)

    writeFileAsync('ExampleREADME.md', generateMarkdown(userInput, userInfo))
}

// function call to initialize program
init();
