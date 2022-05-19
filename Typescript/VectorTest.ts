import { Vector } from "./Vector";

let vector1 = new Vector(10,10);
let vector2 = new Vector(10,10);

vector1.print();
vector2.print();
console.log(vector1.add(vector2));
console.log(vector1.subs(vector2));
console.log(vector1.mult(vector2));
console.log(vector1.multn(2))
