import {Book} from "./Book"

export class Library
{
    private Books :Book[];
    private Address :string;
    private Manager :string;

    //constructor
    constructor(Books:Book[],Address:string,Manager:string)
    {
        this.Books = Books;
        this.Address = Address;
        this.Manager = Manager;
    }

    //Set & Get
    public getAddress():string
    {
        return this.Address;
    }
    public getManager():string
    {
        return this.Manager;
    }
    public getNumberOfBooks():Number
    {
        return this.Books.length
    }
    
    public setAddress(Address:string):void
    {
        this.Address = Address
    }
    public setManager(Manager:string):void
    {
        this.Manager = Manager
    }
    //Metodo
    public toStringlibrary():string
    {
        let libreria:string = "";
       
        for(let i = 0; i < this.Books.length; i++)
        {
            libreria += "Book" + (i+1) + "\n" + this.Books[i].toStringBook() + "\n"; 
        } 
        return libreria            
    }
    public FindByAuthor(Author:string):Book[]
    {
        let BooksOfAuthor:Book[]=[];
        for (let i = 0; i<this.Books.length;i++)
            {
                if (this.Books[i].getauthor() === Author)
                        BooksOfAuthor.push(this.Books[i]);
            }              
        return BooksOfAuthor;
    }           
}