import readlineSync from 'readline-sync';

// Спрашивает имя и выводит его на экран
const actual = () => {
  const NameChoose = readlineSync.question('Choose u name: ');
  console.log(`Hi ${NameChoose} !`);
  return NameChoose;
};

// Возвращает yes если число четное, no в других случаях
export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Выводит "Question : любой вопрос"
export const printSimpleQuestion = (youQuestion) => {
  console.log(`Question: ${youQuestion}`);
};


// Принимает ответ от пользователя и возвращает его
export const answer = () => {
  const YouAnswer = readlineSync.question('Your answer: ');
  return YouAnswer;
};

// Принимает ответ пользователя и правильный ответ, если ответы совпадают,
// то печатает "Correct!" и возвращает true, иначе false.

export const correctOrNot = (answer1, answer2) => {
  if (answer1 === answer2) {
    console.log('Correct!');
    return true;
  }
  return false;
};

// Логика игры для brai-even модуля возвращаем true или false;
export const evenGame = (...numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
  // Выводим первый вопрос, принимаем ответ
    printSimpleQuestion(numbers[i]);
    const answer1 = answer();
    const answerTrue = isEven(numbers[i]);
    // Проверяем правильность ответа
    if (correctOrNot(answer1, answerTrue)) {
    //  console.log('Correct!');
    } else {
      return ['Not correct', answer1, answerTrue];
    }
  }
  return 'Correct';
};

export default actual;
