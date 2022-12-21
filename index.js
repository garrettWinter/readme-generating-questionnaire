/* Global Variables */
const inquirer = require('inquirer');
const fs = require('fs');
let collectedData;



function writeToFile() {
    fs.writeFile('README.md',
    `DETAILS TO BE WRITTEN TO FILE`
    , (err) =>
    err ? console.error(err) : console.log('README has been created!')
  );
}

// TODO: Create a function to initialize app
function init() {
    detailsGathering();
}

function detailsGathering(){   
/*
    Collect User Data
    GitHub username, email address

    Collect Readme Data
    Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
*/
inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your GitHub user name?',
    name: 'gitHub',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
])
.then((response) => {
    collectedData = {...response};
    console.log(collectedData);
    writeToFile();
});

}

// Function call to initialize app
init();
