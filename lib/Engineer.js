class Engineer{
    constructor (name, id, email, github){
    this.name = name;
      
    this.id = id;
    this.email = email;
    this.github = github;

    // getGithub()

    // getName()

    // getId()

    // getEmail()

    // getRole() // Returns 'Engineer'
    }

}
module.exports = Engineer;

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'