function renderLicenseBadge(license) {
  if (license !== null) {
    return `https://img.shields.io/badge/License-${license}-blue.svg`;
  } else return "";
}

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

function renderLicenseSection(license) {
  var licenseBadge = renderLicenseBadge(license);
  var licenseUrl = generateLicenseLink(license);
  return `
\n## License
\n![License](${licenseBadge}) \n
\nThis project is licensed under the ${license} - see the [License](${licenseUrl}) page.`;
}

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
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
