// Importa CSS
import './style.css';

// Importa funções auxiliares para preencher o DOM
import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

// Pega o elemento users-select
const usersSelect = document.querySelector('#users-select');

// Define a API de pessoas usuárias
const USERS_API = 'https://dummyjson.com/users';

// Faz o fetch na API para pegar os dados das pessoas
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;

    // Chama a função auxiliar para preencher os nomes e ids no select users-select
    fillUsersSelect(users);
  });

// Adiciona um eventListener no select para carregar os posts da pessoa selecionada
usersSelect.addEventListener('change', () => {
  // Chama a função auxiliar para limpar as informações da página quando uma nova pessoa for selecionada
  clearPageData();

  // Define a API de posts
  const POSTS_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;

  // Faz o fetch na API de posts baseado no id da pessoa selecionada
  fetch(POSTS_API)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;

      // Chama a função auxiliar para preencher o post destacado e os dois posts relacionados
      fillPosts(posts);

      // Pega o primeiro post do array como post destacado
      const [featuredPost] = posts;

      // Define a API de comentários baseado no id do post destacado
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

      // Faz um fetch para a API de comentários
      // Repare que é feito o return do fetch (que retorna uma promise),
      // dessa forma é possível encadear mais um `.then` na sequência
      return fetch(COMMENTS_API);
    })
    .then((res) => res.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    // Define um catch para tratar qualquer erro que aconteça durante o processo
    .catch((error) => {
      fillErrorMessage('Error retrieving information');
      console.log(error.message);
    });
});
