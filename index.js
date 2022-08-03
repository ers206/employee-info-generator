const inquirer = require('inquirer'); 

// Start with asking what type of employee Engineer, Intern, Manager or start with name ide and email
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter employees name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'enter employees id number',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter employee id');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'enter employees email',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter employees email');
              return false;
            }
          }
      },
      {
        type: 'list',
        name: 'role',
        message: 'What is the employees role?',
        choices: ["Intern", "engineer", "manager" ],
        validate: officeNumberInput => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log('Please enter the employees role');
              return false;
            }
          }
      }
      
    //   then have questions pertaining to waht role they are in ...interns will be asked what school they attended, managers what store they are running... 

      
    ]);
  };
  promptUser()


//   GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// invoked using Node index.js 


// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json        