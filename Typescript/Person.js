"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    //Implementacion del metodo constructror
    function Person(Name, Age, Address) {
        this.Name = Name;
        this.Age = Age;
        this.Address = Address;
    }
    // Get & Set
    Person.prototype.getAdress = function () {
        return this.Address;
    };
    Person.prototype.setAddress = function (Address) {
        this.Address = Address;
    };
    //metodos
    Person.prototype.printName = function () {
        console.log(this.Name);
    };
    Person.prototype.yearOfBrith = function (ActualYear) {
        return ActualYear - this.Age;
    };
    return Person;
}());
exports.Person = Person;
