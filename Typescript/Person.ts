export class Person
{
    //Declaracionde Atributos
    public Name: string;
    public Age: number;
    private Address: string;

    //Implementacion del metodo constructror
    constructor(Name: string, Age: number, Address: string)
    {
        this.Name = Name;
        this.Age = Age;
        this.Address = Address;
    }

    // Get & Set
    public getAdress():string
    {
        return this.Address;
    }

    public setAddress(Address:string): void
    {
        this.Address = Address
    }

    //metodos
    public printName(): void
    {
        console.log(this.Name);
    }

    public yearOfBrith(ActualYear:number):number
    {
        return ActualYear - this.Age;  
    }
}