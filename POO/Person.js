// Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.

class Person
{
    constructor(Nombre,Altura,Peso,ColorPelo,YearBrith,Hobbies)
    {
        this.Nombre = Nombre;
        this.Altura = Altura;
        this.Peso = Peso;
        this.ColorPelo = ColorPelo;
        this.YearBrith = YearBrith;
        this.Hobbies = Hobbies;
    }

    IMC(Peso,Altura)
    {
        let imcresult = (this.Peso / (this.Altura * this.Altura));
        return imcresult;
    }

    EdadCalculator(YearBrith)
    {
        let ouryear = 2022;
        let Edad = ouryear - this.YearBrith;
        return Edad;
    }

    PrintAll()
    {
        console.log("Nombre" + " - " + this.Nombre + " | " +"Altura" + " - " + this.Altura + " | " +"Peso" + " - " + this.Peso +
         " | " + " ColorPelo "  + " - " + this.ColorPelo  + " | " + "YearOfBirth" + " - " + this.YearBrith +
         " | " + "Hobbies" + " - " + this.Hobbies)
    }

    PrintHobbies(Hobbies)
    {
        console.log(this.Hobbies)
    }
}

module.exports.Person = Person;