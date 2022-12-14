let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index = 1; index < numbers.length; index += 1) {
  for(index2 = 0; index2 < index; index2 += 1) {
    if(numbers[index] < numbers[index2]) {
      let position = numbers[index2];
      numbers[index2] = numbers[index];
      numbers[index] = position;
    }
  }
}

const IncreaseNumbers = numbers.sort((a, b) => (a - b));

console.log(numbers);

for(index = 1; index < numbers.length; index += 1) {
    for(index2 = 0; index2 < index; index2 += 1) {
      if(numbers[index] > numbers[index2]) {
        let position = numbers[index2];
        numbers[index2] = numbers[index];
        numbers[index] = position;
      }
    }
}

const DecreaseNumbers = numbers.sort((a, b) => (b - a));

console.log(numbers);

let newNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = [];

for(index = 0; index < newNumbers.length; index += 1) {
    if(index + 1 < newNumbers.length) {
      result.push(newNumbers[index] * newNumbers[index + 1]);
    } else {
      result.push(newNumbers[index] * 2);
    }
}

console.log(result);