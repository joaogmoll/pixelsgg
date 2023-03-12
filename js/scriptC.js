const commentForm = document.querySelector('#comments form');
const commentsList = document.querySelector('#comments-list');
const clearCommentsButton = document.querySelector('#clear-comments');

// Verificar se há comentários salvos no localStorage
if (localStorage.getItem('comments') !== null) {
  const savedComments = JSON.parse(localStorage.getItem('comments'));
  savedComments.forEach(comment => {
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p>${comment.comment}</p><span>Por ${comment.name}</span>`;
    commentsList.appendChild(newComment);
  });
}

// Verificar se há um botão de limpar comentários no localStorage
if (localStorage.getItem('clearCommentsButton') !== null) {
  clearCommentsButton.style.display = 'block';
}

clearCommentsButton.addEventListener('click', function() {
  // Remover todos os comentários da lista de comentários
  commentsList.innerHTML = '';
  // Limpar o array de comentários salvos no localStorage
  localStorage.removeItem('comments');
  // Esconder o botão de limpar comentários
  clearCommentsButton.style.display = 'none';
  // Remover o botão de limpar comentários do localStorage
  localStorage.removeItem('clearCommentsButton');
});

commentForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.querySelector('#comments form #name');
  const commentInput = document.querySelector('#comments form #comment');
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `<p>${commentInput.value}</p><span>Por ${nameInput.value}</span>`;
  commentsList.appendChild(newComment);

  // Armazenar o botão de limpar comentários no localStorage
  localStorage.setItem('clearCommentsButton', true);

  nameInput.value = '';
  commentInput.value = '';

  // Armazenar os comentários no localStorage
  const comments = JSON.parse(localStorage.getItem('comments') || '[]');
  comments.push({ name: nameInput.value, comment: commentInput.value });
  localStorage.setItem('comments', JSON.stringify(comments));

  // Exibir o botão de limpar comentários
  clearCommentsButton.style.display = 'block';
});
