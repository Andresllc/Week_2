import{ Book } from "./Book"
import { Library } from "./Library"

let Book1 = new Book("El Camino de Los Reyes",1583,"9780765326355","Brandon Sanderson","Nova");
let Book2 = new Book("Palabras Radiantes",1144,"9780765326362","Brandon Sanderson", "Nova");
let Book3 = new Book("Juramentada",1408,"8417347003","Brandon Sanderson", "Nova");
let Book4 = new Book("El Ritmo de la Guerra",1408,"8417347933","Brandon Sanderson", "Nova");
let library1 = new Library([Book1,Book2,Book3,Book4],"Calle De los sueños","Manager");

console.log(library1);
console.log(library1.toStringlibrary());
console.log(library1.FindByAuthor("Brandon Sanderson"))
//Enserio lee el archivo de las tormentas