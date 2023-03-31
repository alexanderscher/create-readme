// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null) {
    return `https://img.shields.io/badge/License-${license}-blue.svg`;
  } else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function generateLicenseLink(license) {
  let path;

  switch (license) {
    case "GNU AGPLv3":
      path = "agpl-3.0";
      break;
    case "GNU GPLv3":
      path = "gpl-3.0";
      break;
    case "GNU LGPLv3":
      path = "lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      path = "mpl-2.0";
      break;
    case "Apache License 2.0":
      path = "apache-2.0";
      break;
    case "MIT License":
      path = "mit";
      break;
    case "Boost Software License 1.0":
      path = "bsl-1.0";
      break;
    case "The Unlicense":
      path = "unlicense";
      break;
  }

  return `https://choosealicense.com/licenses/${path}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseBadge = generateBadge(data.license);
  var licenseUrl = generateLicenseUrl(data.license);
  var result = `# ${userResponse.title}
\n![License](${licenseBadge} \n
${userResponse.description}
\n## Table of Contents
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [Contributors](#Contributors)
\n* [Tests](#Tests)
\n* [License](#License)
\n* [Author](#Author)
\n## Installation
\n${userResponse.installation}
\n## Usage
\n${userResponse.usage}
\n## Contributing
\n${userResponse.contributing}
\n## Tests
\n${userResponse.tests}
\n## License
\nThis project is licensed under the ${userResponse.license} - see the [License](${licenseUrl}) page.
\n## Author
\n![ProfileImage](${userInfo.avatar_url})
\n${userInfo.name}
\nLocation: ${userInfo.location}
\n[GitHub](${userInfo.html_url})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  `;
}

module.exports = generateMarkdown;
