#!/usr/bin/env node

import actual, { engine, resultOfGame } from '../src/index.js';
import randomNumber from './randomisers.js';
import progression from './games/progression.js';


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
