let {Person} = require("./Person");

let Person1 = new Person("Alba",1.60,50,"Negro Azabache",2001, ["Cantar ", "Leer ","Dibujar ", "Bailar "])

console.log(Person1);
console.log(Person1.IMC())
console.log(Person1.EdadCalculator())
Person1.PrintHobbies()
Person1.PrintAll()
