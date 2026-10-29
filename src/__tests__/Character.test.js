import Character from '../Character';

describe('Character', () => {
  test('создаёт персонажа с корректными данными', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char.name).toBe('Hero');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
  });

  test('выбрасывает ошибку при неверном имени', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
    expect(() => new Character('VeryLongName123', 'Bowman')).toThrow();
    expect(() => new Character(123, 'Bowman')).toThrow();
  });

  test('выбрасывает ошибку при неверном типе', () => {
    expect(() => new Character('Hero', 'Knight')).toThrow();
  });

  test('levelUp повышает уровень и характеристики', () => {
    const char = new Character('Hero', 'Bowman');
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBeCloseTo(30);
    expect(char.defence).toBeCloseTo(30);
    expect(char.health).toBe(100);
  });

  test('levelUp выбрасывает ошибку, если health = 0', () => {
    const char = new Character('Hero', 'Bowman');
    char.health = 0;
    expect(() => char.levelUp()).toThrow();
  });

  test('damage уменьшает health по формуле', () => {
    const char = new Character('Hero', 'Bowman');
    char.damage(40);
    expect(char.health).toBe(70);
  });

  test('damage не опускает health ниже 0', () => {
    const char = new Character('Hero', 'Bowman');
    char.damage(1000);
    expect(char.health).toBe(0);
  });
});