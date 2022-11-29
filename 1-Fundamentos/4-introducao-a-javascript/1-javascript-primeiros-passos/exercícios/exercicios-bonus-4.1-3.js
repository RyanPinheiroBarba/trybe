const custoProduto = Math.floor(Math.random() *100).toFixed(2);
const impostoSobreCusto = custoProduto *20 /100;
const custoTotal = custoProduto - impostoSobreCusto;
const vendaProduto = Math.floor(Math.random() *100).toFixed(2);
const lucroProduto = vendaProduto - custoTotal;
const lucroTotal = lucroProduto.toFixed(2) * 1000;
let message = "";


if(custoTotal <= 0 || vendaProduto <= 0){
  message = "Conta inválida, valor menor que 0."
  console.log(message);
} else if (vendaProduto <= custoTotal){
  message = `Prejuízo na venda, lucro do produto = R$ ${lucroProduto}`
  console.log(message);
} else {
  message = `Lucro unitário de venda do produto = R$ ${lucroProduto} e lucro total = R$ ${lucroTotal}.`
  console.log(message);
}