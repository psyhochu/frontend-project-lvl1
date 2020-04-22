import readlineSync from 'readline-sync';

// START GAME
// Спрашивает имя и выводит его на экран
const actual = () => {
  console.log('Welcome to the Brain Games!');
  const NameChoose = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${NameChoose}!`);
  return NameChoose;
};

export default actual;


// RESULT
// Эта функция печатает на экран окончательные слова о прохождении или провале в игре

export const resultOfGame = (gameEngineResult, name) => {
  if (gameEngineResult === 'Correct') {
    console.log(`Congratulations ${name}!`);
  } else {
    console.log(`"${gameEngineResult[1]}" is wrong answer ;(. Correct answer was "${gameEngineResult[2]}".Let's try again, ${name}`);
  }
};
