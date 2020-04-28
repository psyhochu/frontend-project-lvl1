import engine from '../index.js';
import randomNumber from '../utils.js';


// Принимает число, возвращает yes если число четное, no в других случаях
// Список вопросов в виде массива

const even = () => {
  const arrOfQuestions = [randomNumber(-100, 100),
    randomNumber(-100, 100),
    randomNumber(-100, 100)];
  const funcForEngine = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const question = 'Answer "yes" if the number is even, otherwise answer "no"';

  return engine(funcForEngine, question, arrOfQuestions);
};
export default even;
