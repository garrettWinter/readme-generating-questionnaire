/* Global Variables */
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
let collectedData1 = [];
let descMotivationArray = [];
let descLearnArray = [];
let installArray = [];
let usageGeneralArray = [];
let usageScreenshotArray = [];
let creditsCollaboratorsArray = [];
let creditsThridPartyArray = [];
let creditsTutorialArray = [];
let featuresArray = [];
let testArray = [];
let licenseArray = [];
let contributeArray = [];

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
    Table of Contents, Description (Some)
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
    collectedData1 = response;
    userDetailsGatheringPart2();
});
}
function userDetailsGatheringPart2(){   
    /*
        Collect Readme Data
        Description (Some)
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
            userDetailsGatheringPart2();
            return;
        }
        descMotivationArray.push(collectedData2.descMotivation);
        userDetailsGatheringPart3();
    });
    }
    function userDetailsGatheringPart3(){   
    /*
        Collect Readme Data
        Description (Some)
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
                userDetailsGatheringPart3();
                return;
            }
            descLearnArray.push(collectedData3.descLearn);
            userDetailsGatheringPart4();
        });
        }

        function userDetailsGatheringPart4(){   
            /*
                Collect Readme Data
                Installation
            */
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.?',
                    name: 'install',
                  },
                {
                    type: "confirm",
                    name: "repeat",
                    message: "Would you like to add another Install Steps bullet?",
                  },
            ])
              .then((response) => {
                collectedData4 = response;
                if (response.repeat === true){
                    installArray.push(collectedData4.install);
                    userDetailsGatheringPart4();
                    return;
                }
                installArray.push(collectedData4.install);
                userDetailsGatheringPart5();
            });
            }

            function userDetailsGatheringPart5(){   
                /*
                    Collect Readme Data
                    Usage (Some)
                */
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Provide instructions and examples for use.',
                        name: 'usagage',
                      },
                    {
                        type: "confirm",
                        name: "repeat",
                        message: "Would you like to add another usagage bullet?",
                      },
                ])
                  .then((response) => {
                    collectedData5 = response;
                    if (response.repeat === true){
                        usageGeneralArray.push(collectedData5.usagage);
                        userDetailsGatheringPart5();
                        return;
                    }
                    usageGeneralArray.push(collectedData5.usagage);
                    userDetailsGatheringPart6();
                });
                }

                function userDetailsGatheringPart6(){   
                    /*
                        Collect Readme Data
                        Usage (Screenshots)
                    */
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'Please provide the alt text for your screenshot',
                            name: 'usagageScreenAlt',
                          },
                          {
                            type: 'input',
                            message: 'Please provide the source path for your screenshot',
                            name: 'usagageScreenPath',
                          },
                        {
                            type: "confirm",
                            name: "repeat",
                            message: "Would you like to add details for another screenshot?",
                          },
                    ])
                      .then((response) => {
                        collectedData6 = response;
                        if (response.repeat === true){
                            usageScreenshotArray.push([collectedData6.usagageScreenAlt,collectedData6.usagageScreenPath]);
                            userDetailsGatheringPart6();
                            return;
                        }
                        usageScreenshotArray.push([collectedData6.usagageScreenAlt,collectedData6.usagageScreenPath]);
                        userDetailsGatheringPart7();
                    });
                    }

                    function userDetailsGatheringPart7(){   
                      /*
                          Collect Readme Data
                          Credits Collaborators
                      */
                      inquirer
                      .prompt([
                          {
                              type: 'input',
                              message: 'Please provide the name of who you collaboratored with on this project.',
                              name: 'gitHubUserID',
                            },
                            {
                              type: 'input',
                              message: 'Please provide a URL to that users gitHub profile.',
                              name: 'gitHubProfileURL',
                            },
                          {
                              type: "confirm",
                              name: "repeat",
                              message: "Would you like to add another collaboratorer?",
                            },
                      ])
                        .then((response) => {
                          collectedData7 = response;
                          if (response.repeat === true){
                              creditsCollaboratorsArray.push([collectedData7.gitHubUserID,collectedData7.gitHubProfileURL]);
                              userDetailsGatheringPart7();
                              return;
                          }
                          creditsCollaboratorsArray.push([collectedData7.gitHubUserID,collectedData7.gitHubProfileURL]);
                          userDetailsGatheringPart8();
                      });
                      }

                      function userDetailsGatheringPart8(){   
                        /*
                            Collect Readme Data
                            Credits Third-parties
                        */
                        inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'Please provide the name of the third-party asset that requires attribution.',
                                name: 'thirdPartyName',
                              },
                              {
                                type: 'input',
                                message: 'Please provide the URL of the third-party asset that requires attribution.',
                                name: 'thirdPartyURL',
                              },
                            {
                                type: "confirm",
                                name: "repeat",
                                message: "Would you like to add another thrid-party asset?",
                              },
                        ])
                          .then((response) => {
                            collectedData8 = response;
                            if (response.repeat === true){
                                creditsThridPartyArray.push([collectedData8.thirdPartyName,collectedData8.thirdPartyURL]);
                                userDetailsGatheringPart8();
                                return;
                            }
                            creditsThridPartyArray.push([collectedData8.thirdPartyName,collectedData8.thirdPartyURL]);
                            userDetailsGatheringPart9();
                        });
                        }
  

                        function userDetailsGatheringPart9(){   
                          /*
                              Collect Readme Data
                              Credits - Tutorials
                          */
                          inquirer
                          .prompt([
                              {
                                  type: 'input',
                                  message: 'Please provide the name of the tutorial you followed.',
                                  name: 'tutorialName',
                                },
                                {
                                  type: 'input',
                                  message: 'Please provide the URL of the tutorial you followed.',
                                  name: 'tutorialURL',
                                },
                              {
                                  type: "confirm",
                                  name: "repeat",
                                  message: "Would you like to add another tutorial?",
                                },
                          ])
                            .then((response) => {
                              collectedData9 = response;
                              if (response.repeat === true){
                                  creditsTutorialArray.push([collectedData9.tutorialName,collectedData9.tutorialURL]);
                                  userDetailsGatheringPart9();
                                  return;
                              }
                              creditsTutorialArray.push([collectedData9.tutorialName,collectedData9.tutorialURL]);
                              userDetailsGatheringPart10();
                          });
                          }

                          function userDetailsGatheringPart10(){   
                            /*
                                Collect Readme Data
                                Features
                            */
                            inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    message: 'Please provide a feature that this application has.',
                                    name: 'feature',
                                  },
                                {
                                    type: "confirm",
                                    name: "repeat",
                                    message: "Would you like to list another feature?",
                                  },
                            ])
                              .then((response) => {
                                collectedData10 = response;
                                if (response.repeat === true){
                                    featuresArray.push(collectedData10.feature);
                                    userDetailsGatheringPart10();
                                    return;
                                }
                                featuresArray.push(collectedData10.feature);
                                userDetailsGatheringPart11();
                            });
                            }

                            function userDetailsGatheringPart11(){   
                              /*
                                  Collect Readme Data
                                  Tests 
                              */
                              inquirer
                              .prompt([
                                  {
                                      type: 'input',
                                      message: 'Please details about the test you have written for this application',
                                      name: 'testDetails',
                                    },
                                  {
                                      type: "confirm",
                                      name: "repeat",
                                      message: "Do you have another test that you would like to document?",
                                    },
                              ])
                                .then((response) => {
                                  if (response.repeat === true){
                                      testArray.push(response.testDetails);
                                      userDetailsGatheringPart11();
                                      return;
                                  }
                                  testArray.push(response.testDetails);
                                  userDetailsGatheringPart12();
                              });
                              }
                            
                            function userDetailsGatheringPart12(){   
                              /*
                                  Collect Readme Data
                                  license 
                              */
                              inquirer
                              .prompt([
                                  {
                                      type: 'list',
                                      message: 'Please select a license option from',
                                      name: 'license',
                                      default: 0,
                                      choices: ["MIT", "Mozilla Public License 2.0", "choice GNU General Public License v3.0"]
                                    },
                              ])
                                .then((response) => {
                                  licenseArray.push(response.license);
                                  userDetailsGatheringPart13();
                                  }
                                 );
                              }

                              function userDetailsGatheringPart13(){   
                                /*
                                    Collect Readme Data
                                    How to Contribute 
                                */
                                inquirer
                                .prompt([
                                  {
                                    type: 'input',
                                    message: 'Please let people know how they can Contribute ',
                                    name: 'contribute',
                                  },
                                {
                                    type: "confirm",
                                    name: "repeat",
                                    message: "Do you want to add more details on how people can contribute?",
                                  },
                                ])
                                  .then((response) => {
                                    // collectedData13 = response;
                                    if (response.repeat === true){
                                        contributeArray.push(response.contribute);
                                        userDetailsGatheringPart13();
                                        return;
                                    }
                                    contributeArray.push(response.contribute);
                                    console.log(collectedData1);
                                    console.log(descMotivationArray);
                                    console.log(descLearnArray);
                                    console.log(installArray);
                                    console.log(usageGeneralArray);
                                    console.log(usageScreenshotArray);
                                    console.log(creditsCollaboratorsArray);
                                    console.log(creditsThridPartyArray);
                                    console.log(creditsTutorialArray);
                                    console.log(featuresArray);
                                    console.log(testArray);
                                    console.log(licenseArray);
                                    console.log(contributeArray);
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
