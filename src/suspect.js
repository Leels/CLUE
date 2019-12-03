export const gameVars = {
    guests: ['Mrs. White', 'Mrs. Peacock', 'Mr. Green', 'Prof. Plum', 'Col. Mustard', 'Ms. Scarlet'],
    rooms: ['Study', 'Library', 'Lounge', 'Billiard Room', 'Hall', 'Dining Room', 'Conservatory', 'Ballroom', 'Kitchen'],
    weapons: ['Revolver', 'Rope', 'Lead Pipe', 'Knife', 'Candlestick', 'Wrench']
}

export class Suspect {
    constructor(name, knowledge, isHuman, isMurderer) {
        this.name = name;
        this.knowledge = knowledge;
        this.isHuman = isHuman;
        this.isMurderer = isMurderer;

        this.location = 'Hall';
        this.clues = [];
    }

    moveTo(newRoom) {
        this.location = newRoom;
    }

    inquire() {

    }
}
