let descMotivationBullets = '';
let descLearnBullets = '';
let installationBullets = '';


let licenseBadge = '';
let contributorBadge = '';
let badgeSection = '';
let tocBadges = '';
let tocInstallation = '';
let tocCredits = '';
let tocLicense = '';
let tocContribute = '';
let tocTechCases = '';
let toCDescription = ' - [Description](#description)\n'
let toCUsage = ' - [Usage](#usage)\n'
let tocFeatures = ' - [Features](#features)\n'
let tocQuestions = ' - [Questions](#questions)\n'

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
  if (licenseBadge != '' || contributorBadge != ''){
    badgeSection = "\n\n## Badges\n"+contributorBadge+licenseBadge;
  }
};

function descriptionMotivationBuilder(descMotivationArray, descLearnArray) {
  for (let i = 0; i < descMotivationArray.length; i++) {
    descMotivationBullets = descMotivationBullets.concat("\n    - " + descMotivationArray[i]);
  };
  for (let i = 0; i < descLearnArray.length; i++) {
    descLearnBullets = descLearnBullets.concat("\n    - " + descLearnArray[i]);
  };
  return descLearnBullets;
 }

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
    tocTechCases = ' - [Tests](#tests)\n';
  };

tocContent = `## Table of Contents

${tocBadges}${toCDescription}${tocInstallation}${toCUsage}${tocCredits}${tocLicense}${tocFeatures}${tocContribute}${tocTechCases}${tocQuestions}
`
}

function installationBuilder(mainData,installArray) {
  if (mainData.installationConfirm === false) {
    return;
  };

  for (let i = 0; i < installArray.length; i++) {
    installationBullets = installationBullets.concat("\n    - " + installArray[i]);
  };


  installationContent = `## Installation
  
  Here is some information that you will need to be able to install and properly work this application:
  ${installationBullets}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(mainData, descMotivationArray, descLearnArray, licenseArray,installArray) {
  badgeBuilder(mainData, licenseArray);
  descriptionMotivationBuilder(descMotivationArray, descLearnArray);
  tableofContentsBuilder (mainData);
  installationBuilder(mainData,installArray);
  return `# ${mainData.projectName}${badgeSection}

## Description

Below are short descriptions explaining the what, why, and how of this project.

- What was your motivation?${descMotivationBullets}
- What problem does this application solve?
    - ${mainData.descSolve}
- What did you learn while working on this?${descLearnBullets}
  
${tocContent}${installationContent}
## Usage

- This is a weather dashboard that allows the user to be able to search for a city. This will make an API call and will return 6 days of weather (the current day and the 5 days after). Searched cities and logged for easy repeat access.

    - This webpage can be viewed by following the below link:
        - https://garrettwinter.github.io/winters-weather-dashboard/
        
    - Below a screenshot of the webpage
        - ![Screenshot of Garrett Winter's, Winter's Weather Dashboard](./assets/images/Dashboard-Screenshot.png)


## Credits

  - While working on this project I had collaborated in real-time with:
    - Garrett Winter (https://github.com/garrettWinter)
    - Salahuddin Imdad (https://github.com/Sal8298)

## License

MIT License

Copyright (c) 2022 Garrett Winter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

Some of the main features for this weather dashboard are:

3rd Party API:
    - This site uses OpenWeather API to gather the weather forecast data.
        - https://openweathermap.org/

Search History:
    - Is saved into local storage, so can be reviewed easily anytime.
    - A clear history button has been added for the ease to clear saved data.
    - Search history buttons are added and removed dynamically.

Current & 5 Day Forecast:
    - 5 Day forecast is being dynamically created
    - Weather icons are being pulled and displayed to
        - Examples are: Sunny, cloudy, raining.

Responsive Design:
    - This site has been built to support down to mobile devices.

`;
}

module.exports = generateMarkdown;
