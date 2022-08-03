const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name,id,email,officeNumber){
        super(name, id, email) 
        
       
        this.officeNumber = officeNumber;

    }
    // getName()
    
    // getId()
    
    // getEmail()
    
    
    getRole = function() {
        return "Manager"
    }
    
}
module.exports = Manager; 

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

// function hello (name) {

//     return 'hello' + name
  
//   }
  
//   exports.hello = hello
