const colorToName = {
    white: 'Mrs. White',
    blue: 'Mrs. Peacock',
    green: 'Mr. Green',
    purple: 'Prof. Plum',
    yellow: 'Col. Mustard',
    red: 'Ms. Scarlet'
}

export class Suspect {
    constructor(color, knowledge, isPlayer, location) {
        this.color = color;
        this.name = colorToName[color];
        this.knowledge = knowledge;
        this.isPlayer = isPlayer;
        this.location = location;
    }

    moveTo(newRoom) {
        this.location = newRoom;
    }
}
