let grossSalary = Math.floor(Math.random() *10000);
let aliquotINSS;
let aliquotIR;
let messageINSS;
let message;


if (grossSalary <= 1556.94){
  aliquotINSS = grossSalary * 0.08;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS.toFixed(2)}!`;
  console.log(message);
} else if (grossSalary <= 2594.92){
  aliquotINSS = grossSalary * 0.09;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS.toFixed(2)}!`;
} else if (grossSalary <= 5189.82){
  aliquotINSS = grossSalary * 0.11;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS.toFixed(2)}!`;
} else {
  aliquotINSS = 570.88;
  messageINSS = `Valor da alíquota de INSS = ${aliquotINSS.toFixed(2)}!`;
}

console.log(messageINSS);

let baseSalary = grossSalary - aliquotINSS;

if(baseSalary <= 1903.98){
  aliquotIR = 0;
  message = `Valor da alíquota do IR = ${aliquotIR.toFixed(2)}!`;
  console.log(message);
} else if (baseSalary <= 2826.65){
  aliquotIR = (baseSalary * 0.075) - 142.80;
  message = `Valor da alíquota do IR = ${aliquotIR.toFixed(2)}!`;
  console.log(message);
} else if(baseSalary <= 3751.05){
  aliquotIR = (baseSalary * 0.15) - 354.80;
  message = `Valor da alíquota do IR = ${aliquotIR.toFixed(2)}!`;
  console.log(message);
} else if(baseSalary <= 4664.68){
  aliquotIR = (baseSalary * 0.225) - 636.13;
  message = `Valor da alíquota do IR = ${aliquotIR.toFixed(2)}!`;
  console.log(message);
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
  message = `Valor da alíquota do IR = ${aliquotIR.toFixed(2)}!`;
  console.log(message);
}

const liquidSalary = baseSalary.toFixed(2) - aliquotIR.toFixed(2);

console.log(`O seu salário líquido é = R$ ${liquidSalary.toFixed(2)}`);