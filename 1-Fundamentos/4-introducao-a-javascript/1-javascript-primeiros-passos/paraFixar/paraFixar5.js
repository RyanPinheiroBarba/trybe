/*
Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

Utilizando if/else, implemente condicionais para que:

Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).
*/

let weekDay = "sábado";
message = "";

if(weekDay === "segunda-feita" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
  message = "Oba, mais um dia de aprendizado na Trybe >:D";
  console.log(message);
}else if (weekDay === "sábado" || weekDay === "domingo"){
  message = "Fim de semana papai, CHAMA!!!";
  console.log(message);
}