import { Animal } from './animal.model';  

export class Bear extends Animal {
  claws: number;
  name: string;
  tail: boolean;

  constructor(data?: any) {
    super(data);
    this.claws = data.claws || 0;
    this.name = data.name || '';
    this.tail = data.tail || '';
  }
}