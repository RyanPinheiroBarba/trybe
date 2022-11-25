/*
No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail. Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão? Exemplo: console.log(typeof patientId) retornará number.
*/


let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

/*
O que aconteceria se tentássemos checar qual o tipo da variável patientAge? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué… mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined, como você pôde observar no retorno do console.log(typeof patientAge). Experimente também trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string, pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.
*/

console.log(typeof patientAge);

patientId = '50';

console.log(typeof patientId);

/* o resultado da linha 22 é igual a STRING, pois o número foi colocado entre aspas, configurando assim o valor como texto e não número*/