export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    const stats = {
      Bowman: { attack: 25, defence: 25 },
      Swordsman: { attack: 40, defence: 10 },
      Magician: { attack: 10, defence: 40 },
      Daemon: { attack: 10, defence: 40 },
      Undead: { attack: 25, defence: 25 },
      Zombie: { attack: 40, defence: 10 },
    };

    this.attack = stats[type].attack;
    this.defence = stats[type].defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}