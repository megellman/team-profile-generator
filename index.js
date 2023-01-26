const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

getManagerInfo()

function getManagerInfo() {
    inquirer.prompt([
        {
            message: 'Enter the name',
            name: 'name',

        },
        {
            type: 'number',
            message: 'Enter the employee id',
            name: 'id',
        },
        {
            message: 'Enter the email address',
            name: 'email',
        },
        {
            type: 'number',
            message: 'Enter the office number',
            name: 'officeNumber'
        }
    ]).then((response) => {
        console.log(response)
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        console.table(manager)
        fs.writeFile('index.html', 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>My Team</h1>
    <div class="container">
        <div class="card">
            <div class="title">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class="details">
                <p>ID: <span>${manager.id}</span></p>
                <p>Email: <span>${manager.email}</span></p>
                <p>Office Number: <span>${manager.officeNumber}</span></p>
                </div>
            </div>`, err => {
            err ? console.log(err)
                : loop();
        });
    })
}

function loop() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Select one option',
            choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
            name: 'addOrDone'
        }
    )
        .then((response) => {
            if (response.addOrDone === 'Add an engineer') {
                addEngineer();
            } else if (response.addOrDone === 'Add an intern') {
                addIntern();
            } else if (response.addOrDone === 'Finish building team') {
                finish();
            }
        })

}


function addEngineer() {
    inquirer.prompt([
            {
                type: "input",
                message: 'Enter the name',
                name: 'name',
            },
            {
                type: 'number',
                message: 'Enter the employee id',
                name: 'id',
            },
            {
                message: 'Enter the email address',
                name: 'email',
            },
            {
                message: 'Enter the GitHub username',
                name: 'github'
            }
        ]).then((response) => {
            console.log(response)
            let engineer = new Engineer(response.name, response.id, response.email, response.github);
            console.table(engineer)
            fs.appendFile('index.html', 
`<div class="card">
    <div class="title">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
    </div>
    <div class="details">
        <p>ID: <span>${engineer.id}</span></p>
        <p>Email: <span>${engineer.email}</span></p>
        <p>GitHub: <span>${engineer.github}</span></p>
    </div>
</div>`, err => {
                err ? console.log(err)
                : loop();
            });
        })
    }



function addIntern() {
    inquirer.prompt([
        {
            message: 'Enter the name',
            name: 'name',
        },
        {
            type: 'number',
            message: 'Enter the employee id',
            name: 'id',
        },
        {
            message: 'Enter the email address',
            name: 'email',
        },
        {
            message: 'Enter the school',
            name: 'school'
        }
    ])
        .then((response) => {
            console.log(response);
            let intern = new Intern(response.name, response.id, response.email, response.school);
            console.table(intern)
            fs.appendFile('index.html', 
    `<div class="card">
        <div class="title">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>
        <div class="details">
            <p>ID: <span>${intern.id}</span></p>
            <p>Email: <span>${intern.email}</span></p>
            <p>School: <span>${intern.school}</span></p>
        </div>
    </div>`, err => {
                err ? console.log(err)
                    : loop();
            });
        })
}

function finish() {
    fs.appendFile('index.html', `
</div>
</body>
</html>`, err => {
        err ? console.log(err)
            : console.log('HTML file generated!')
    });
}
