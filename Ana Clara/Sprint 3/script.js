$(document).ready(function() {
    // Verificar se há dados salvos no Local Storage
    if (localStorage.getItem('posts')) {
      $('#posts').html(localStorage.getItem('posts')); // Carregar as postagens salvas
    }
  
    $('#postForm').submit(function(event) {
      event.preventDefault(); // Evitar o comportamento padrão do formulário
  
      // Obter os valores dos campos de entrada
      var title = $('#title').val();
      var content = $('#content').val();
  
      // Verificar se os campos estão vazios
      if (title.trim() === '') {
        // Exibir mensagem de erro do título
        $('#titleError').text('* Por favor, insira um título.');
        return; // Interromper o envio do formulário
      } else {
        $('#titleError').text(''); // Limpar a mensagem de erro do título
      }
  
      if (content.trim() === '') {
        // Exibir mensagem de erro do conteúdo
        $('#contentError').text('* Por favor, insira um conteúdo.');
        return; // Interromper o envio do formulário
      } else {
        $('#contentError').text(''); // Limpar a mensagem de erro do conteúdo
      }
  
      // Criar a estrutura da postagem
      var post = '<div class="post"><div class="post-title">' + title + '</div><div class="post-content">' + content + '</div></div>';
  
      // Adicionar a nova postagem ao contêiner
      $('#posts').prepend(post);
  
      // Salvar as postagens no Local Storage
      localStorage.setItem('posts', $('#posts').html());
  
      // Limpar os campos de entrada
      $('#title').val('');
      $('#content').val('');
  
      // Exibir a mensagem de "POST CRIADO!"
      alert('Post criado com sucesso!');
    });
  });
  