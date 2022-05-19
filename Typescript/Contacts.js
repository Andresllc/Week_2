"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    //Constructor
    function Contacts() {
        this.People = [];
    }
    //Metodos
    Contacts.prototype.printCalendar = function () {
        console.log(this.People);
    };
    return Contacts;
}());
exports.Contacts = Contacts;
