import { Suspect } from './suspect.js';
import { gameVars } from './suspect.js';

export class Game {
    constructor(playerChar) {
        this.suspects = [];
        this.caseFile = [];
        this.turnNumber = 0;

        this.initSuspects(playerChar, this.initCaseFile());
    }

    initCaseFile() {
        const cards = [...gameVars.guests, ...gameVars.rooms, ...gameVars.weapons];
        for (const varType in gameVars) {
            const randCard = getRandomFrom(gameVars[varType]);
            this.caseFile.push(randCard);
            cards.splice(cards.indexOf(randCard), 1);
        }
        return shuffleArray(cards);
    }

    initSuspects(playerChar, cards) {
        shuffleArray(gameVars.guests).forEach((guest) => {
            this.suspects.push(
                new Suspect(
                    guest,
                    [cards[0], cards[1], cards[2]],
                    guest === playerChar,
                    guest === this.caseFile[0]
                )
            );
            cards.splice(0, 3);
        }, this); //THE 'THIS' PARAM SHOULD MAKE 'THIS' CONTEXT FIXED IN LOOP
    }
}

function getRandomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) { //taken from Medium
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
