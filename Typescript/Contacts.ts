import {Person} from "./Person"

export class Contacts 
{
    //Atributo
    public People : Object[];

    //Constructor
    constructor()
    {
        this.People = [];
    }

    //Metodos
    printCalendar(): void
    {
        console.log(this.People)
    }
}