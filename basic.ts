import { Bear } from "./models/bear.model";
import { Person } from "./models/person.model";
import { Player } from "./models/player.model";

//basic $typing
let ex1: boolean = true;
console.log(ex1)
let ex2: number = 35; 
console.log(ex2)
let ex3: string = 'hello russ'; 
console.log(ex3)

//sometimes you need $multiple types 

let ex4: boolean | number = 35 //good 
console.log(ex4); 

//always limit to single type if possible. 

// $implicit types 

let ex5 = 'hello world' //auto detects type string 

const berryBear = new Bear(3);
//$type checking, when we cannot use typeof 
if (berryBear instanceof Bear) {
  console.log(berryBear)
} 

//type $assertations  

let notString: any = 1.876
//you can now use this, like in SQL:
console.info(notString as string)
console.info((<string> notString))

//$arrays 
const exArray1: number[] = [1,2,3] 
console.info(exArray1) 

//assign multiple types! 
const exArr2: (number | boolean)[] = [1,2, false, false, 3, true]
console.info(exArr2)

//multi-demension! 
const exArr3: boolean[][] = [ [true, true], [ false,true ] ];
console.info(exArr3)  

//tuples 
const exTuple: [string, number, string] = ['russ is the law', 38, 'aww yeh']
console.log(exTuple) 

//Parameters 
//Person becomes like a type  

function sayHello(person: Person): string {
  return `Say hello to, ${person.firstName} ${person.lastName}`
} 
console.log(sayHello(new Person({firstName: '', lastName: ''})))

console.log(sayHello(new Person({firstName: 'Kevin', lastName: 'Garnett'})))

//$return types 
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// not everything has a return type, in this case, use void 
function voidExample(): void {
  add(1,2);
} 

//if a function never does anything, use never
function neverExample(): never {
  throw Error;
}  

// $custome types 
//this way is sort of depracated in favor of interfaces and classes
type person = {
  firstName: string
} 

const exObj2: person = {
  firstName: 'Matthias'
} 

console.log(exObj2)  

//$classes 

// pass in player with nothing 
const exPlayer1: Player = new Player({});
console.log(exPlayer1);

const exPlayer2: Player = new Player({
  lastName: 'Robinson',
  playerNum: 1,
  position: 'C'
});
console.log(exPlayer2)
