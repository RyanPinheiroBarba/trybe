import * as Functions from './myFunctions';
import users from './data';

console.log(`Lista de pessoas usuárias do Github: ${Functions.getUserNames(users)}.`); // ['João Paulo Aramuni', 'Lucas Silva', 'Maria Joaquina']

console.log(
  `Pessoas com pelo menos 20 repositórios: ${Functions.getUsersByRepoQuantity(users, 20)}.`,
); // ['João Paulo Aramuni', 'Lucas Silva']

console.log(
  `Essa é a conta mais ativa da lista? ${Functions.IsMostActiveUser('João Paulo Aramuni', users)}.`,
); // true