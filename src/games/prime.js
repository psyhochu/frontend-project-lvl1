import engine from '../index.js';
import randomNumber from '../utils.js';


// prime
// Принимает строку с одним натуральным числом больше нуля и
// возвращает 'yes' или 'no' в зависимости от того простое число или нет

const prime = () => {
  const arrOfQuestions = [randomNumber(1, 10),
    randomNumber(1, 10),
    randomNumber(1, 10)];
  const funcForEngine = (stringNumber) => {
    const num = +stringNumber;
    if (num < 2) return 'no';
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return 'no';
    }
    return 'yes';
  };

  const question = '"yes" if given number is prime. Otherwise answer "no".';

  return engine(funcForEngine, question, arrOfQuestions);
};
export default prime;
