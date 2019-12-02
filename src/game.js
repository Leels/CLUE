import { Suspect } from './suspect.js';

function getRandomFrom(array) {
    const index = Math.floor(array.length * Math.random());
    return ({value: array[index], index: index});
}

export class Game {
    constructor(playerColor) {
        this.state = 'active';
        this.rooms = ['Study', 'Library', 'Lounge', 'Game Room', 'Hall', 'Dining Room', 'Conservatory', 'Ballroom', 'Kitchen'];
        this.weapons = ['Revolver', 'Rope', 'Lead Pipe', 'Knife', 'Candlestick', 'Wrench'];
        this.suspects = [];
        this.caseFile = [];
        this.turnNumber = 0;

        this.createMystery();
        this.initSuspects(playerColor);
    }

    initSuspects(playerColor) {
        let colors = ['white', 'blue', 'green', 'purple', 'yellow', 'red'];
        let locations = this.rooms.map((x) => x);
        for (let i = 0; i <=6; i++) {
            const randomColor = getRandomFrom(colors);
            const randomLoc = getRandomFrom(locations);

            this.suspects.push(
                new Suspect(randomColor.value, [], (randomColor.value === playerColor), randomLoc.value)
            );

            colors.splice(randomColor.index, 1);
            locations.splice(randomLoc.index, 1);
        }
    }

    createMystery() {
        let colors = ['white', 'blue', 'green', 'purple', 'yellow', 'red'];
        this.caseFile.push(getRandomFrom(colors).value);
        this.caseFile.push(getRandomFrom(this.weapons).value);
        this.caseFile.push(getRandomFrom(this.rooms).value);
    }
}
