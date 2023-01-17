const base = 5;
const char = "*";
let result = "";
let inputResult = base - 1;

for (let baseIndex = 0; baseIndex < base; baseIndex += 1) {
  result = result + char;
}
for (let heightIndex = 0; heightIndex < base; heightIndex += 1) {
  console.log(result);
}

for (let baseIndex = 0; baseIndex <= base; baseIndex += 1) {
  console.log(result);
  result = result + char;
}

for (let baseIndex = 0; baseIndex < base; baseIndex += 1) {
  for (let heightIndex = 0; heightIndex < base; heightIndex += 1) {
    if (heightIndex < inputResult) {
      result = result + " ";
    } else {
      result = result + char;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
}
