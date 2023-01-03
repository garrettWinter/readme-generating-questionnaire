/* Global Variables */

let descMotivationBullets = '';
let descLearnBullets = '';
let installationBullets = '';
let usageGeneralBullets = '';
let usageScreenshotBullets = '';
let creditsCollaboratorsBullets = '';
let creditsThridPartyBullets = '';
let creditsTutorialBullets = '';
let featureBullets = '';
let licenseText = '';
let installationContent = '';
let creditsContent = '';
let contributeContent = '';
let contributeBullets = '';
let testBullets = '';
let testContent = '';
let licenseBadge = '';
let contributorBadge = '';
let badgeSection = '';
let tocBadges = '';
let tocInstallation = '';
let tocCredits = '';
let tocLicense = '';
let tocContribute = '';
let tocTestCases = '';
let tocContent = '';
let toCDescription = ' - [Description](#description)\n'
let toCUsage = ' - [Usage](#usage)\n'
let tocFeatures = ' - [Features](#features)\n'
let tocQuestions = ' - [Questions](#questions)\n'

/* Function to build badge content */
function badgeBuilder(mainData, licenseArray) {
  if (mainData.contributeBadgeConfirm === true) {
    contributorBadge = "\n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4b.svg)](code_of_conduct.md)"
  };
  if (mainData.licenseConfirm === true) {
    if (licenseArray === 'MIT') {
      licenseBadge = '\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    };
    if (licenseArray === 'Mozilla Public License 2.0') {
      licenseBadge = '\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    };
    if (licenseArray === 'GNU General Public License v3.0') {
      licenseBadge = '\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    };
  };
  if (licenseBadge != '' || contributorBadge != '') {
    badgeSection = "\n\n## Badges\n" + contributorBadge + licenseBadge;
  }
};
/* Function to build description content */
function descriptionMotivationBuilder(descMotivationArray, descLearnArray) {
  for (let i = 0; i < descMotivationArray.length; i++) {
    descMotivationBullets = descMotivationBullets.concat("\n    - " + descMotivationArray[i]);
  };
  for (let i = 0; i < descLearnArray.length; i++) {
    descLearnBullets = descLearnBullets.concat("\n    - " + descLearnArray[i]);
  };
  return descLearnBullets;
};

/* Function to build tables of contents */
function tableofContentsBuilder(mainData) {
  if (mainData.tableContents === false) {
    return;
  };

  //If sections are enabled will update the ToC variables.
  if (licenseBadge != '' || contributorBadge != '' || contributorBadge != '') {
    tocBadges = ' - [Badges](#badges)\n';
  };
  if (mainData.installationConfirm === true) {
    tocInstallation = ' - [Installation](#installation)\n';
  };
  if (mainData.collaboratorConfirm === true || mainData.attributionConfirm === true || mainData.tutorialConfirm === true) {
    tocCredits = ' - [Credits](#credits)\n';
  };
  if (mainData.licenseConfirm === true) {
    tocLicense = ' - [License](#license)\n';
  };
  if (mainData.ContributeCofirm === true) {
    tocContribute = ' - [How-to-Contribute](#How-to-Contribute)\n';
  };
  if (mainData.testCasesConfirm === true) {
    tocTestCases = ' - [Tests](#tests)\n';
  };

  tocContent = `## Table of Contents

${tocBadges}${toCDescription}${tocInstallation}${toCUsage}${tocCredits}${tocLicense}${tocFeatures}${tocContribute}${tocTestCases}${tocQuestions}
`
};

/* Function to build installation content */
function installationBuilder(mainData, installArray) {
  if (mainData.installationConfirm === false) {
    return;
  };

  for (let i = 0; i < installArray.length; i++) {
    installationBullets = installationBullets.concat("\n    - " + installArray[i]);
  };


  installationContent = `## Installation
  
Here is some information that you will need to be able to install and properly work this application:${installationBullets}
`
};

/* Function to build useage content */
function usageBuilder(usageGeneralArray, usageScreenshotArray) {
  for (let i = 0; i < usageGeneralArray.length; i++) {
    usageGeneralBullets = usageGeneralBullets.concat("\n    - " + usageGeneralArray[i]);
  };
  for (let i = 0; i < usageScreenshotArray.length; i++) {
    usageScreenshotBullets = usageScreenshotBullets.concat("\n  - ![" + usageScreenshotArray[i][0] + "](" + usageScreenshotArray[i][1] + ")");
  };

  useageContent = `\n## Usage
  
Here are some details on how this application can be used:${usageGeneralBullets}
      
Below a screenshot(s) of the application:${usageScreenshotBullets}
`
};

/* Function to build credits content */
function creditsBuilder(mainData, creditsCollaboratorsArray, creditsThridPartyArray, creditsTutorialArray) {
  if (mainData.collaboratorConfirm === false && mainData.attributionConfirm === false && mainData.tutorialConfirm === false) {
    return;
  };
  if (mainData.collaboratorConfirm === true) {
    for (let i = 0; i < creditsCollaboratorsArray.length; i++) {
      creditsCollaboratorsBullets = creditsCollaboratorsBullets.concat("\n    - " + creditsCollaboratorsArray[i][0] + " (" + creditsCollaboratorsArray[i][1] + ")");
    };
  };
  if (mainData.attributionConfirm === true) {
    for (let i = 0; i < creditsThridPartyArray.length; i++) {
      creditsThridPartyBullets = creditsThridPartyBullets.concat("\n    - " + creditsThridPartyArray[i][0] + " (" + creditsThridPartyArray[i][1] + ")");
    };
  };
  if (mainData.tutorialConfirm === true) {
    for (let i = 0; i < creditsTutorialArray.length; i++) {
      creditsTutorialBullets = creditsTutorialBullets.concat("\n    - " + creditsTutorialArray[i][0] + " (" + creditsTutorialArray[i][1] + ")");
    };
  };

  collaborationContent = `\n\nThe following people have worked together to develop this application:${creditsCollaboratorsBullets}`
  creditsThridPartyContent = `\n\nThis application used the following Third-Party technologies:${creditsThridPartyBullets}`
  tutorialContent = `\n\nThe following tutorial was followed in the development of this application:${creditsTutorialBullets}`

  creditsContent = `\n## Credits${collaborationContent}${creditsThridPartyContent}${tutorialContent}
  `

};

/* Function to build license content */
function licenseBuilder(mainData, licenseArray) {
  if (mainData.licenseConfirm === false) {
    return;
  };

  if (licenseArray === 'MIT') {
    licenseText = '\n## License\n\nThe MIT license is being used for this application. For more information you can go to the following URL.\n    - https://opensource.org/licenses/MIT';
  };

  if (licenseArray === 'Mozilla Public License 2.0') {
    licenseText = '\n## License\n\nThe Mozilla Public License 2.0 license is being used for this application. For more information you can go to the following URL.\n    - https://opensource.org/licenses/MPL-2.0';
  };

  if (licenseArray === 'GNU General Public License v3.0') {
    licenseText = '\n## License\n\nThe GNU General Public License v3.0 license is being used for this application. For more information you can go to the following URL.\n    - https://www.gnu.org/licenses/gpl-3.0';
  };
};

/* Function to build feature content */
function featureBuilder(featuresArray) {
  for (let i = 0; i < featuresArray.length; i++) {
    featureBullets = featureBullets.concat("\n    - " + featuresArray[i]);
  };
};

/* Function to build how to contribute content */
function contributeBuilder(mainData, contributeArray) {
  if (mainData.ContributeCofirm === false) {
    return;
  };

  for (let i = 0; i < contributeArray.length; i++) {
    contributeBullets = contributeBullets.concat("\n    - " + contributeArray[i]);
  };

  contributeContent = `\n\n## How to Contribute
  \nHere are some details on how to contribute to this application:${contributeBullets}`
};


/* Function to build Test Cases content */
function testBuilder(mainData, testArray) {
  if (mainData.ContributeCofirm === false) {
    return;
  };

  for (let i = 0; i < testArray.length; i++) {
    testBullets = testBullets.concat("\n    - " + testArray[i]);
  };

  testContent = `\n\n## Tests
  \nTest have been written for this application to aid in the development process. Below is some details on how to use these test cases:${testBullets}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(mainData, descMotivationArray, descLearnArray, licenseArray, installArray, usageScreenshotArray, usageGeneralArray, creditsCollaboratorsArray, creditsThridPartyArray, creditsTutorialArray, featuresArray, contributeArray, testArray) {
  badgeBuilder(mainData, licenseArray);
  descriptionMotivationBuilder(descMotivationArray, descLearnArray);
  tableofContentsBuilder(mainData);
  installationBuilder(mainData, installArray);
  usageBuilder(usageGeneralArray, usageScreenshotArray);
  creditsBuilder(mainData, creditsCollaboratorsArray, creditsThridPartyArray, creditsTutorialArray);
  licenseBuilder(mainData, licenseArray);
  featureBuilder(featuresArray);
  contributeBuilder(mainData, contributeArray);
  testBuilder(mainData, testArray);

  return `# ${mainData.projectName}${badgeSection}

## Description

Below are short descriptions explaining the what, why, and how of this project.

- What was your motivation?${descMotivationBullets}

- What problem does this application solve?
    - ${mainData.descSolve}

- What did you learn while working on this?${descLearnBullets}
  
${tocContent}${installationContent}${useageContent}${creditsContent}${licenseText}

## Features
\nSome of the main features of this application are:${featureBullets}${contributeContent}${testContent}

## Questions

Below is my gitHub user name:
  - ${mainData.gitHub}

If you have questions and would like to discuss you can reach out to:
  - ${mainData.email}
`;
}

module.exports = generateMarkdown;
