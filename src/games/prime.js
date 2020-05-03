import gamerun from '../index.js';
import randomNumber from '../utils.js';

// Принимает строку с одним натуральным числом больше нуля и
// возвращает 'yes' или 'no' в зависимости от того простое число или нет

const sayAnswer = (stringNumber) => {
  const num = +stringNumber;
  if (num < 2) return 'no';
  const haveAnotherDivisor = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) return true;
    }
    return false;
  };
  return haveAnotherDivisor(num) ? 'no' : 'yes';
};


const taskAndAnswer = () => {
  const task = randomNumber(-100, 100);
  const answer = sayAnswer(task);
  return [task, answer];
};


const startPrime = () => {
  const question = '"yes" if given number is prime. Otherwise answer "no".';
  return gamerun(question, taskAndAnswer);
};
export default startPrime;
