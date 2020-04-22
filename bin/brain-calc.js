#!/usr/bin/env node

import actual, { engine, resultOfGame } from '../src/index.js';
import randomNumber, { randomMathSymbol } from './randomisers.js';
import calc from './games/calc.js';


// Поприветствуем и спросим имя
const name = actual();

// Задаем вопрос
console.log('What is the result of the expression?');

// Список вопросов в виде массива
const arrOfQuestions = [`${randomNumber(0, 100)} ${randomMathSymbol()} ${randomNumber(0, 100)}`,
  `${randomNumber(0, 100)} ${randomMathSymbol()} ${randomNumber(0, 100)}`,
  `${randomNumber(0, 100)} ${randomMathSymbol()} ${randomNumber(0, 100)}`];

// Игровой движок принимает функцию и список вопросов, задает вопросы
// и выдает вердикт о корректности ответов.
const gameStart = engine(calc, arrOfQuestions);

// Печатаем на экран ты выиграл иль ты тупой
resultOfGame(gameStart, name);
