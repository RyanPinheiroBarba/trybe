let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//console.log(numbers);

//-------------- usando for of
let sum = 0;

for (value of numbers){
  sum += value;
}
//console.log(sum)

//--------------- usando for in
let sum2 = 0;

for (value in numbers){
  sum2 += numbers[value];
}
//console.log(sum2);

//---------------- usando for

let sum3 = 0;

for (let index = 0; index < numbers.length; index += 1){
  sum3 += numbers[index];
}
//console.log(sum3);

//----------------- média aritmética for of

let arithmeticSum = 0;

for (value of numbers){
  arithmeticSum += value / numbers.length;
}
//console.log(arithmeticSum.toFixed(2));

//----------------- condicional para valores

if (arithmeticSum > 20){
  //console.log("Valor maior que 20")
} else {
  //console.log("Valor maior ou igual a 20")
}

//----------------- condicional para maior valor com for of

let bigger = [];

for (value of numbers){
  if(value > bigger){
  bigger = value;
  }
}
//console.log(bigger);

//----------------- condicional para imprimir valores ímpares do array

let Odd = [];

for(value of numbers){
  if(value % 2 != 0){
    Odd.push(value);
  }
}

//console.log(Odd);

//----------------- condicional para descobrir o menor valor de um array e imprimir

let smaller = numbers[0];

for (value of numbers){
  if(value < smaller){
  smaller = value;
  }
}
//console.log(smaller);

//----------------- laço de repetição pra criar um array de 1 a 25 e imprima o resultado

let cardinals = [];

for(index = 1; index <= 25; index += 1){
  cardinals.push(index);
}
console.log(cardinals);

//----------------- utilizando o array cardinals, imprimir o resultado da divisão de casa um dos elementos por 2

for(index = 0; index < cardinals.length; index += 2){
  console.log(cardinals[index] / 2);
};
