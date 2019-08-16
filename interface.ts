//interfaces are great for creatin custom types
//interfaces can't do default values or enforce things from servers
import { Person } from './interfaces/person.interface';

//barrel importing
//circular dependencies can cause errors, avoid them!
import { Man, Bear, Pig } from './interfaces/index';

import { BearModel } from './models/bear.model';

const personEx1: Person = {
  firstName: 'Barak',
  middleName: ''
}

// personEx1.middleName = 'Hussein';
// personEx1.lastName  = 'Obama';

console.log(personEx1);  

//$intersection types
//intersection types are the ability to add multiple types to a single class
// as well as create a new type based off of that. 

let man: Man;  
let bear: Bear;
let pig: Pig;

type manBearPig = Bear & Man & Pig;

let manBearPig: manBearPig = {
  snout : true,
  claws : 5,
  weight: 740,
  intel : false,
  speech: true,
  snort : false
}
//now we can use all of the properties!!  
console.log(manBearPig)

manBearPig.claws = 4;
console.log(manBearPig.claws)

//another example, notice x
interface D { d: boolean; }
interface E { e: string; }
interface F { f: number; }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
    x: {
        d: true,
        e: 'codingblast',
        f: 3
    }
};

console.log('abc:', abc); 


//$generics
// a way to manipulate and add clarity to a weird type..
// say we don't know what it is, or manipulate after passing in
function genericEx<T>(arg: T): T {
  return arg;
}

console.info(genericEx(104));  

//we can also do it with arrays! 

function genericEx2<T>(arg: T[]): T[] {
  return arg;
}

console.info((genericEx2([5])))  


//$access modifier 
//who can access a function, like solidity or vyper or python.

