
// Рандомное число в пределах от и до

const randomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min;
export default randomNumber;

// Функция возвращает +,- или *, рандомно
export const randomMathSymbol = () => {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
};
