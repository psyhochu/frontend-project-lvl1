// CALC
// Принимает строчку такого формата (A х B) где A и B числа а "х"
// это знак умножения, сложения или вычитания  calc('123 + 456')

const calc = (string) => {
  const strinToArr = string.split(' ');
  const [num1, operation, num2] = strinToArr;
  if (operation === '+') {
    return String(+num1 + +num2);
  }
  if (operation === '*') {
    return String(+num1 * +num2);
  }
  if (operation === '-') {
    return String(+num1 - +num2);
  }
  return false;
};

export default calc;
