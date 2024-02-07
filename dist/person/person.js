"use strict";
// Define a class
var Person = /** @class */ (function () {
    // Constructor
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Method to get full name
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
// Create an instance of the class
//const person = new Person("John", "Doe");
// Access properties and methods
//console.log(person.getFullName()); // Output: John Doe
