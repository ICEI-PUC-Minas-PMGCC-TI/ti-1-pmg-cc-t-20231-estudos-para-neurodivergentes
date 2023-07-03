/*--------------------------
    Variáveis Necessárias
---------------------------*/

let FILTRO_TIPO = ""; let FILTRO_TEMA = ""; let objDados = leDados();

/*---------------------------
        GERA ID PARA POSTAGEM
----------------------------- */

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/*---------------------------
    CHECA SE TÁ LOGADO
----------------------------- */

function testeLogin() {
  let user = leUser();

  if (user) {
    setTimeout(() => {
      window.location.href = 'form.html';
    }, 1000);
  } else {
    setTimeout(() => {
      window.location.href = 'signin.html';
    }, 1000);
  }
}

function testaLogin() {
  let user = leUser();

  if (user) {
    setTimeout(() => {
      window.location.href = `perfil.html?id=${user.id}`;
    }, 1000);
  } else {
    setTimeout(() => {
      window.location.href = 'signin.html';
    }, 1000);
  }
}
function testarLoginChat() {
  let user = leUser();

  if (user) {
    setTimeout(() => {
      window.location.href = `formchat.html`;
    }, 1000);
  } else {
    setTimeout(() => {
      window.location.href = 'signin.html';
    }, 1000);
  }
}
function testaloginConversar(po) {
  console.log("cre")
  let user = leUser();

  if (user) {
    setTimeout(() => {
      window.location.href = `conversar.html?id=${po}`;
    }, 1000);
  } else {
    setTimeout(() => {
      window.location.href = 'signin.html';
    }, 1000);
  }
}

/*---------------------------
LÊ DADOS DO LOCAL STORAGE
----------------------------- */
function leForuns() {
  let strDados = localStorage.getItem("foruns");
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  } else {
    objDados = {
      postagens: [

      ]
    };
  }
  return objDados;
}
function leDados() {
  let strDados = localStorage.getItem("db");
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  } else {
    objDados = {
      postagens: [

      ]
    };
  }

  return objDados;
}

function leUser() {
  let strUser = localStorage.getItem("userLogado");
  let objUser = {};

  if (strUser) {
    objUser = JSON.parse(strUser);
  } else {
    return "";
  }

  return objUser;
}

function leUsers() {
  let strUsers = localStorage.getItem("listaUser");
  let objUsers = {};

  if (strUsers) {
    objUsers = JSON.parse(strUsers);
  } else {
    objUsers = {
      usuarios: [
        {
          /*"id": "3c8eece7-76e1-41f4-8bde-7950f4713414",
          "nome": "João Bosco Cordeiro",
          "user": "joaobosco",
          "email": "joaobosco@gmail.com",
          "senha": "1234567pao",
          "fotoPerfil": "images/bob.jpg",
          "statusCad": "Eu vou ficar louco!"*/
        }
      ]
    };
  }

  return objUsers;
}


/*---------------------------
RECEBER POSTAGEM PARA O VETOR
----------------------------- */

var form = document.getElementById('formulario');
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ler os dados do localStorage
    let objDados = leDados();
    let objUser = leUser();

    // Incluir uma nova postagem
    let strTitulo = document.getElementById('campoTitulo').value;
    let strSubtitulo = document.getElementById('campoSubtitulo').value;
    let fileCapa = document.getElementById('campoCapa').files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      let base64Image = event.target.result;

      let strLegenda = document.getElementById('campoLegenda').value;
      let strOpcoes = document.querySelectorAll('input[name="tipo"]:checked');
      let tipoSelecionado = strOpcoes.length > 0 ? strOpcoes[0].value : '';

      let strCheckbox = document.querySelectorAll('input[name="tema"]:checked');
      let temasSelecionados = [];

      if (strCheckbox.length > 0) {
        temasSelecionados = Array.from(strCheckbox).map(function (checkbox) {
          return checkbox.value;
        });
      }

      let str1 = document.getElementById('campoTexto1').value;
      let str2 = document.getElementById('campoTexto2').value;
      let str3 = document.getElementById('campoTexto3').value;
      let str4 = document.getElementById('campoTexto4').value;
      let usuario = objUser.user;
      let nomeUser = objUser.nome;
      let userID = objUser.id;
      let strRef1 = document.getElementById('campoReferencia1').value;
      let strRef2 = document.getElementById('campoReferencia2').value;
      let comentarios = [];
      let ID = uuidv4();
      let novaPostagem = {
        id: ID,
        titulo: strTitulo,
        subtitulo: strSubtitulo,
        capa: base64Image,
        legenda: strLegenda,
        primeiroParagrafo: str1,
        segundoParagrafo: str2,
        terceiroParagrafo: str3,
        quartoParagrafo: str4,
        tipo: tipoSelecionado,
        tema: temasSelecionados,
        usuario: usuario,
        nomeUser: nomeUser,
        escritorID: userID,
        primeiraReferencia: strRef1,
        segundaReferencia: strRef2,
        comentarios: comentarios
      };
      objDados.postagens.push(novaPostagem);

      // Salvar os dados no localStorage novamente
      salvaDados(objDados);

      alert("Post enviado com sucesso!");
      window.location.href = "feed.html"
    };
    reader.readAsDataURL(fileCapa);
    
  });
  
}


