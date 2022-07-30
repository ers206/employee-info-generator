
// from 10.2.4 
function Employee(name = '') {
    
        this.name = name;
      
        this.id
        this.email

        getName()

        getId()

        getEmail()

        getRole() // Returns 'Employee'
    
      }
      

module.exports = Employee;



// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

// Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.