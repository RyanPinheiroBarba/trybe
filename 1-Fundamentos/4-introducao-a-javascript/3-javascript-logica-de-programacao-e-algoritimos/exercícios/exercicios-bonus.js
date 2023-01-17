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