/*---------------------------
SALVAR VETOR NO LOCAL STORAGE
----------------------------- */

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados));
}

function salvaUsers(dados) {
  localStorage.setItem('listaUser', JSON.stringify(dados));
}

/*--------------------------
    PÁGINA INICIAL
--------------------------*/

/*--------------------------
    FUNÇÃO EXIBE RECENTES

    Na página inicial, essa função exibe as 6 postagens mais recentes.
---------------------------*/

function exibeRecentes(objDados) {
  let str = '';

  for (let i = objDados.postagens.length - 1; i >= Math.max(objDados.postagens.length - 3, 0); i--) {
    let postagem = objDados.postagens[i];

    let temas = Array.isArray(postagem.tema) ? postagem.tema.join(', ') : '';

    str += `<div class="card border-primary" style="width: 20rem;">
            <img class="card-img-top" src="${postagem.capa}" alt="Erro de exibição.">
            <div class="card-body">
                <h5 class="card-title"><b>${postagem.titulo}</b></h5>
                <p class="card-text">${postagem.subtitulo}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Tipo:</b> ${postagem.tipo}.</li>
                <li class="list-group-item"><b>Temas:</b> ${postagem.tema.join(', ')}.</li>
                <li class="list-group-item"><b>Autor:</b> ${postagem.nomeUser}.</li>
            </ul>
            <br>
            <a href="apresentacao.html?id=${postagem.id}" class="btn">Ler mais</a>
        </div>`;
  }

  document.getElementById('tela').innerHTML = str;
}

/*--------------------------
    FEED
--------------------------*/

/*--------------------------
    FUNÇÃO EXIBE POSTAGENS

    No feed de postagens, essa função exibe na tela todas as postagens no vetor de objetos, da mais recente para a mais antiga.
---------------------------*/

function exibePostagens(objDados) {
  let str = '';

  for (let i = objDados.postagens.length - 1; i >= 0; i--) {
    let postagem = objDados.postagens[i];

    let temas = Array.isArray(postagem.tema) ? postagem.tema.join(', ') : '';

    if ((FILTRO_TIPO === "" || postagem.tipo === FILTRO_TIPO) && (FILTRO_TEMA === "" || postagem.tema.includes(FILTRO_TEMA))) {
      str += `<div class="card border-primary" style="width: 20rem; z-index: 1;">
                <img class="card-img-top" src="${postagem.capa}" alt="Erro de exibição.">
                <div class="card-body">
                    <h5 class="card-title"><b>${postagem.titulo}</b></h5>
                    <p class="card-text">${postagem.subtitulo}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Tipo:</b> ${postagem.tipo}.</li>
                    <li class="list-group-item"><b>Temas:</b> ${postagem.tema.join(', ')}.</li>
                    <li class="list-group-item"><b>Autor:</b> ${postagem.nomeUser}.</li>
                </ul>
                <br>
                <a href="apresentacao.html?id=${postagem.id}" class="btn">Ler mais</a>
            </div>`;
    }
  }

  document.getElementById('tela').innerHTML = str;
}


/*--------------------------
   APRESENTA A POSTAGEM
---------------------------*/

// Passa o ID da postagem por parâmetro de URL ao clicar em "Ler Mais"
const urlParams = new URLSearchParams(location.search);
let ID_POST = urlParams.get('id');

// Chama a função exibePost passa o parâmetro ID_POST
exibePost(ID_POST);

