import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Наследники Character', () => {
  const cases = [
    [Bowman, 'Bowman', 25, 25],
    [Swordsman, 'Swordsman', 40, 10],
    [Magician, 'Magician', 10, 40],
    [Daemon, 'Daemon', 10, 40],
    [Undead, 'Undead', 25, 25],
    [Zombie, 'Zombie', 40, 10],
  ];

  test.each(cases)('%p выставляет тип и характеристики', (Class, type, attack, defence) => {
    const char = new Class('Hero');
    expect(char.name).toBe('Hero');
    expect(char.type).toBe(type);
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(attack);
    expect(char.defence).toBe(defence);
  });
});