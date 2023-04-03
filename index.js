const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Describe the steps required to install your project for the Installation section.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples of your project in use for the Usage section.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Provide guidelines on how other developers can contribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: ["MIT", "GNU", "Apache"],
    name: "license",
  },
];
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("ExampleREADME.md", data));
}

init();
