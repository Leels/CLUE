export const gameVars = {
    guests: ['Mrs. White', 'Mrs. Peacock', 'Mr. Green', 'Prof. Plum', 'Col. Mustard', 'Miss Scarlet'],
    rooms: ['Study', 'Library', 'Lounge', 'Billiard Room', 'Hall', 'Dining Room', 'Conservatory', 'Ballroom', 'Kitchen'],
    weapons: ['Revolver', 'Rope', 'Lead Pipe', 'Knife', 'Candlestick', 'Wrench']
};

export class Suspect {
    constructor(name, knowledge, isHuman, isMurderer) {
        this.name = name;
        this.knowledge = knowledge;
        this.isHuman = isHuman;
        this.isMurderer = isMurderer;
        this.isAlive = true;

        this.location = 'Hall';
        this.clues = [];
    }

    moveTo(newRoom) {
        if (newRoom) {
            this.location = newRoom;
        } else {
            this.location = gameVars.rooms[Math.floor(Math.random() * gameVars.rooms.length)];
        }
        return this.location;
    }

    inquire(whom, guessArr) {
        for (let i = 0; i < guessArr.length; i++) {
            if (whom.knowledge.includes(guessArr[i])) {
                this.clues.push(guessArr[i]);
                return guessArr[i];
            }
        }
        return false;
    }

    accuse(caseFile, guessArr) {
        for (let i = 0; i < guessArr.length; i++) {
            if (caseFile[i] !== guessArr[i]) return false;
        }
        return true;
    }
}
