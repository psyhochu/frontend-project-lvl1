import readlineSync from 'readline-sync';

// Спрашивает имя и выводит его на экран
const actual = () => {
  console.log('Welcome to the Brain Games!');
  const NameChoose = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${NameChoose}!`);
  return NameChoose;
};

export default actual;

// Выводит "Question : любой вопрос"
const printSimpleQuestion = (youQuestion) => {
  console.log(`Question: ${youQuestion}`);
};


// Принимает ответ от пользователя и возвращает его
const answer = () => {
  const YouAnswer = readlineSync.question('Your answer: ');
  return YouAnswer;
};

// Принимает ответ пользователя и правильное решение, если ответы совпадают,
// то печатает "Correct!" и возвращает true, иначе false.

const correctOrNot = (answer1, answer2) => {
  if (answer1 === answer2) {
    console.log('Correct!');
    return true;
  }
  return false;
};

// Функция возвращает число в диапазоне от и до, рандомно


// ENGINE;
export const engine = (funcForEngine, arrOfQuestions) => {
  for (let i = 0; i < arrOfQuestions.length; i += 1) {
  // Выводим первый вопрос из массива, принимаем ответ
    printSimpleQuestion(arrOfQuestions[i]);
    const answer1 = answer();
    // Правильный ответ:
    const answer2 = funcForEngine(arrOfQuestions[i]);
    // Проверяем правильность ответа
    if (correctOrNot(answer1, answer2)) {
    //  console.log('Correct!') пока вывод в другое;
    } else {
      return ['Not Correct', answer1, answer2];
    }
  }
  return 'Correct';
};

// RESULT
// Эта функция печатает на экран окончательные слова о прохождении или провале в игре

export const resultOfGame = (gameEngineResult, name) => {
  if (gameEngineResult === 'Correct') {
    console.log(`Congratulations ${name}!`);
  } else {
    console.log(`"${gameEngineResult[1]}" is wrong answer ;(. Correct answer was 
"${gameEngineResult[2]}".Let's try again, ${name}`);
  }
};
