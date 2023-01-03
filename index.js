/* Global Variables */
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
let mainData = [];
let masterArray = [];
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

const generateMarkdown = require('./utils/generateMarkdown.js');

function writeToFile() {
  fs.writeFile('README.md',
    generateMarkdown(mainData, descMotivationArray, descLearnArray, licenseArray, installArray, usageScreenshotArray, usageGeneralArray, creditsCollaboratorsArray, creditsThridPartyArray, creditsTutorialArray, featuresArray, contributeArray, testArray)
    , (err) =>
      err ? console.error(err) : console.log('README has been created!')
  );
}

function main() {
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
        type: 'input',
        message: 'What is the Project Name?',
        name: 'projectName',
      },
      {
        type: 'confirm',
        message: 'Would you like to include a table of Contents?',
        name: 'tableContents',
      },
      {
        type: 'confirm',
        message: 'Does this project require any installion to work properly?',
        name: 'installationConfirm',
      },
      {
        type: 'confirm',
        message: 'Did you collaborate with anyone on this project?',
        name: 'collaboratorConfirm',
      },
      {
        type: 'confirm',
        message: 'Did you use any tools or ideas from a thrid party that require attribution?',
        name: 'attributionConfirm',
      },
      {
        type: 'confirm',
        message: 'Were any tutorials followed for this project?',
        name: 'tutorialConfirm',
      },
      {
        type: 'confirm',
        message: 'Would you like to include a license in the README?',
        name: 'licenseConfirm',
      },
      {
        type: 'confirm',
        message: 'Would you like to include a How to Contribute Section?',
        name: 'ContributeCofirm',
      },
      {
        type: 'confirm',
        message: 'Would you like to include a a Contributor Badge?',
        name: 'contributeBadgeConfirm',
      },
      {
        type: 'confirm',
        message: 'Did you create any test cases that can be shared with the reader?',
        name: 'testCasesConfirm',
      },
      {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'descSolve',
      },
    ])
    .then((response) => {
      mainData = response;
      descriptionMotivation();
    });
};

  /* Collect Readme Data --- Description (Motiviation) */
function descriptionMotivation() {
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
      if (response.repeat === true) {
        descMotivationArray.push(collectedData2.descMotivation);
        descriptionMotivation();
        return;
      }
      descMotivationArray.push(collectedData2.descMotivation);
      masterArray.push(descMotivationArray);
      descriptionLearn();
    });
}

  /* Collect Readme Data --- Description (Learn) */
function descriptionLearn() {
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
      if (response.repeat === true) {
        descLearnArray.push(collectedData3.descLearn);
        descriptionLearn();
        return;
      }
      descLearnArray.push(collectedData3.descLearn);
      masterArray.push(descLearnArray);
      installation();
    });
}

  /* Collect Readme Data --- Installation */
function installation() {
  if (mainData.installationConfirm === false) {
    console.log("Installation Section has been skipped.")
    useageExamples();
    return;
  }
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
      if (response.repeat === true) {
        installArray.push(collectedData4.install);
        installation();
        return;
      }
      installArray.push(collectedData4.install);
      masterArray.push(installArray);
      useageExamples();
    });
}

  /* Collect Readme Data --- Usage (How to) */
function useageExamples() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Provide a bullet of instructions and examples for how this application is used.',
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
      if (response.repeat === true) {
        usageGeneralArray.push(collectedData5.usagage);
        useageExamples();
        return;
      }
      usageGeneralArray.push(collectedData5.usagage);
      masterArray.push(usageGeneralArray);
      useageScreenshot();
    });
}

  /* Collect Readme Data --- Usage (Screenshots)
  */
function useageScreenshot() {
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
      if (response.repeat === true) {
        usageScreenshotArray.push([collectedData6.usagageScreenAlt, collectedData6.usagageScreenPath]);
        useageScreenshot();
        return;
      }
      usageScreenshotArray.push([collectedData6.usagageScreenAlt, collectedData6.usagageScreenPath]);
      creditsCollaborators();
    });
}

  /* Collect Readme Data --- Credits Collaborators */
