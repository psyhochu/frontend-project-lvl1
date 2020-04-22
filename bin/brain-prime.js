#!/usr/bin/env node

import actual, { resultOfGame } from '../src/index.js';
import engine from '../src/engine.js';
import randomNumber from './randomisers.js';
import prime from './games/prime.js';


// Поприветствуем и спросим имя
const name = actual();

// Задаем вопрос
console.log('"yes" if given number is prime. Otherwise answer "no".');


// Список вопросов в виде массива
const arrOfQuestions = [randomNumber(1, 10),
  randomNumber(1, 10),
  randomNumber(1, 10)];

// Игровой движок принимает функцию и список вопросов, задает вопросы
// и выдает вердикт о корректности ответов.
const gameStart = engine(prime, arrOfQuestions);

// Печатаем на экран ты выиграл иль ты тупой
resultOfGame(gameStart, name);
