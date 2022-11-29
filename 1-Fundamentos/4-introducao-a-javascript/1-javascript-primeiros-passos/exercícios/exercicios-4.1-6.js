let notaFinal = "89";
let nota = "";
let message = "";

if(notaFinal > 100 || notaFinal < 0){
  nota = null;
  message = "Nota Inválida, revisar valores.";
  console.log(message);
}
  else if(notaFinal >= 90){
  nota = "A";
  message = `Parabéns, você foi excelente! Nota: ${nota}`;
  console.log(message);
} else if(notaFinal >= 80){
  nota = "B";
  message = `Muito bom, nota: ${nota}`;
  console.log(message);
} else if(notaFinal >= 70){
  nota = "C";
  message = `Foi bem, mas pode melhorar! Nota: ${nota}`;
  console.log(message);
} else if(notaFinal >= 60){
  nota = "D";
  message = `Quase lá, estude mais um pouquinho! Nota: ${nota}`;
  console.log(message);
} else if(notaFinal >= 50){
  nota = "E";
  message = `Você precisa estudar mais! Nota: ${nota}`;
  console.log(message);
} else if(notaFinal <= 49){
  nota = "F";
  message = `Você foi muito mal, que tal procurar ajuda? Nota: ${nota}`;
  console.log(message);
};