function creditsCollaborators() {
  if (mainData.collaboratorConfirm === false) {
    console.log("Credits - Collaboration Section has been skipped.")
    creditsThirdParty();
    return;
  }
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
      if (response.repeat === true) {
        creditsCollaboratorsArray.push([collectedData7.gitHubUserID, collectedData7.gitHubProfileURL]);
        creditsCollaborators();
        return;
      }
      creditsCollaboratorsArray.push([collectedData7.gitHubUserID, collectedData7.gitHubProfileURL]);
      creditsThirdParty();
    });
}

  /* Collect Readme Data --- Credits Third-parties */
function creditsThirdParty() {
  if (mainData.attributionConfirm === false) {
    console.log("Credits - Third Parties Section has been skipped.")
    creditsTutorial();
    return;
  }
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
      if (response.repeat === true) {
        creditsThridPartyArray.push([collectedData8.thirdPartyName, collectedData8.thirdPartyURL]);
        creditsThirdParty();
        return;
      }
      creditsThridPartyArray.push([collectedData8.thirdPartyName, collectedData8.thirdPartyURL]);
      creditsTutorial();
    });
}

/* Collect Readme Data --- Credits - Tutorials */
function creditsTutorial() {
    if (mainData.tutorialConfirm === false) {
    console.log("Credits - Tutorial Section has been skipped.")
    features();
    return;
  }
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
      if (response.repeat === true) {
        creditsTutorialArray.push([collectedData9.tutorialName, collectedData9.tutorialURL]);
        creditsTutorial();
        return;
      }
      creditsTutorialArray.push([collectedData9.tutorialName, collectedData9.tutorialURL]);
      features();
    });
}

  /* Collect Readme Data --- Features */
function features() {
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
      if (response.repeat === true) {
        featuresArray.push(collectedData10.feature);
        features();
        return;
      }
      featuresArray.push(collectedData10.feature);
      testCases();
    });
}

  /* Collect Readme Data --- Test Cases */
function testCases() {
  if (mainData.testCasesConfirm === false) {
    console.log("Test Cases Section has been skipped.")
    licenseSection();
    return;
  }
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
      if (response.repeat === true) {
        testArray.push(response.testDetails);
        testCases();
        return;
      }
      testArray.push(response.testDetails);
      licenseSection();
    });
}

  /* Collect Readme Data --- License */
function licenseSection() {
  if (mainData.licenseConfirm === false) {
    console.log("License Section has been skipped.")
    howToContribute();
    return;
  }
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Please select a license option from',
        name: 'license',
        default: 0,
        choices: ["MIT", "Mozilla Public License 2.0", "GNU General Public License v3.0"]
      },
    ])
    .then((response) => {
      licenseArray = (response.license);
      howToContribute();
    }
    );
}

  /* Collect Readme Data --- How to Contribute */
function howToContribute() {
  if (mainData.installationConfirm === false) {
    console.log("How to Contribute Section has been skipped.")
    // userDetailsGatheringPart5();
    // console.log(mainData);
    // console.log(descMotivationArray);
    // console.log(descLearnArray);
    // console.log(installArray);
    // console.log(usageGeneralArray);
    // console.log(usageScreenshotArray);
    // console.log(creditsCollaboratorsArray);
    // console.log(creditsThridPartyArray);
    // console.log(creditsTutorialArray);
    // console.log(featuresArray);
    // console.log(testArray);
    // console.log(licenseArray);
    // console.log(contributeArray);
    writeToFile();
    return;
  }
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
      if (response.repeat === true) {
        contributeArray.push(response.contribute);
        howToContribute();
        return;
      }
      contributeArray.push(response.contribute);
      // console.log(mainData);
      // console.log(descMotivationArray);
      // console.log(descLearnArray);
      // console.log(installArray);
      // console.log(usageGeneralArray);
      // console.log(usageScreenshotArray);
      // console.log(creditsCollaboratorsArray);
      // console.log(creditsThridPartyArray);
      // console.log(creditsTutorialArray);
      // console.log(featuresArray);
      // console.log(testArray);
      // console.log(licenseArray);
      // console.log(contributeArray);
      writeToFile();
    });
}

// Function called when application is started
main();