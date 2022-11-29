let grossSalary = 12000.00;
let aliquotINSS;
let aliquotIR;
let messageINSS;
let message;


if (grossSalary <= 1556.94){
  aliquotINSS = grossSalary * 0.08;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS}!`;
  console.log(message);
} else if (grossSalary <= 2594.92){
  aliquotINSS = grossSalary * 0.09;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS}!`;
} else if (grossSalary <= 5189.82){
  aliquotINSS = grossSalary * 0.11;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS}!`;
} else {
  aliquotINSS = 570.88;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS}!`;
}

console.log(messageINSS);

let baseSalary = grossSalary - aliquotINSS;

if(baseSalary <= 1903.98){
  aliquotIR = 0;
} else if (baseSalary <= 2826.65){
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if(baseSalary <= 3751.05){
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if(baseSalary <= 4664.68){
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
}