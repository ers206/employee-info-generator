class Manager {
    constructor (name, id, email, officeNumber){
          
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;

        // getName()

        // getId()

        // getEmail()

        // getRole() // Returns 'Manager'
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
