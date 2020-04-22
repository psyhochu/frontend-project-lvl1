#!/usr/bin/env node

import actual, { engine, resultOfGame } from '../src/index.js';
import randomNumber from './randomisers.js';
import even from './games/even.js';

// Поприветствуем и спросим имя
const name = actual();
// Задаем вопрос
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// Список вопросов в виде массива
const arrOfQuestions = [randomNumber(-100, 100),
  randomNumber(-100, 100),
  randomNumber(-100, 100)];
// Игровой движок принимает функцию и список вопросов, задает вопросы
// и выдает вердикт о корректности ответов.
const gameStart = engine(even, arrOfQuestions);

// Печатаем на экран ты выиграл иль ты тупой
resultOfGame(gameStart, name);
