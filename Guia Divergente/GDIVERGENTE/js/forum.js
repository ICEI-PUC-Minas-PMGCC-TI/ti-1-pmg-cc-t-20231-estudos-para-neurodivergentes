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
    /*---------------------------
    SALVAR VETOR NO LOCAL STORAGE
    ----------------------------- */

    function salvaDados(dados) {
        localStorage.setItem('foruns', JSON.stringify(dados));
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
    /*--------------------------
        PegarForum
    ---------------------------*/
    function PegarForum() {
        const urlParams = new URLSearchParams(location.search);
        let ID_POST = urlParams.get('id');
        let objDados = leForuns();
        const Forum = objDados.find(post => post.id === ID_POST);
        return Forum;
    }
    /*--------------------------
        Mostrar forum
    ---------------------------*/
    function MostarForum(F) {
        let Objusr = leUsers();
        const User = Objusr.find(user => user.idCad === F.autorId);
        document.getElementById("tituloconversa").innerHTML = F.titulo;
        document.getElementById("subtituloconversa").innerHTML = F.subtitulo;
        document.getElementById("autorconversa").innerHTML = `<a id="arroba" href="perfil.html?id=${User.idCad}">Autor: ${User.nomeCad}</a>`;
    }
    /*--------------------------
       Enviar Cometarios
    ---------------------------*/

    function enviarComentario() {
        var field = document.getElementById("comment")
        const Usr = leUser();
        const texto = $("#comment").val().trim();
        if (texto != "") {
            document.getElementById("erro").style.display = "none";
            field.setCustomValidity("")
            const urlParams = new URLSearchParams(location.search);
            let ID_POST = urlParams.get('id');
            let objDados = leForuns();
            const Forum = objDados.findIndex(post => post.id === ID_POST);
            if (!objDados[Forum].hasOwnProperty("comentarios")) {
                objDados[Forum].comentarios = [];
            }
            comentario = {
                "idAutor": Usr.id,
                "nomeAutor": Usr.nome,
                "userAuto": Usr.user,
                "comentario": texto
            }
            objDados[Forum].comentarios.push(comentario);
            salvaDados(objDados);
            verComent();
            $("#comment").val("");

        }

        else {
            field.setCustomValidity("Invalid field.");
            document.getElementById("erro").style.display = "block";
        }
    }
    /*--------------------------
       Ver Comentarios
    ---------------------------*/
    function verComent() {
        const urlParams = new URLSearchParams(location.search);
        let ID_POST = urlParams.get('id');
        let objDados = leForuns();
        const Forum = objDados.findIndex(post => post.id === ID_POST);
        if (objDados[Forum].hasOwnProperty("comentarios")) {
            var string = '';
            objDados[Forum].comentarios.forEach(element => {

                string += `<div 'class=row'><div class='col pt-3'><div class="card border-primary cleber" style="width: 75%;"><div class="card-header border-primary">${element.nomeAutor} diz:</div><div class="card-body text"><p class="card-text">${element.comentario}</p></div><div class="card-footer border-primary"><a id="arroba" href="perfil.html?id=${element.idAutor}">@${element.userAuto}</a></div></div></div></div>`

            });
            document.getElementById("Container").innerHTML = string;
        }
        else {
            document.getElementById("Container").innerHTML = "<p class='text-center'>Nenhum Comentario ainda :(</p>"
        }
    }