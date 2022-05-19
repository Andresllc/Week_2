"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var Library_1 = require("./Library");
var Book1 = new Book_1.Book("El Camino de Los Reyes", 1583, "9780765326355", "Brandon Sanderson", "Nova");
var Book2 = new Book_1.Book("Palabras Radiantes", 1144, "9780765326362", "Brandon Sanderson", "Nova");
var Book3 = new Book_1.Book("Juramentada", 1408, "8417347003", "Brandon Sanderson", "Nova");
var Book4 = new Book_1.Book("El Ritmo de la Guerra", 1408, "8417347933", "Brandon Sanderson", "Nova");
var library1 = new Library_1.Library([Book1, Book2, Book3, Book4], "Calle De los sueños", "Manager");
console.log(library1);
console.log(library1.toStringlibrary());
console.log(library1.FindByAuthor("Brandon Sanderson"));
//Enserio lee el archivo de las tormentas
