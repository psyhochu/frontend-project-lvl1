#!/usr/bin/env node

import actual, { resultOfGame } from '../src/index.js';
import engine from '../src/engine.js';
import randomNumber from './randomisers.js';
import gcd from './games/gcd';

// Поприветствуем и спросим имя
const name = actual();

// Задаем вопрос
console.log('Find the greatest common divisor of given numbers.');

// Список вопросов в виде массива
const arrOfQuestions = [`${randomNumber(0, 100)} ${randomNumber(0, 100)}`,
  `${randomNumber(-100, 100)} ${randomNumber(-100, 100)}`,
  `${randomNumber(-100, 100)} ${randomNumber(-100, 100)}`];

// Игровой движок принимает функцию и список вопросов, задает вопросы
// и выдает вердикт о корректности ответов.
const gameStart = engine(gcd, arrOfQuestions);

// Печатаем на экран ты выиграл иль ты тупой
resultOfGame(gameStart, name);