// Carrega os dados da postagem com base no ID (UUID)
function exibePost(ID_POST) {
  // Lê os dados do Local Storage
  let objDados = leDados();
  let objUsers = leUsers();

  // Procura a postagem com base no ID (UUID)
  const postagem = objDados.postagens.find(post => post.id === ID_POST);

  // Verifica se a postagem foi encontrada
  if (postagem) {
    // Obtém o ID do autor da postagem
    const escritorID = postagem.escritorID;

    // Procura o autor da postagem no objeto objUsers
    const autorPostagem = objUsers.find(user => user.idCad === escritorID);

    if (autorPostagem) {
      document.getElementById("title").textContent = postagem.titulo;
      document.getElementById("subtitle").textContent = `${postagem.subtitulo}.`;
      document.getElementById("fotoPerfil1").src = autorPostagem.fotoCad;
      document.getElementById("type").textContent = `Tipo: ${postagem.tipo}.`;
      document.getElementById("genre").textContent = `Tema: ${postagem.tema.join(', ')}.`;
      document.getElementById("autor").textContent = `Autor: ${postagem.nomeUser}.`;
      document.getElementById("capa").src = postagem.capa;
      document.getElementById("description").textContent = `${postagem.legenda}.`;
      document.getElementById("p1").textContent = postagem.primeiroParagrafo;
      document.getElementById("p2").textContent = postagem.segundoParagrafo;
      document.getElementById("p3").textContent = postagem.terceiroParagrafo;
      document.getElementById("p4").textContent = postagem.quartoParagrafo;
      document.getElementById("ref1").textContent = postagem.primeiraReferencia;
      document.getElementById("ref2").textContent = postagem.segundaReferencia;
    } else {
      console.error('Autor da postagem não encontrado.');
    }
  } else {
    console.error('Postagem não encontrada.');
  }
}


// Chama a função exibeComentarios assim que o documento for carregado
document.addEventListener("DOMContentLoaded", function () {
  // Ler o ID da postagem a partir da URL
  let ID_POST = urlParams.get('id');

  // Ler o ID do autor do perfil do localStorage
  let ID_AUTOR = localStorage.getItem('ID_AUTOR');


  // Exibe os comentários
  exibeComentarios(ID_POST, ID_AUTOR);
});

/*--------------------------
   ENVIA COMENTÁRIO
---------------------------*/
document.getElementById("commentForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Ler o ID da postagem a partir da URL
  let ID_POST = urlParams.get('id');

  // Ler os dados do localStorage
  let objDados = leDados();
  let objUser = leUser();

  // Verifica se o usuário está logado
  if (Object.keys(objUser).length === 0 || !objUser.id) {
    alert("Você precisa estar logado!");
    setTimeout(() => {
      window.location.href = 'signin.html';
    }, 1000);
    return; // Retorna imediatamente para evitar o envio do comentário
  }

  // Captura os valores dos campos
  var comment = document.getElementById("comment").value;

  // Encontrar o índice da postagem correspondente ao ID_POST
  let indicePostagem = objDados.postagens.findIndex(postagem => postagem.id === ID_POST);

  if (indicePostagem !== -1) {
    // Encontrou a postagem correspondente ao ID_POST
    let comentarios = { "autorID": objUser.id, "autor": objUser.nome, "texto": comment, "autorUser": objUser.user };

    // Adicionar o comentário ao vetor de comentários da postagem
    objDados.postagens[indicePostagem].comentarios.push(comentarios);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    alert("Comentário enviado com sucesso!");

    // Atualizar a exibição dos comentários na página
    exibeComentarios(ID_POST, objUser.id);
  } else {
    alert("Postagem não encontrada!");
  }
});

/*--------------------------
   EXIBE COMENTÁRIO
---------------------------*/

function exibeComentarios(ID_POST, ID_AUTOR) {
  let str = "";
  // Limpa o conteúdo anterior
  document.getElementById("comentariosContainer").innerHTML = "";

  // Ler os dados do localStorage
  let objDados = leDados();

  // Encontrar a postagem correspondente ao ID_POST
  let postagem = objDados.postagens.find(postagem => postagem.id === ID_POST);

  if (postagem) {
    let comentarios = postagem.comentarios;

    // Verifica se existem comentários para exibir
    if (comentarios.length > 0) {

      // Itera sobre os comentários e os exibe
      for (let i = 0; i < comentarios.length; i++) {
        let comentario = comentarios[i];

        // Cria um elemento de parágrafo para exibir o comentário
        str += `<div class="card border-primary bg-white" style="width: 14rem;">
              <div class="card-header border-primary">${comentario.autor}</div>
              <div class="card-body text">
                <p class="card-text">${comentario.texto}</p>
              </div>
              <div class="card-footer border-primary"><a id="arroba" href="perfil.html?id=${comentario.autorID}">@${comentario.autorUser}</a></div>
            </div>`;
      }

      document.getElementById('comentariosContainer').innerHTML = str;
    } else {
      // Se não houver comentários, exibe uma mensagem indicando isso
      document.getElementById("comentariosContainer").textContent = "Nenhum comentário ainda.";
    }
  }
}


