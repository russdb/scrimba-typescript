export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  playerNum: number;

  constructor(data?: any) {
    this.firstName = data.firstName || 'Michael';
    this.lastName = data.lastName || 'jordan';
    this.middleName = data.middleName;
    this.playerNum = data.playerNum || 23;
  }
}