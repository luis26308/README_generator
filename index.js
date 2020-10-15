const inquirer = require('inquirer')
const fs = require('fs')
const api = require('./utils/githubapi.js');
const util = require('util')
const writeFileAsync = util.promisify(writeToFile);

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
        name: 'title'
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
    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
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

// function to initialize program
async function init() {
    try{
    const userInput = await inquirer.prompt(questions)
    const userInfo =  await api.getUser(userInput)
    const markDown = generateMarkdown(userInput, userInfo)

    await writeFileAsync('README.md', markDown)
    }
    catch (error) {
        console.log(error);
    }
};

// function call to initialize program
init();
