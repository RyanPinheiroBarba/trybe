import { User } from './types/User';

// A primeira função receberá uma lista de perfis do GitHub, como a definida no arquivo data.ts,
// e retornará uma lista contendo apenas os valores da propriedade name:
// Lembre-se de que, para usar o tipo User, é necessário importá-lo neste arquivo.

export const getUserNames = (userList: User[]): string[] => userList.map((user: User) => user.name);

// A segunda função receberá uma lista do tipo User e um número.
// Além disso, ela verificará quais perfis da lista recebida têm, no mínimo,
// o número de repositórios igual ao do passado como argumento,
// retornando uma lista com os perfis que satisfizerem a verificação.

export const getUsersByRepoQuantity = (users: User[], repos: number): string[] => users
  .filter((user) => user.repositories >= repos).map((user) => user.name);

// Por fim, haverá uma função que será responsável por verificar se uma pessoa
// é a mais ativa da lista de usuárias do GitHub.
// Essa validação será feita com base na comparação da quantidade de repositórios
// que cada pessoa possui.
// Será considerada a pessoa mais ativa, neste exemplo, a que tiver o maior número
// de repositórios. Por isso, a função receberá o nome de uma pessoa do tipo User
// e uma lista, também do tipo User, em que a pessoa esteja incluída. 
// O retorno da função deve ser um boolean (true ou false).

export const IsMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActiveUser = users.reduce(
    (prev, curr) => 
      (prev.repositories > curr.repositories ? prev : curr),
  );
  return mostActiveUser.name === name;
};
