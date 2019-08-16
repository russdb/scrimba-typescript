import { Age } from './enums/Age.enum';
import { Names } from './enums/Names.enum'; 
import {bball} from './enums/Shaq.enum';

function totalAge(age1: Age, age2: Age): number {
  return age1 + age2;
}
console.log(totalAge( Age.john , Age.terrell ))
console.log(Names.qb) 
//log the enum string as a number using assertation
console.log(<number> <unknown>bball.weight) 