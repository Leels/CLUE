export class Game {
  constructor() {

    this.rooms = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    this.weapons = [];
    this.suspects = [];
    this.state = active;
    this.caseFile = [];
    this.turnNumber = 0;
  }


}
