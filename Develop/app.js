const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//let team_Action;

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const team_Action = [
    {
        type: "List",
        name: "Team options",
        message: "What would you like to do?",
        choices: ["Add the manager, Add an engineer, add an intern, View team profile"]

    
    }
]
    
const q_Eng = [
    {
        type: "input",
        name: "Name",
        message: "Please enter the employee's name"

    },
    {
        type: 'Number',
        name: "id",
        message: "What is the employee ID"
    },
    {
        type: 'input',
        name: "email",
        message: "What is the employee email address"
    },
    {
        
        type: 'input',
        name: "github username",
        message: "What is the engineer github username?"
    }

]

const q_Mngr = [
    {
        type: "input",
        name: "Name",
        message: "Please enter the employee's name"

    },
    {
        type: 'Number',
        name: "id",
        message: "What is the employee ID"
    },
    {
        type: 'input',
        name: "email",
        message: "What is the employee email address"
    },
    {
        
        type: 'Number',
        name: "Office Number",
        message: "What is the manager`s office number?"
    }

]
const q_Intern = [
    {
        type: "input",
        name: "Name",
        message: "Please enter the employee's name"

    },
    {
        type: 'Number',
        name: "id",
        message: "What is the employee ID"
    },
    {
        type: 'input',
        name: "email",
        message: "What is the employee email address"
    },
    {
        
        type: 'input',
        name: "School",
        message: "What is the intern`s school name?"
    }

]

inquirer.prompt(team_Action).then(function(response1){
    if (response1.choices[0]){
        inquirer.prompt(q_Mngr)
    }
    else if (response1.choices[1]){
        inquirer.prompt(q_Eng)
    }else if (response1.choices[2]){
        inquirer.prompt(q_Intern)
    }else {
        console.log("View team profile function here")
    }
})

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
