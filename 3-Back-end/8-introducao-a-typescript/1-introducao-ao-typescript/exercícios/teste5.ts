const evenNumbers: number[] = [2, 4, 6]; // evenNumbers: number[]
evenNumbers.push(8); // evenNumbers: number[]
evenNumbers.push('10'); // Argument of type '"10"' is not assignable to parameter of type 'number'.

const vowel: string[] = ['a', 'e', 'i', 'o', 'u']; // vowel: string[]
vowel.push('y'); // vowel: string[]
vowel.push(1); // Argument of type '1' is not assignable to parameter of type 'string'.

const booleanValues: boolean[] = [true, false]; // booleanValues: boolean[]
booleanValues.push(false); // booleanValues: boolean[]
booleanValues.push('true'); // Argument of type '"true"' is not assignable to parameter of type 'boolean'.

const fruits: Array<string> = ['apple', 'banana', 'orange']; // fruits: string[]
fruits.push('pear'); // fruits: string[]
fruits.push(1); // Argument of type '1' is not assignable to parameter of type 'string'.

const oddNumbers: Array<number> = [1, 3, 5]; // oddNumbers: number[]
oddNumbers.push(7); // oddNumbers: number[]
oddNumbers.push('9'); // Argument of type '"9"' is not assignable to parameter of type 'number'.

const mixedArray: Array<string | number> = ['a', 1, 'b', 2]; // mixedArray: (string | number)[]
mixedArray.push('c'); // mixedArray: (string | number)[]
mixedArray.push(3); // mixedArray: (string | number)[]
mixedArray.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'.

const mixedArray2: (string | number)[] = ['a', 1, 'b', 2]; // mixedArray2: (string | number)[]
mixedArray2.push('c'); // mixedArray2: (string | number)[]
mixedArray2.push(3); // mixedArray2: (string | number)[]
mixedArray2.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'.

const mixedArray3: Array<string | number | boolean> = ['a', 1, true]; // mixedArray3: (string | number | boolean)[]
mixedArray3.push('b'); // mixedArray3: (string | number | boolean)[]
mixedArray3.push(2); // mixedArray3: (string | number | boolean)[]
mixedArray3.push(false); // mixedArray3: (string | number | boolean)[]
mixedArray3.push({}); // Argument of type '{}' is not assignable to parameter of type 'string | number | boolean'.

const mixedArray4: (string | number | boolean)[] = ['a', 1, true]; // mixedArray4: (string | number | boolean)[]
mixedArray4.push('b'); // mixedArray4: (string | number | boolean)[]
mixedArray4.push(2); // mixedArray4: (string | number | boolean)[]
mixedArray4.push(false); // mixedArray4: (string | number | boolean)[]
mixedArray4.push({}); // Argument of type '{}' is not assignable to parameter of type 'string | number | boolean'.

const mixedArray5: Array<string | number | boolean | object> = ['a', 1, true, {}]; // mixedArray5: (string | number | boolean | object)[]
mixedArray5.push('b'); // mixedArray5: (string | number | boolean | object)[]
mixedArray5.push(2); // mixedArray5: (string | number | boolean | object)[]
mixedArray5.push(false); // mixedArray5: (string | number | boolean | object)[]
mixedArray5.push({}); // mixedArray5: (string | number | boolean | object)[]
mixedArray5.push([]); // Argument of type '[]' is not assignable to parameter of type 'string | number | boolean | object'.

const mixedArray6: (string | number | boolean | object)[] = ['a', 1, true, {}]; // mixedArray6: (string | number | boolean | object)[]
mixedArray6.push('b'); // mixedArray6: (string | number | boolean | object)[]
mixedArray6.push(2); // mixedArray6: (string | number | boolean | object)[]
mixedArray6.push(false); // mixedArray6: (string | number | boolean | object)[]
mixedArray6.push({}); // mixedArray6: (string | number | boolean | object)[]
mixedArray6.push([]); // Argument of type '[]' is not assignable to parameter of type 'string | number | boolean | object'.
