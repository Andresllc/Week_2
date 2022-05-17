let {Person} = require("./Person");
let {Contacts} = require("./Contacts");
 
let Contact1 = new Contacts;
let Person2 = new Person("Irene",1.55,40,"Castaño",2000,["Cantar","Bailar","Quejarse","Viajar"])
let Person1 = new Person("Alba",1.65,50,"Negro Azabache",2001, ["Cantar ", "Leer ","Dibujar ", "Bailar "])

Contact1.Array.push(Person1)
Contact1.Array.push(Person2)
Contact1.printPersons()