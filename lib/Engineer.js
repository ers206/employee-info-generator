const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
      

    this.github = github;

}
// getGithub()
getGithub () {
    return "github"
}
// // getName()
// getName () {
//     return "name"
// }
// // getId()
// getId() {
//     return "id"
// }
// // getEmail()
// getEmail() {
//     return "email"
// }

// getRole() // Returns 'Engineer'
getRole = function() {
    return "Engineer"
}
}
module.exports = Engineer;

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'