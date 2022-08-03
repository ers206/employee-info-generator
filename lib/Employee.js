
 
class Employee{
    constructor (name,id,email){
        this.name = name;
      
        this.id = id;

        this.email = email; 
        
    }
    
    // getId()
        
    // getEmail()
    
    // getRole() // Returns 'Employee'
     getName = function(){
       return this.name
     }
    }

module.exports = Employee;

// from module 10.2.7 use to get employee info use for functions above 

// this.inventory = [new Potion('health'), new Potion()];
  
//     // returns an object with various player properties
//     this.getStats = function() {
//       return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//       };
//     };
  
//     // returns the inventory array or false if empty
//     this.getInventory = function() {
//       if (this.inventory.length) {
//         return this.inventory;
//       }
//       return false;
//     };

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