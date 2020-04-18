#!/usr/bin/env node

import actual, { engine, resultOfGame } from '../src/index.js';

// greatest common divisor
// Принимает строчку такого формата (A B) где A и B числа
// и возвращает НОД этих чисел
const gcd = (string) => {
  const strinToArr = string.split(' ');
  const [num1, num2] = strinToArr;
  const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (y === 0) return String(x);
    return nod(y, x % y);
  };
  return nod(Math.abs(+num1), Math.abs(+num2));
};


// Функция возвращает число в диапазоне от и до, рандомно

const randomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min;

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
