import {Person} from "./Person"
import {Contacts} from "./Contacts"

let person1 = new Person("Alba",21,"Carretera de Húmera");
let person2 = new Person("Irene",22,"Calle de Galileo");
let person3 = new Person("Diana",20,"Calle de Tenerife");
let contact = new Contacts();
contact.People.push(person1,person2,person3);

contact.printCalendar();
console.log(contact.People);