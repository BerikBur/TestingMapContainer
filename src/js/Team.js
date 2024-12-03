class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if(this.members.has(character)) {
            throw new Error('Такой персонаж уже существует');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => this.members.add(character));
    }

    toArray() {
        return Array.from(this.members);
    }
}

// Пример класса Character (для тестирования)
class Character {
    constructor (name, level) {
        this.name = name;
        this.level = level;
    }
}

export { Team, Character };