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
  var licenseBadge = generateBadge(license);
  var licenseUrl = generateLicenseUrl(license);
  return `
\n![License](${licenseBadge} \n
\n## License
\nThis project is licensed under the ${license} - see the [License](${licenseUrl}) page.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n${data.description}
  \n## Table of Contents
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [Contributors](#Contributors)
\n* [Tests](#Tests)
\n* [License](#License)
\n* [Author](#Author)
\n## Installation
\n${data.installation}
\n## Usage
\n${data.usage}
\n## Contributing
\n${data.contributing}
\n## Tests
\n${data.tests}
\n## Author
\n![ProfileImage](${data.avatar_url})
\n${data.name}
\nLocation: ${data.location}
\n[GitHub](${data.html_url})`;
}

module.exports = generateMarkdown;
