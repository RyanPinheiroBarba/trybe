const word = "tryber";
const arrayWord = word.split("");
const reverseArray = arrayWord.reverse();
const joinArray = reverseArray.join("");

console.log(joinArray);

const arrayString = ["java", "javascript", "python", "html", "css"];
let biggerString = [arrayString[0]];

const splitAndPush = () => {
  for (let index = 0; index < arrayString.length; index += 1) {
    const splitPhrase = arrayString[index].split("");
    if (splitPhrase.length > biggerString.length) {
      biggerString = splitPhrase.join("");
    }
  }
  console.log(biggerString);
};

splitAndPush();

let biggerNumber = 0;

const primeNumber = () => {
  for (let index = 2; index <= 50; index += 1) {
    let primeNumber = true;
    for (let index2 = 2; index2 < index; index2 += 1) {
      if (index % index2 === 0) {
        primeNumber = false;
      }
    }
    if (primeNumber) {
      biggerNumber = index;
    }
  }
  console.log(biggerNumber);
};
primeNumber();
