//funcao exemplo (simula o que o artefato de login faria)
var usuario = {
    "id":"3122134"
}
function enviardados(){
   sessionStorage.setItem("user", JSON.stringify(usuario));

}


//receber a postagem do local storage (o 0 seria o id obtido pelo artefato apresentador de postagens)
var postagens = []
postagens[0]= JSON.parse(localStorage.getItem("postagematual"))
//postagem de exemplo
if (postagens[0] == null){

    postagens = [{
        "id":0,
        "titulo":"Loremipsum",
        "subtitulo":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "fotocapa":"imgs/images.jpeg",
        "legendacapa": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "texto":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis sem nec felis fringilla fermentum. Nam facilisis posuere justo ut dignissim. Suspendisse non magna consectetur, lacinia mi et, pretium enim. Curabitur eleifend risus justo, ac luctus eros faucibus et. Nulla tempus aliquam fringilla. Phasellus at nibh lorem. Donec pharetra ac nulla ac volutpat. Aenean gravida sollicitudin tortor. Integer et est posuere, vehicula urna sit amet, blandit orci. Aliquam sit amet efficitur eros, eu efficitur turpis. Vestibulum fermentum eros dolor, ut efficitur enim placerat ac. Nunc egestas leo massa. Vestibulum semper lorem felis, interdum gravida nisi commodo euismod.","Vivamus finibus nunc scelerisque commodo ultrices. Aenean sit amet lacus ut felis blandit commodo. Etiam sed nunc magna. Vivamus aliquet dignissim mi, et consequat odio malesuada non. Aliquam tellus ipsum, pharetra non tellus eget, iaculis interdum odio. Cras tempor massa at dui malesuada, nec sodales quam consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam auctor urna non venenatis elementum. Etiam ornare ornare sem ac aliquam. Vestibulum porttitor tincidunt purus, non consequat enim egestas fermentum.","Aenean malesuada est eget tristique dapibus. Integer facilisis turpis urna, vitae faucibus leo tempus non. Vivamus placerat in diam in semper. Integer turpis libero, consectetur ac nunc vel, sodales eleifend ipsum. Aenean consequat interdum enim, id finibus quam efficitur a. Suspendisse sit amet diam gravida, porttitor lacus ac, imperdiet augue. Nullam feugiat commodo facilisis. Nullam vitae nulla eu leo luctus molestie.","Etiam ac finibus tortor, sit amet fermentum felis. Nulla mollis lobortis nisi, nec faucibus tortor posuere a. Sed dapibus turpis ut neque facilisis hendrerit. Aliquam erat volutpat. Nunc vulputate tristique ante, ac pretium turpis bibendum id. Sed gravida volutpat augue. Aenean dictum libero eget sem maximus, eget congue velit blandit. Integer suscipit magna tincidunt convallis lacinia. Fusce maximus dictum lorem, quis lobortis nunc vulputate vel. Aliquam consectetur tincidunt mi, vitae interdum enim semper in.","Vestibulum laoreet, est a porttitor sagittis, erat diam mattis lectus, sed porta ante risus vel felis. Cras rutrum eleifend leo, ac euismod mauris molestie non. Suspendisse potenti. Aliquam erat volutpat. Mauris tempus dolor vitae nulla ullamcorper sagittis eget a metus. Ut volutpat lacus enim, sit amet laoreet mauris laoreet quis. Pellentesque consequat in purus convallis aliquet. Maecenas turpis nibh, feugiat eu elit sed, feugiat ultricies risus."],
        "tipo":"guia",
        "tema":["escola","familia","inclusao"],
        "autores": "gerson silva",
        "referencias": "loremipsum.com/loremipsum",
        "idcriador": 3122134
        
    }
    ]
}
//funcao para testar se o usuario é o criador da postagem
function usertest(){
    if(JSON.parse(sessionStorage.getItem("user"))!=null){
    var user = (JSON.parse(sessionStorage.getItem("user"))).id;
    var criador = postagens[0].idcriador;
    if (user == criador){
        $('#editar').css('display','inline');
    }
    else{
        $('#editar').css('display','none');
    }
    }
    else{
        $('#editar').css('display','none');
    }
}



//Função para colocar postagem exemplo
function mostrarpostagem(){
    $('#postagem').append($( "<h1 class='text-center'>"+postagens[0].titulo+"</h1>"));
    $('#postagem').append($("<h3 class='text-center'>"+postagens[0].subtitulo+"</h3>"));
    $('#postagem').append($( "<p  class='text-center fw-bold'>Autores: "+postagens[0].autores+"</p>"));
    $('#postagem').append($( "<img src='"+postagens[0].fotocapa+"' class='mx-auto' style='width:500px; display:block'>" ));
    $('#postagem').append($( "<p  class='text-center fw-bold'>"+postagens[0].legendacapa+"</p>"));
    for(i=0;i<postagens[0].texto.length;i++){
        $('#postagem').append($("<p>    "+postagens[0].texto[i]+"</p>"));
    }
    $('#postagem').append($( "<p  class='text-center fw-bold'>Referências: "+postagens[0].referencias+"</p>"));
        }
        
        
    

$(document).ready(function(){
    usertest();
    mostrarpostagem();
    //Salvar postagem no local storage quando for editar
    $('#editar').click(function(){
        localStorage.setItem("postagematual",JSON.stringify(postagens[0]));

    })
    $("#login").click(function(){
        enviardados();
        usertest();
    })
    
    
   
})