function preenchePerfil(ID_PERFIL) {
  let objUsers = leUsers();
  let objUser = leUser();


  // Procura o perfil com base no ID
  const perfil = objUsers.find(perfil => perfil.idCad === ID_PERFIL);

  if (perfil) {
    console.log(perfil);

    if (perfil.idCad != objUser.id) {
      document.getElementById('labelFoto').innerHTML = '<label for="fotoInput"><img id="fotoPerfil" src="images/fotoPerfil.png" alt="Não foi possível carregar imagem."></label>';
      document.getElementById('fotoInput').disabled = true;
      document.getElementById('status').disabled = true;
      document.getElementById('salvar').style.display = 'none';
      document.getElementById('sair').style.display = 'none';
    }

    document.getElementById('fotoPerfil').src = perfil.fotoCad || '';
    document.getElementById('nome').innerHTML = perfil.nomeCad || '';
    document.getElementById('usuario').innerHTML = `@${perfil.userCad}` || '';
    document.getElementById('email').innerHTML = perfil.emailCad || '';
    document.getElementById('status').value = perfil.statusCad || '';
  } else {
    console.log('Perfil não encontrado');
  }
}



/*--------------------------
    PREENCHE PERFIL
---------------------------*/

function leFoto() {
  console.log("Oi");
  // Passa o ID do perfil por parâmetro de URL
  const urlParam = new URLSearchParams(location.search);
  let ID_PERFIL = urlParam.get('id');

  // Armazenar o ID do perfil no localStorage
  localStorage.setItem('ID_PERFIL', ID_PERFIL);

  // Ler os dados do localStorage
  let objUsers = leUsers();

  // Encontrar o índice do perfil correspondente ao ID_PERFIL
  let indicePerfil = objUsers.findIndex(usuario => usuario.idCad === ID_PERFIL);

  if (indicePerfil !== -1) {
    let profilePic = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      let base64Image = event.target.result;

      // Atualizar o atributo "fotoCad" do perfil no objeto objUsers
      objUsers[indicePerfil].fotoCad = base64Image;

      // Salvar os dados no localStorage novamente
      salvaUsers(objUsers);
    };
    reader.readAsDataURL(profilePic);
  }

  location.reload();
}

function leStatus() {
  console.log("Oi");
  // Passa o ID do perfil por parâmetro de URL
  const urlParam = new URLSearchParams(location.search);
  let ID_PERFIL = urlParam.get('id');

  // Armazenar o ID do perfil no localStorage
  localStorage.setItem('ID_PERFIL', ID_PERFIL);

  // Ler os dados do localStorage
  let objUsers = leUsers();

  // Encontrar o índice do perfil correspondente ao ID_PERFIL
  let indicePerfil = objUsers.findIndex(usuario => usuario.idCad === ID_PERFIL);

  if (indicePerfil !== -1) {
    let status = document.getElementById('status').value;

    // Atualizar o atributo "fotoCad" do perfil no objeto objUsers
    objUsers[indicePerfil].statusCad = status;

    // Salvar os dados no localStorage novamente
    salvaUsers(objUsers);
  };

  location.reload();
}

function sair() {
  localStorage.removeItem('userLogado');

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}
/*--------------------------
    Entrar Perfil
---------------------------*/
function entraPerfil() {
  let ID_POST = urlParams.get('id');
  let objDados = leDados();
  const postagem = objDados.postagens.find(post => post.id === ID_POST);
  window.location.href = `perfil.html?id=${postagem.escritorID}`;
}
/*--------------------------
    Exibe Foruns
---------------------------*/
function exibeForuns(Foruns) {
  if (Foruns[0] != undefined) {
    let Objusr = leUsers();
    let str = '';
    Foruns.forEach(Forum => {
      const User = Objusr.find(user => user.idCad === Forum.autorId);
      str += `<div class="card border-primary back"  style="width: 22rem;">
              <div class="card-header card-text border-primary="><h5>${Forum.titulo}</h5></div>
              <div class="card-body ">
               
                <p class="card-text">${Forum.subtitulo}</p>
              </div>
              <a href="#" onclick="testaloginConversar('${Forum.id}')" class="btn">Conversar</a>
            </div>`;
    });
    document.getElementById("chatscont").innerHTML = str;
  }
  else {
    let str = "<p class='text-center'>Nenhum chat criado ainda :(</p<"
    document.getElementById("chatscont").innerHTML = str;
  }

}
/*--------------------------
    IniciaPag
---------------------------*/

function iniciaPag(){
  let c = JSON.parse(localStorage.getItem("cores"))
  if(c.darkmode){
    document.getElementById('nav').classList.add('dark')
    document.body.classList.add('dark')
    document.getElementById('section').classList.add('dark')
  }
  else{
    document.getElementById('nav').classList.remove('dark')
  document.body.classList.remove('dark')
  document.getElementById('section').classList.remove('dark')
  }
  if(c.colored){
    document.body.classList.add('colored')
    document.getElementById('section').classList.add('colored')
  }
  else{
    document.body.classList.remove('colored')
    document.getElementById('section').classList.remove('colored')
  }
}
document.onload(iniciaPag())
