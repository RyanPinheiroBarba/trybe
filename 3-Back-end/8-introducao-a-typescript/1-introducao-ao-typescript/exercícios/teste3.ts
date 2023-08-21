let wrongSum = (a, b) => a + b; // Não é possível inferir o tipo de retorno, pois não há retorno explícito.

let rightSum = (a: number, b: number) => a + b; // Não é possível inferir o tipo de retorno, pois não há retorno explícito.

console.log(wrongSum(1, '2')); // 12 (concatenação); 

console.log(rightSum(1, 2)); // 3 (soma);


