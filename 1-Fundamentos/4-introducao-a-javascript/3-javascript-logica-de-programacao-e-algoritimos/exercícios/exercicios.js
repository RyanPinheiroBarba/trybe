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
