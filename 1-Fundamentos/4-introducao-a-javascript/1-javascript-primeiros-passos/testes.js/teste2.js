/*
Operador AND
O operador “AND” (ou &&, no JavaScript) é binário. O que significa que ele precisa de dois elementos para funcionar corretamente.

Para abstrair seu funcionamento, pense o seguinte: Você está numa padaria e quer comer alguma coisa no café da manhã. Então você diz “Por favor, me vê um cafezinho E um pão na chapa”.

Seria muito infeliz se você recebesse apenas o café ou só o pão, não é? Também não seria legal se recebêssemos um pão na chapa, mas a nossa bebida fosse um caldo de cana. Porque nossa expectativa era de que as duas condições fossem atendidas corretamente. Esse é exatamente o papel do &&. Ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras.

Em JavaScript, nosso pedido poderia ser interpretado da seguinte maneira:

*/

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

/*
 Tente brincar e mude os valores das variáveis. Você verá que a condição não vai ser atendida e portanto, a mensagem impressa será outra.

Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também.
*/

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

/*
  Execute o código acima e veja que a verificação é false porque uma das condições não é true.

Mas… E o que acontece se existir um encadeamento de &&? 🤔

Imagine que exista a seguinte expressão:
*/

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

/*
  Você consegue imaginar qual será o resultado final? Será que vai dar erro?
  A ordem que a operação vai obedecer será da esquerda para a direita.
*/