let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

//-------------- usando for of

let sum = 0;

for (value of numbers){
  sum += value;
}
console.log(sum)

//--------------- usando for in

let sum2 = 0;

for (value in numbers){
  sum2 += numbers[value];
}
console.log(sum2);

//---------------- usando for

let sum3 = 0;

for (let index = 0; index < numbers.length; index += 1){
  sum3 += numbers[index];
}
console.log(sum3);

//----------------- média aritmética for of

let arithmeticSum = 0;

for (value of numbers){
  arithmeticSum += value / numbers.length;
}
console.log(arithmeticSum.toFixed(2));