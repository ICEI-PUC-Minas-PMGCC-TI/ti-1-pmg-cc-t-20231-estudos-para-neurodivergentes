

/*---------------------------
        GERA ID PARA FORUM
----------------------------- */

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
/*---------------------------
    FORMULARIO
----------------------------- */
let Foruns;
$(document).ready(()=>{
    if(localStorage.getItem("foruns")==undefined){
        Foruns = [];
    }
    else{
        Foruns=JSON.parse(localStorage.getItem("foruns"));
    }
    console.log(Foruns)
})
/*---------------------------
SALVAR VETOR NO LOCAL STORAGE
----------------------------- */

function salvaDados(dados) {
    localStorage.setItem('foruns', JSON.stringify(dados));
}

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
    Criar um novo forum
----------------------------- */
var form = document.getElementById('formulario');
if(form){
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let Objusr = leUser();
        let id = uuidv4();
        let Forum = {
            "id":id,
            "autorId":Objusr.id,
            "titulo":$("#campoTitulo").val(),
            "subtitulo":$("#campoSubtitulo").val()
        }
        Foruns.push(Forum);
        salvaDados(Foruns);
        alert("Fórum enviado com sucesso!");
        window.location.href = "chat.html"

    })

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
