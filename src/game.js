import { Suspect } from './suspect.js';
import { gameVars } from './suspect.js';

function getRandomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export class Game {
    constructor(playerChar) {
        this.suspects = [];
        this.caseFile = [];
        this.turnNumber = 0;

        this.initSuspects(playerChar, this.initCaseFile());
    }

    initCaseFile() {
        const cards = [];
        for (const varType in gameVars) {
            const randomPiece = getRandomFrom(gameVars[varType]);
            this.caseFile.push(randomPiece);

            gameVars[varType].forEach((piece) => {
                if (piece !== randomPiece) cards.push(piece);
            });
        }
        return cards;
    }

    initSuspects(playerChar, cards) {
        const turns = [1, 2, 3, 4, 5, 6];
        const murderer = this.caseFile[0];

        gameVars.guests.forEach((guest) => {
            const randTurn = getRandomFrom(turns);
            turns.splice(turns.indexOf(randTurn), 1);
            const knowledge = [];
            for (let j = 0; j < 3; j++) {
                const card = getRandomFrom(cards);
                cards.splice(cards.indexOf(card), 1);
                knowledge.push(card);
            }
            this.suspects.push(
                new Suspect(
                    guest,
                    knowledge,
                    guest === playerChar,
                    guest === murderer,
                    randTurn
                )
            );
        }, this); //THE 'THIS' PARAM SHOULD MAKE 'THIS' CONTEXT FIXED IN LOOP
    }

    accuse(murderer, murderWeapon, murderLocation) {
        return (this.caseFile[0] === murderer && this.caseFile[1] === murderWeapon && this.caseFile[2] === murderLocation);
    }
}
