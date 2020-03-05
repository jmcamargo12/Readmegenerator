const fs = require("fs");
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "Description",
      message: "Describe your project"
    },
    {
      type: "input",
      name: "Instalation",
      message: "Give us the instalation information"
    },
    {
      type: "input",
      name: "Usage",
      message: "What is the usage purpose?"
    },
    {
      type: "input",
      name: "License",
      message: "What licences does your product require?"
    },
    {
      type: "input",
      name: "Contributing",
      message: "Who is allowed to contribute?"
    },
    {
      type: "input",
      name: "Tests",
      message: "What test are you running?"
    }
  ])
  .then(data => {
    const title = data.Title;
    const description = data.Description;
    const instalation = data.Instalation;
    const usage = data.Usage;
    const license = data.License;
    const contributing = data.Contributing;
    const tests = data.Tests;

    let Readmoi = `

    README file information. 
    
    (1) Project Title has been defined and saved as ${title}.
    (2) Project Description : ${description}
    (3) Instalation Details : ${instalation}
    (4) Usage specs : ${usage}
    (5) Licenses : ${license}
    (6) Contributing : ${contributing}
    (7) Tests applied : ${tests}
    `;
    fs.writeFile("README.md", Readmoi, err => {
      if (err) {
        throw err;
      }
      console.log("success!");
    });
  });
