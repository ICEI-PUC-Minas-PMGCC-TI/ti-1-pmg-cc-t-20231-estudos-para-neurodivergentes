/*---------------------------
LÊ DADOS DO LOCAL STORAGE
----------------------------- */

function leDados() {
    let strDados = localStorage.getItem("db");
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);

    } else {
        objDados = {
            postagens: [
                {
                    titulo: "As dificuldades de inclusão de neurodivergentes",
                    subtitulo: "Estudo americano identifica os principais impecílios para acolher neurodivergentes nas escolas",
                    capa: "https://picsum.photos/id/237/200/300",
                    legenda: "Crianças em uma sala de aula",
                    primeiroParagrafo: "legenda: Crianças em uma sala de aula legenda: Crianças em uma sala de aula.",
                    segundoParagrafo: "legenda:nkjnwcjdvnkwcmwjnejvwji Crianças em uma sala de aula legenda: Crianças em uma sala de aula.",
                    terceiroParagrafo: "I wanna go where nobody has been. Have you ever had fun like this?",
                    quartoParagrafo: "To fix this, You must declare that the variable is an array before array methods like the push(), pop(), and others can work on it:",
                    tipo: "aritgo",
                    tema: [
                        "familia",
                        "amigos"
                    ],
                    primeiroAutor: "Machado de Assis Ramos",
                    segundoAutor: "Stephen King Abbot",
                    primeiraReferencia: "Canal do Mundo Tecnologia Brasil",
                    segundaReferencia: "Canal Brasileiro de Informações sobre TDAH"
                }
            ] 
        };
    }

    return objDados;
}

/*---------------------------
RECEBER POSTAGEM PARA O VETOR
----------------------------- */

var form = document.getElementById('formulario');
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir uma nova postagem
    let strTitulo = document.getElementById('campoTitulo').value;
    let strSubtitulo = document.getElementById('campoSubtitulo').value;
    let fileCapa = document.getElementById('campoCapa').files[0];
    let nomeArquivoCapa = fileCapa.name;
    let strLegenda = document.getElementById('campoLegenda').value;
    let strOpcoes = document.querySelectorAll('input[name="tipo"]:checked');
    let tipoSelecionado = strOpcoes.length > 0 ? strOpcoes[0].value : '';

    let strCheckbox = document.querySelectorAll('input[name="tema"]:checked');
    let temasSelecionados = Array.from(strCheckbox).map(function (checkbox) {
        return checkbox.value;
    });
    
    let str1 = document.getElementById('campoTexto1').value;
    let str2 = document.getElementById('campoTexto2').value;
    let str3 = document.getElementById('campoTexto3').value;
    let str4 = document.getElementById('campoTexto4').value;
    let strAutor1 = document.getElementById('campoAutor1').value;
    let strAutor2 = document.getElementById('campoAutor2').value;
    let strRef1 = document.getElementById('campoReferencia1').value;
    let strRef2 = document.getElementById('campoReferencia2').value;

    let novaPostagem = {
        titulo: strTitulo,
        subtitulo: strSubtitulo,
        capa: nomeArquivoCapa,
        legenda: strLegenda,
        primeiroParagrafo: str1,
        segundoParagrafo: str2,
        terceiroParagrafo: str3,
        quartoParagrafo: str4,
        tipo: tipoSelecionado,
        tema: temasSelecionados,
        primeiroAutor: strAutor1,
        segundoAutor: strAutor2,
        primeiraReferencia: strRef1,
        segundaReferencia: strRef2
    };
    objDados.postagens.push(novaPostagem);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    alert("Formulário enviado com sucesso!");
  });

/*---------------------------
SALVAR VETOR NO LOCAL STORAGE
----------------------------- */

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}