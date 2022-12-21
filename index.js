/* Global Variables */
let inquirerData;


// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create a function to write README file
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
    // writeToFile();
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
    inquirerData = {...response};
    console.log(inquirerData);
});

}

// Function call to initialize app
init();
