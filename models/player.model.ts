export class Player {
  lastName: string;
  playerNum: number;
  position: string;

  constructor(data?: any) {
    this.lastName = data.lastName || 'a';
    this.playerNum = data.playerNum || '0';
    this.position = data.position || 'qb';
  }
}