import { Suspect } from './suspect.js';

function getRandomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export class Game {
    constructor(playerColor) {
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
                this.clues.splice(this.clues.indexOf(clue), 1);
                randomClues.push(clue);
            }

            this.suspects.push(
                new Suspect(randomColor, randomClues, (randomColor === playerColor), this.caseFile.includes(randomColor), randomLoc)
            );

            colors.splice(colors.indexOf(randomColor), 1);
            locations.splice(locations.indexOf(randomLoc), 1);
        }
    }

    createMystery() {
        let colors = ['white', 'blue', 'green', 'purple', 'yellow', 'red'];

        const murderer = getRandomFrom(colors);
        this.caseFile.push(murderer);
        this.clues.splice(this.clues.indexOf(murderer), 1);

        const murderWeapon = getRandomFrom(this.weapons);
        this.caseFile.push(murderWeapon);
        this.clues.splice(this.clues.indexOf(murderWeapon), 1);

        const murderLocation = getRandomFrom(this.rooms);
        this.caseFile.push(murderLocation);
        this.clues.splice(this.clues.indexOf(murderLocation), 1);
    }

    accuse(murderer, murderWeapon, murderLocation) {
        return (this.caseFile[0] === murderer && this.caseFile[1] === murderWeapon && this.caseFile[2] === murderLocation);
    }
}
