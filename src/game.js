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
        this.clues = ['Study', 'Library', 'Lounge', 'Game Room', 'Hall', 'Dining Room', 'Conservatory', 'Ballroom', 'Kitchen', 'Revolver', 'Rope', 'Lead Pipe', 'Knife', 'Candlestick', 'Wrench', 'white', 'blue', 'green', 'purple', 'yellow', 'red'];
        this.turnNumber = 0;

        this.createMystery();
        this.initSuspects(playerColor);
    }

    initSuspects(playerColor) {
        let colors = ['white', 'blue', 'green', 'purple', 'yellow', 'red'];
        let locations = this.rooms.map((x) => x);
        for (let i = 0; i < 6; i++) {
            const randomColor = getRandomFrom(colors);
            const randomLoc = getRandomFrom(locations);
            let randomClues = [];

            for (let j = 0; j < 3; j++) {
                const clue = getRandomFrom(this.clues);
                this.clues.splice(clue.index, 1);
                randomClues.push(clue.value);
            }

            this.suspects.push(
                new Suspect(randomColor.value, randomClues, (randomColor.value === playerColor), randomLoc.value)
            );

            colors.splice(randomColor.index, 1);
            locations.splice(randomLoc.index, 1);
        }
    }

    createMystery() {
        let colors = ['white', 'blue', 'green', 'purple', 'yellow', 'red'];

        const murderer = getRandomFrom(colors);
        this.caseFile.push(murderer.value);
        this.clues.splice(this.clues.indexOf(murderer.value), 1);

        const murderWeapon = getRandomFrom(this.weapons);
        this.caseFile.push(murderWeapon.value);
        this.clues.splice(this.clues.indexOf(murderWeapon.value), 1);

        const murderLocation = getRandomFrom(this.rooms);
        this.caseFile.push(murderLocation.value);
        this.clues.splice(this.clues.indexOf(murderLocation.value), 1);
    }
}
