#!/usr/bin/env node

import actual, { engine, resultOfGame, randomNumber } from '../src/index.js';

// CALC
// Принимает строчку такого формата (A х B) где A и B числа а "х"
// это знак умножения, сложения или вычитания  calc('123 + 456')

const calc = (string) => {
  const strinToArr = string.split(' ');
  const [num1, operation, num2] = strinToArr;
  if (operation === '+') {
    return String(+num1 + +num2);
  }
  if (operation === '*') {
    return String(+num1 * +num2);
  }
  if (operation === '-') {
    return String(+num1 - +num2);
  }
  return false;
};

// Функция возвращает +,- или *, рандомно
const randomMathDigit = () => {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
};


// Поприветствуем и спросим имя
const name = actual();

// Задаем вопрос
console.log('What is the result of the expression?');

// Список вопросов в виде массива
const arrOfQuestions = [`${randomNumber(0, 100)} ${randomMathDigit()} ${randomNumber(0, 100)}`,
  `${randomNumber(0, 100)} ${randomMathDigit()} ${randomNumber(0, 100)}`,
  `${randomNumber(0, 100)} ${randomMathDigit()} ${randomNumber(0, 100)}`];

// Игровой движок принимает функцию и список вопросов, задает вопросы
// и выдает вердикт о корректности ответов.
const gameStart = engine(calc, arrOfQuestions);

// Печатаем на экран ты выиграл иль ты тупой
resultOfGame(gameStart, name);
