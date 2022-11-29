/*
Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível nesse link se tiver dúvidas.

Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

Crie uma constante chamada base e atribua a ela o valor 5.
Crie uma constante uma chamada heigth e atribua a ela o valor 8.
Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
*/

const base = 5;
const heigth = 8;

const area = (base * heigth) /2;
const perimeter = (base + heigth + heigth);

console.log(`O valor da base é ${base}, e o da altura é ${heigth}`);

console.log(`O resultado da area do triangulo de base ${base} e altura ${heigth} é igual a: ${area}`);

console.log(`O resultado do perímetro do triangulo de base ${base} e altura ${heigth} é igual a: ${perimeter}`);
