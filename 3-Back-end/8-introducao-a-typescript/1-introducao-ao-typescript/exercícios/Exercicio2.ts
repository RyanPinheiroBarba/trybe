// Crie type aliases para: 
// a. Representar um ou mais nomes de pessoas em uma variável que guarda reservas de restaurante. 
// b. Um objeto que represente um endereço.

type nomesPessoas = string | string[];
type endereco = {
  rua: string,
  numero: number,
  complemento?: string,
  bairro: string,
  cidade: string,
  estado: string
};

const nomes: nomesPessoas = ["João", "Maria", "José"];
const endereco: endereco = {
  rua: "Rua dos Bobos",
  numero: 0,
  complemento: "Apto 106",
  bairro: "Vila do Chaves",
  cidade: "São Paulo",
  estado: "SP"
};

console.log(nomes[2], endereco.bairro); // José Vila do Chaves
