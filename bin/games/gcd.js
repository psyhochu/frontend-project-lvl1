// greatest common divisor
// Принимает строчку такого формата (A B) где A и B числа
// и возвращает НОД этих чисел
const gcd = (string) => {
  const strinToArr = string.split(' ');
  const [num1, num2] = strinToArr;
  const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (y === 0) return String(x);
    return nod(y, x % y);
  };
  return nod(Math.abs(+num1), Math.abs(+num2));
};

export default gcd;
