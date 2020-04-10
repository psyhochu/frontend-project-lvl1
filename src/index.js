import readlineSync from 'readline-sync';


const actual = () => {
  const NameChoose = readlineSync.question('Choose u name: ');
  console.log(`Hi ${NameChoose} !`);
};
export default actual;
