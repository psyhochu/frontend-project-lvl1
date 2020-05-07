
// Рандомное число в пределах от и до включительно

export default (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
