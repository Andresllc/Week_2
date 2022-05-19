"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    //constructor
    function Library(Books, Address, Manager) {
        this.Books = Books;
        this.Address = Address;
        this.Manager = Manager;
    }
    //Set & Get
    Library.prototype.getAddress = function () {
        return this.Address;
    };
    Library.prototype.getManager = function () {
        return this.Manager;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.Books.length;
    };
    Library.prototype.setAddress = function (Address) {
        this.Address = Address;
    };
    Library.prototype.setManager = function (Manager) {
        this.Manager = Manager;
    };
    //Metodo
    Library.prototype.toStringlibrary = function () {
        var libreria = "";
        for (var i = 0; i < this.Books.length; i++) {
            libreria += "Book" + (i + 1) + "\n" + this.Books[i].toStringBook() + "\n";
        }
        return libreria;
    };
    Library.prototype.FindByAuthor = function (Author) {
        var BooksOfAuthor = [];
        for (var i = 0; i < this.Books.length; i++) {
            if (this.Books[i].getauthor() === Author)
                BooksOfAuthor.push(this.Books[i]);
        }
        return BooksOfAuthor;
    };
    return Library;
}());
exports.Library = Library;
