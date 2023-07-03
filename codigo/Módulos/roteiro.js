objDados = {
    postagens: [
        {
            titulo: "As dificuldades de inclusão de neurodivergentes",
            subtitulo: "Estudo americano identifica os principais impecílios para acolher neurodivergentes nas escolas.",
            capa: "https://picsum.photos/id/237/300/200",
            tipo: "artigo",
            tema: [
                "familia",
                "amigos"
            ],
            primeiroAutor: "João Pedro de Melo Murta"
        },
        {
            titulo: "A importância do autocuidado",
            subtitulo: "Saiba como cuidar de si mesmo pode melhorar sua qualidade de vida.",
            capa: "https://picsum.photos/id/238/300/200",
            tipo: "guia",
            tema: [
                "saude",
                "lazer"
            ],
            primeiroAutor: "Matheus Gonçalves"
        },
        {
            titulo: "Univergente: Grupo de acolhimento de Neurodivergentes em Belo Horizonte",
            subtitulo: "É aberto novo grupo de acolhimento de estudantes neurodivergentes e familiares no bairro Padre Eustário.",
            capa: "https://picsum.photos/id/239/300/200",
            tipo: "noticia",
            tema: [
                "inclusão"
            ],
            primeiroAutor: "Luan De Moura"
        },
        {
            titulo: "Nova lei de incentivo a alunos autistas em escolas mineiras",
            subtitulo: "A Lei de N° 9583 foi aprovada na câmera do deputados estaduais nesta manhã de segunda feira.",
            capa: "https://picsum.photos/id/240/300/200",
            tipo: "noticia",
            tema: [
                "inclusão",
                "escola",
                "comunidade"
            ],
            primeiroAutor: "Gabriel Martins"
        },
        {
            titulo: "Dicas para lidar melhor com o seu filho",
            subtitulo: "Uma reportagem da BBC UK reúne pais de neurodivergentes para contar suas experiências.",
            capa: "https://picsum.photos/id/241/300/200",
            tipo: "guia",
            tema: [
                "familia"
            ],
            primeiroAutor: "Ana Clara Rezende"
        },
        {
            titulo: "Celebridades que são Neurodivergentes",
            subtitulo: "Conheça 10 celebridades que são neurodivergentes e você não sabia.",
            capa: "https://picsum.photos/id/242/300/200",
            tipo: "noticia",
            tema: [
                "variado"
            ],
            primeiroAutor: "Vinicius D'Ascenção"
        },
        {
            titulo: "Como promover inclusão nas escolas",
            subtitulo: "Um guia para educadores e estudantes.",
            capa: "https://picsum.photos/id/243/300/200",
            tipo: "guia",
            tema: [
                "inclusao",
                "escola"
            ],
            primeiroAutor: "Marta Dos Santos"
        },
        {
            titulo: "O sujeito cerebral e o movimento da neurodiversidade",
            subtitulo: "Artigo que analisa a neurodivergencia mesclando ciência e sociedade.",
            capa: "https://picsum.photos/id/244/300/200",
            tipo: "artigo",
            tema: [
                "ciencia",
                "saude"
            ],
            primeiroAutor: "Antônio DeMarco"
        },
        {
            titulo: "Programa de cinema adaptado para autistas lança programação",
            subtitulo: "O programa de cinema adaptado para o público com Transtorno do Espectro Autista recebe neste domingo 11/06 uma sessão gratuita para crianças.",
            capa: "https://picsum.photos/id/225/300/200",
            tipo: "noticia",
            tema: [
                "lazer",
                "inclusao"
            ],
            primeiroAutor: "Elizabeth Ramos"
        }
    ] 
};

let FILTRO_TIPO = ""; let FILTRO_TEMA = "";

document.body.onload = () => {
    let filtroTipo = document.querySelector('#filtroTipo');
    filtroTipo.addEventListener('change', () => {
        FILTRO_TIPO = filtroTipo.value;
        exibePostagens();
    });

    let filtroTema = document.querySelector('#filtroTema');
    filtroTema.addEventListener('change', () => {
        FILTRO_TEMA = filtroTema.value;
        exibePostagens();
    });

    exibePostagens();
};

function exibePostagens() {
    let str = '';
  
    for (let i = 0; i < objDados.postagens.length; i++) {
      let postagem = objDados.postagens[i];
  
      if ((FILTRO_TIPO === "" || postagem.tipo === FILTRO_TIPO) && (FILTRO_TEMA === "" || postagem.tema.includes(FILTRO_TEMA))) {
        str += `<div class="card" style="width: 20rem;">
            <img class="card-img-top" src="${postagem.capa}" alt="Erro de exibição.">
            <div class="card-body">
              <h5 class="card-title"><b>${postagem.titulo}</b></h5>
              <p class="card-text">${postagem.subtitulo}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Tipo:</b> ${postagem.tipo}.</li>
              <li class="list-group-item"><b>Temas:</b> ${postagem.tema.join(', ')}.</li>
              <li class="list-group-item"><b>Autor:</b> ${postagem.primeiroAutor}.</li>
            </ul>
            <br>
            <a href="detalhes.html?id=${postagem.id}" class="btn">Ler mais</a>
          </div>`;
      }
    }
  
    document.getElementById('tela').innerHTML = str;
  }
  
