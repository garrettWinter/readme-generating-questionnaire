/* Global Variables */
const inquirer = require('inquirer');
const fs = require('fs');
let collectedData1 = [];
let collectedData2 = [];
let collectedData3 = [];
let descMotivationArray = [];
let descLearnArray = [];



function writeToFile() {
    fs.writeFile('README.md',
    `DETAILS TO BE WRITTEN TO FILE`
    , (err) =>
    err ? console.error(err) : console.log('README has been created!')
  );
}

// TODO: Create a function to initialize app
function init() {
    userDetailsGatheringPart1();
}

function userDetailsGatheringPart1(){   
/*
    Collect User Data
    GitHub username, email address

    Collect Readme Data
    Table of Contents
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
  {
    type: 'confirm',
    message: 'Include table of Contents?',
    name: 'tableContents',
  },
  {
    type: 'input',
    message: 'What is the Project Name?',
    name: 'projectName',
  },
  {
    type: 'input',
    message: 'What problem does it solve?',
    name: 'descSolve',
  },
])
  .then((response) => {
    collectedData1 = {...response};
    userDetailsGatheringPart2();
});
}
function userDetailsGatheringPart2(){   
    /*
        Collect Readme Data
        Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    */
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'descMotivation',
          },
        {
            type: "confirm",
            name: "repeat",
            message: "Would you like to add another motivation bullet?",
          },
    ])
      .then((response) => {
        collectedData2 = response;
        if (response.repeat === true){
            descMotivationArray.push(collectedData2.descMotivation);
            console.log(collectedData1);
            console.log(collectedData2);
            console.log(descMotivationArray);
            userDetailsGatheringPart2();
            return;
        }
        userDetailsGatheringPart3()
    });
    }
    function userDetailsGatheringPart3(){   
        /*
            Collect Readme Data
            Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        */
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What did you learn?',
                name: 'descLearn',
              },
            {
                type: "confirm",
                name: "repeat",
                message: "Would you like to add another learned bullet?",
              },
        ])
          .then((response) => {
            collectedData3 = response;
            if (response.repeat === true){
                descLearnArray.push(collectedData3.descLearn);
                console.log(collectedData1);
                console.log(collectedData2);
                console.log(collectedData3);
                console.log(descLearnArray);
                userDetailsGatheringPart3();
                return;
            }
            // writeToFile();
        });
        }





  




  
// ])
// .then((response) => {
//     collectedData = {...response};
//     console.log(collectedData);
//     writeToFile();
// });

// }

// Function call to initialize app
init();
