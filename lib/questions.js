const managerQs  = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "mName",  
    },
    {
        type: "input",
        message: "What is the manager's Employee ID?",
        name: "mID", 
    },
    {
        type: "input",
        message: "What is the manager's e-mail address?",
        name: "mEmail", 
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "mON", 
    },
];

const branchQs = [
    {
        type: "list",
        message: "Next, would you like to...?",
        name: "decision",
        choices: ["Add an Engineer", "Add an Intern", "Finish building the team"]
    }
]

const engineerQs = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "eName",
    },
    {
        type: "input",
        message: "What is the employee's ID Number?",
        name: "eID",
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "eEmail",
    },
    {
        type: "input",
        message: "What is the employee's github username?",
        name: "eGithub",
    },
];

const internQs = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "eName",
    },
    {
        type: "input",
        message: "What is the employee's ID Number?",
        name: "eID",
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "eEmail",
    },
    {
        type: "input",
        message: "What is the employee's Schhol?",
        name: "eSchool",
    },
]

module.exports = 
{
    managerQs,
    branchQs,
    engineerQs,
    internQs
}