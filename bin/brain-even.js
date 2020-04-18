#!/usr/bin/env node

import actual, { engine, resultOfGame } from '../src/index.js';


// FUNC FOR ENGINE
// Принимает число, возвращает yes если число четное, no в других случаях
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Поприветствуем и спросим имя
const name = actual();
// Задаем вопрос
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// Список вопросов в виде массива
const arrOfQuestions = [15, 6, 4];
// Игровой движок принимает функцию и список вопросов, задает вопросы
// и выдает вердикт о корректности ответов.
const gameStart = engine(isEven, arrOfQuestions);

// Печатаем на экран ты выиграл иль ты тупой
resultOfGame(gameStart, name);
