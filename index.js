const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const questions = require("./lib/questions.js")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// inspired and adapted from advice found here: https://stackoverflow.com/questions/45060200/in-node-js-how-do-i-create-a-prompt-loop-using-inquirer

const team = [];

const finish = () => {
    fs.writeFile(outputPath, render(team), (err) => {
        if (err) {
    console.log(err);
        }
  else {
    console.log("File written successfully\n");
    }})
};

const branch = () => {
    inquirer.prompt(questions.branchQs).then(answers => {
        switch (answers.decision){
            case "Add an Engineer":
                addEngineer();
                break;
            case "Add an Intern":
                addIntern();
                break;
            case "Finish building the team":
                finish();
                break;
            default:
                break;
        }
    });
};


const addEngineer = () => {
    inquirer.prompt(questions.engineerQs).then(answers => {
        const engineer = new Engineer(answers.eName, answers.eID, answers.eEmail, answers.eGithub);
        team.push(engineer);
        branch();
    });
};

const addIntern = () => {
    inquirer.prompt(questions.internQs).then(answers => {
        const intern = new Intern(answers.eName, answers.eID, answers.eEmail, answers.eSchool);
        team.push(intern);
        branch();
});
};

const start = () => {
    inquirer.prompt(questions.managerQs).then((answers) => { 
        const manager = new Manager(answers.mName, answers.mID, answers.mEmail, answers.mON);
        team.push(manager);
        branch();
    });
};

start();