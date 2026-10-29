import Character from './Character';
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

// Точка входа для сборки Webpack.
// Классы импортированы, чтобы сборщик их видел.
console.log('Классы персонажей загружены:', {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
});