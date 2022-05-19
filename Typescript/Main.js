"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Contacts_1 = require("./Contacts");
var person1 = new Person_1.Person("Alba", 21, "Carretera de Húmera");
var person2 = new Person_1.Person("Irene", 22, "Calle de Galileo");
var person3 = new Person_1.Person("Diana", 20, "Calle de Tenerife");
var contact = new Contacts_1.Contacts();
//Reto2
console.log(person1.Name);
console.log(person1.Age);
person1.printName();
console.log(person1.yearOfBrith(2022));
console.log(person1.getAdress());
person1.setAddress("Calle de la Grandeza Española");
console.log(person1.getAdress());
//Reto3
contact.People.push(person1, person2, person3);
contact.printCalendar();
console.log(contact.People);
