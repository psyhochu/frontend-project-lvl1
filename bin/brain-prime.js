#!/usr/bin/env node

import actual, { engine, resultOfGame, randomNumber } from '../src/index.js';

// prime
// Принимает строку с одним натуральным числом больше нуля и
// возвращает 'yes' или 'no' в зависимости от того простое число или нет
const prime = (stringNumber) => {
  const num = +stringNumber;
  if (num < 2) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};


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
