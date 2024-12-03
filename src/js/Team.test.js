import { Team, Character } from './Team';

describe('Тестирование класса Team', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Warrior', 10);
        character2 = new Character('Mage', 15);
        character3 = new Character('Archer', 12);
    });

    test('Метод add должен добавить персонажа в контейнер Set', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });

    test('Метод add должен выдать ошибку при добавлении уже существуюшего персонажа', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Такой персонаж уже существует');
    });

    test('Метод addAll должен добавлять произвольное количество персонажей', () => {
        team.addAll(character1, character2, character3);
        expect(team.toArray()).toEqual([character1, character2, character3]);
    });

    test('Метод addAll не должен выдавать ошибку при дублировании персонажей', () => {
        team.addAll(character1, character2);
        team.addAll(character1, character3);
        expect(team.toArray()).toEqual([character1, character2, character3]);
    });

    test('Метод toArray должен возвращать объект массив members', () => {
        team.addAll(character1, character2);
        const membersArray = team.toArray();
        expect(membersArray).toBeInstanceOf(Array);
        expect(membersArray).toEqual([character1, character2]);
    });
});
