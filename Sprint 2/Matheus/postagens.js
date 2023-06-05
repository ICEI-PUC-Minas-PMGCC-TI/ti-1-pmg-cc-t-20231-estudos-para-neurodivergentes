// Carrega o JSON
fetch('postagens.json')
  .then(response => response.json())
  .then(data => {
    // Preenche a página com os valores do primeiro item da lista de postagens
    const postagem = data.postagens[0];
    document.getElementById('capa').src = postagem.capa;
    document.getElementsByTagName('h1')[0].textContent = postagem.título;
    document.getElementsByTagName('h2')[0].textContent = postagem.subtítulo;
    document.getElementsByTagName('p')[0].textContent = postagem.texto;
    document.getElementsByTagName('p')[1].textContent = "autor: " + postagem.autores;
    document.getElementsByTagName('p')[2].textContent = "referências: " + postagem.referências;
  })
  .catch(error => {
    console.error('Erro ao carregar o JSON:', error);
  });
