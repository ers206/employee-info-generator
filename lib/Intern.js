const Employee = require("./Employee");

class Intern extends Employee{
    constructor (name,id, email, school){
        super(name, id, email)
        this.school = school;
    }
    
        // getSchool()
    getSchool = function(){
        return "school"
    }
        // getRole() // Returns 'Intern'

    getRole = function() {
        return "Intern"
    }
}
module.exports = Intern;

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'
