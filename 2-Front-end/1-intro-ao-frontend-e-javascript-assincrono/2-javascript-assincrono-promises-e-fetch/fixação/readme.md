Microblogs
Neste exercício vamos criar uma página para leitura de posts de várias pessoas. Você já começará com uma página HTML estruturada e com algumas funções auxiliares prontas.

Seu objetivo será preencher o HTML existente com as informações que você irá recuperar de várias APIs diferentes. Ao final, sua aplicação deverá ser capaz exibir uma lista de pessoas, exibir uma lista de posts de acordo com a pessoa selecionada e também exibir os comentários do post destacado. Cada item dessa lista (pessoas, posts e comentários), será recuperado através de uma chamada para API diferente.

Curtiu o desafio? Então vamos aos passos necessários para desenvolver o exercício:

Faça um fetch para a API https://dummyjson.com/users para recuperar as informações das pessoas usuárias. Depois de receber os dados, passe o array retornado pela API com as informações das pessoas usuárias para a função fillUsersSelect para que o select da página seja atualizado.
Na estrutura inicial do projeto já existe o eventListener para o evento change do select que dispara a função a clearPage. Depois da chamada dessa função, faça um fetch para a API https://dummyjson.com/posts/user/{userID}. Lembre-se que você deve pegar o id da pessoa selecionada através do atributo value do select.
A requisição feita no item anterior irá retornar um array com os posts da pessoa selecionada. Após receber as informações da API, utilize a função fillPosts, passando a lista de posts recebida, para exibir os posts na tela. ℹ️ O primeiro item do array será o post destacado. Os demais posts entram na lista de posts relacionados.
Ainda usando o a lista de posts retornada pela requisição do item 2, pegue o id do primeiro post da lista (esse será o post destacado) e faça uma requisição para URL https://dummyjson.com/posts/{featuredPost.id}/comments para pegar os comentários do post destacado. 💡Dica: lembre-se de usar o return e retornar essa chamada de fetch. Dessa forma será possível encadear mais um .then em sequência.
Depois de receber da API os comentários do primeiro post, use a função fillFeaturedPostComments para exibi-los. Você deve passar para essa função o array de comentários recebido no retorno da API.
Adicione um .catch ao final do encadeamento de todos os .then. Caso aconteça algum erro, esse .catch deverá chamar a função fillErrorMessage e passar a mensagem de erro.
