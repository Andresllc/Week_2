import { Person } from "./Person"

let person1 = new Person("Alba",21,"Carretera de Húmera");


console.log(person1.Name);
console.log(person1.Age);
person1.printName();
console.log(person1.yearOfBrith(2022));
console.log(person1.getAdress());
person1.setAddress("Calle de la Grandeza Española");
console.log(person1.getAdress());