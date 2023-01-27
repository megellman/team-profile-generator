# Team Profile Generator
![license badge](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

## Technology Used

| Technology Used | Resource URL |
| --------- | :--------- |
| HTML | [https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| CSS    | [https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS)  |
| Git   |  [https://git-scm.com](https://git-scm.com)  |


## Description

[Video Walkthrough](https://watch.screencastify.com/v/JvUDmdSZkoc6X4SJHQtU)
    
This command-line application generates a lineup of profile cards for a team based on the user's answers to prompted questions.

This was achieved by using Node.js, Inquirer, and Jest. When the user runs node index.js, they are prompted with a series of questions about the manager's information. Once completed, they are asked whether they would like to add an engineer, intern, or finish adding team. If they select 'add an engineer' they are prompted with questions about their name, id, email, and GitHub username. Once completed, they are prompted with the same question again. If they choose 'add an intern', they are prompted with questions about their name, id, email, and school. Once completed, they are prompted with the same question about choosing to add another or finish. If they choose finish, an HTML file will be created with an employee card for each employee. Additionally, using jest, the classes are validated to ensure that they are functioning as intended.

I created this project to gain more experience with Node.js, Inquirer, and Jest. This application built upon my previous work of creating a README.md file based on a series of questions by now including testing with Jest.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
    
Install node with `npm install`. Install Inquirer with `npm install inquirer`. Install Jest with `npm install jest`.
    
## Usage
  
This project can be used to generate team information cards based on the user's responses to the questions. To run the application, type node index.js in the command line. You will then be prompted with a series of questions. Once finished, select 'Finish building team'.
    
## Credits

| Resource | Link |
| -------| :-------|
| Node.js | [nodejs.org](https://nodejs.org/docs/latest-v16.x/api/) |
| Inquirer | [npmjs.com](https://www.npmjs.com/package/inquirer) |
| Jest | [jestjs.io](https://jestjs.io/docs/getting-started) |

    
## License
  
  This project is covered under the MIT license. For more information please click [here](https://choosealicense.com/)

## Tests
I used Jest to create the tests. To run the tests, enter `npm run test` in the command line. 

## Questions

[GitHub](github.com/megellman)

If you have any additional questions, you can reach me at meganlellman@gmail.com
