let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let sum = 0;
let sum2 = 0;
let sum3 = 0;

for (value of numbers){
  sum += value;
}
console.log(sum)

for (value in numbers){
  sum2 += numbers[value];
}
console.log(sum2);

for (let index = 0; index < numbers.length; index += 1){
  sum3 += numbers[index];
}
console.log(sum3);