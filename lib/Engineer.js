// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

const Engineer = function(name, id, email, github ) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = 0;
    this.role = "Engineer";
    this.github = github;
    };
    Engineer.prototype = new Employee( this.name, this.id, this.email, this.officeNumber );
    
    Engineer.prototype.getGithub = function() {
        return this.github;
    }


module.exports = Engineer;