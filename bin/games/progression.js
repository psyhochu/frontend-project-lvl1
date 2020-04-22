// Progression
// Принимает строчку из 10 цифр образующих арифм. прогрессию
// вместо одной цифры стоит ".." функция угадывает эту цифру
// пример строки на вход: "5 7 9 11 13 .. 17 19 21 23"
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

export default progression;
