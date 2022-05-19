export class Vector
{
    private elementos: number[];

    constructor(n:number,k:number)
    {
        this.elementos = Vector1(n,k);

        function Vector1( n:number ,k :number):number[]
        {
            let vector1 =[]
            for(let i= 0; i < n; i++)
            {
            vector1[i] = (Math.round(Math.random()*k));
            }
            return vector1;
        }
    }

    //Metodos

    public print():void
    {
        console.log(this.elementos);
    }
    public add(v1:Vector):Vector
    {
        for(let i=0; i < this.elementos.length; i++)
        {
            this.elementos[i] = this.elementos[i] + v1.elementos[i] ;
        }    return this
    }
    public subs(v1:Vector):Vector
    {
        for(let i=0; i < this.elementos.length; i++)
        {
            this.elementos[i] = this.elementos[i] - v1.elementos[i] ;
        }    return this
    }
    public mult(v1:Vector):Vector
    {
        for(let i=0; i < this.elementos.length; i++)
        {
            this.elementos[i] = this.elementos[i] * v1.elementos[i] ;
        }    return this
    }
    public multn(n:number):Vector
    {
        for(let i=0; i < this.elementos.length; i++)
        {
            this.elementos[i] = this.elementos[i] * n ;
        }    return this
    }
}