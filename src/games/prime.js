import gamerun from '../index.js';
import genRandomNumber from '../utils.js';

// Принимает строку с одним натуральным числом больше нуля и
// возвращает 'yes' или 'no' в зависимости от того простое число или нет

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');


const genGameData = () => {
  const question = genRandomNumber(-100, 100);
  const answer = getAnswer(question);
  return [String(question), String(answer)];
};

const description = '"yes" if given number is prime. Otherwise answer "no".';

const startPrime = () => gamerun(description, genGameData);

export default startPrime;
