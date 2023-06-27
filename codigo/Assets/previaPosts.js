fetch('posts.json')
  .then(response => response.json())
  .then(data => {
    exibirPosts(data);
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });

function exibirPosts(data) {
  var postsContainer = document.getElementById('posts');

  postsContainer.innerHTML = '';

  for (var i = 0; i < data.length; i++) {
    var post = document.createElement('div');
    post.className = 'post';

    var capaConteiner = document.createElement('div');
    capaConteiner.className = 'capaConteiner';

    var capaLink = document.createElement('a');
    capaLink.href = data[i].link;
    capaLink.target = '_blank';

    var capa = document.createElement('img');
    capa.src = data[i].capa;
    capa.alt = 'capaDoPost';

    capaLink.appendChild(capa);
    capaConteiner.appendChild(capaLink);

    var info = document.createElement('div');
    info.className = 'info';

    var title = document.createElement('h3');
    title.className = 'title';
    title.textContent = data[i].title;

    var tema = document.createElement('h4');
    tema.className = 'tema';
    tema.textContent = data[i].tema;

    var tipo = document.createElement('span');
    tipo.className = 'tipo';
    tipo.innerHTML = 'Categoria:' + data[i].tipo;

    info.appendChild(title);
    info.appendChild(tema);
    info.appendChild(tipo);

    post.appendChild(capaConteiner);
    post.appendChild(info);

    postsContainer.appendChild(post);
  }
}
