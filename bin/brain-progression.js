#!/usr/bin/env node

import actual, { engine, resultOfGame, randomNumber } from '../src/index.js';

// Progression
// Принимает строчку из 10 цифр образующих арифм. прогрессию
// вместо одной цифры стоит ".." функция угадывает эту цифру
// 5 7 9 11 13 .. 17 19 21 23
const progression = (string) => {
  const stringToArr = string.split(' ');
  const firstElement = +stringToArr[0];
  const secondElement = +stringToArr[1];
  if (stringToArr[9] === '..') {
    const step = secondElement - firstElement;
    return String(+stringToArr[8] + step);
  }
  if (stringToArr[8] === '..') {
    const step = secondElement - firstElement;
    return String(+stringToArr[7] + step);
  }
  for (let i = 0; i < 10; i += 1) {
    if (stringToArr[i] === '..') {
      const nextElementOfarr = +stringToArr[i + 1];
      const nextAfternext = +stringToArr[i + 2];
      const step = nextAfternext - nextElementOfarr;
      return String(nextElementOfarr - step);
    }
  }
  return console.log('ERROR, CANT FIND ".."');
};


// Поприветствуем и спросим имя
const name = actual();

// Задаем вопрос
console.log('What number is missing in the progression?');

// Функция для вопроса, возвращает строку из 10 цифр через пробел.
// Например 5 7 9 11 13 .. 17 19 21 23
// Один случайный элемент заменяется на ".."
// На вход подается: questionGenerator(5, 100, 10)
// Первые два значения это диапазон для первого элемента прогрессии,
// третья цифра максимальное значение шага.

const questionGenerator = (startNumber, endNumber, maxStep) => {
  const arr = [];
  arr[0] = randomNumber(startNumber, endNumber);
  const step = randomNumber(1, maxStep);
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  arr[randomNumber(0, 9)] = '..';
  return arr.join(' ');
};

// Список вопросов в виде массива
const arrOfQuestions = [questionGenerator(0, 100, 10),
  questionGenerator(0, 100, 10),
  questionGenerator(0, 100, 10)];

// Игровой движок принимает функцию и список вопросов, задает вопросы
// и выдает вердикт о корректности ответов.
const gameStart = engine(progression, arrOfQuestions);

// Печатаем на экран ты выиграл иль ты тупой
resultOfGame(gameStart, name);
