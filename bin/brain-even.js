#!/usr/bin/env node

import * as game from '../src/index.js';
import actual from '../src/index.js';

// Поприветствуем и спросим имя
console.log('Welcome to the Brain Games!');
const name = actual();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameAct = game.evenGame(15, 6, 7);

if (gameAct === 'Correct') {
  console.log(`Congratulations ${name}!`);
} else {
  console.log(`"${gameAct[1]}" is wrong answer ;(. Correct answer was "${gameAct[2]}".
Let's try again, ${name}`);
}
