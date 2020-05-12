
// Рандомное число в пределах от и до включительно

export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
