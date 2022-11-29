const number1 = Math.floor(10* Math.random() +1);
const number2 = Math.floor(10* Math.random() +1);
const number3 = Math.floor(10* Math.random() +1);
let message = Boolean;

console.log(number1, number2, number3);

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0){
  message = true;
  console.log(message);
}else{
  message = false;
  console.log(message);
}