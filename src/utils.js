
// Рандомное число в пределах от и до включительно

const randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
export default randomNumber;
