

//receber a postagem do local storage
var postagem = (localStorage.getItem("postagematual"));
postagem = JSON.parse(postagem)
//fim do recebimento


//adicionar postagem aos inputs
function fillInputs (){
    $('#titulo').prop('value', postagem.titulo);
    $('#subtitulo').prop('value', postagem.subtitulo);
    $('#legenda').prop('value', postagem.legendacapa);
    for(i=1;i<6;i++){
        $('#paragrafo'+i).prop('value', postagem.texto[i-1]);
    }
    $('#autores').prop('value', postagem.autores);
    $('#referencias').prop('value', postagem.referencias);
    //preencher bolinha
    if(postagem.tipo=="guia"){
        $('#guia').prop("checked", true);
    }
    if(postagem.tipo=="artigo"){
        $('#artigo').prop("checked", true);
    }
    if(postagem.tipo=="noticia"){
        $('#noticia').prop("checked", true);
    }
    //preencher checkboxes
    for(i=0;i<postagem.tema.length;i++){
        if(postagem.tema[i]=='escola'){
            $('#checkbox1').prop("checked", true);
        }
        if(postagem.tema[i]=='lazer'){
            $('#checkbox2').prop("checked", true);
        }
        if(postagem.tema[i]=='familia'){
            $('#checkbox3').prop("checked", true);
        }
        if(postagem.tema[i]=='amigos'){
            $('#checkbox4').prop("checked", true);
        }
        if(postagem.tema[i]=='saude'){
            $('#checkbox5').prop("checked", true);
        }
        if(postagem.tema[i]=='inclusao'){
            $('#checkbox6').prop("checked", true);
        }
    }
    //preencher imagem
    $("#img").prop('src',postagem.fotocapa);
}
//fim do preenchimento 


//funcao para diferenciar checkboxes 
function checkboxtest(){
    postagem.tema = [];
    if($("#checkbox1:checked").length!=0){
        postagem.tema.push("escola")
    }
    if($("#checkbox2:checked").length!=0){
        postagem.tema.push("lazer")
    }
    if($("#checkbox3:checked").length!=0){
        postagem.tema.push("familia")
    }
    if($("#checkbox4:checked").length!=0){
        postagem.tema.push("amigos")
    }
    if($("#checkbox5:checked").length!=0){
        postagem.tema.push("saude")
    }
    if($("#checkbox6:checked").length!=0){
        postagem.tema.push("inclusao")
    }

}
//fim da função pras checkboxes


//funcao para diferenciar bolinhas
function testarbolinhas(){
    if($('#guia:checked').length!=0){
        postagem.tipo = 'guia'
    }
    if($('#artigo:checked').length!=0){
        postagem.tipo = 'artigo'
    }
    if($('#noticia:checked').length!=0){
        postagem.tipo = 'noticia'
    }
}
//fim das bolinhas


//ler arquivo de imagem
function imgreader(){
        var leitor = new FileReader
        var imagem = document.getElementById('imagem').files[0]
        if((imagem.type.split('/'))[0]=='image'){
            var imagemcerta = null;
            leitor.readAsDataURL(imagem)
            leitor.onload= function(event){
            imagemcerta = event.target.result;
            $("#img").prop('src',imagemcerta)
            }
        }
        else{
            alert('Erro: Insira apenas imagens(.jpeg,.png,.svg,.bmp)')
            document.getElementById('imagem').value=null
        }
}
//fim de leitura


//atualizar JSON
function updateJSON(){
    //textos
    postagem.titulo = document.getElementById('titulo').value;
    postagem.subtitulo = document.getElementById('subtitulo').value;
    postagem.legendacapa = document.getElementById('legenda').value;
    postagem.autores = document.getElementById('autores').value;
    postagem.referencias = document.getElementById('referencias').value;
    for(i=1;i<6;i++){
        postagem.texto[i-1]=document.getElementById('paragrafo'+i).value;
    }
    

    //fim dos textos

    //atualizar foto da capa
    postagem.fotocapa = $("#img").prop('src')
    //fim da fotocapa

    //atualizar bolinha e checkboxes
    checkboxtest();
    testarbolinhas();
}
//fim da alteração


//função principal
$(document).ready(function(){
    fillInputs()
    $("#imagem").change(function(){
        imgreader();
    
    })

    //testar validação das checkboxes
    var checkbox = $("[type = checkbox]:checked")
     if(checkbox.length==0){
        for (i=1;i<7;i++){
        var cre = 'checkbox'+i;
        document.getElementById('checkbox'+i).setCustomValidity("Marque uma caixa");
        }
     }
     else{
        for (i=1;i<7;i++){
            document.getElementById('checkbox'+i).setCustomValidity("");
            }

     }

    $("[type = checkbox]").click(function(){
    var checkbox = $("[type = checkbox]:checked")
     if(checkbox.length==0){
        for (i=1;i<7;i++){
        var cre = 'checkbox'+i;
        document.getElementById('checkbox'+i).setCustomValidity("Marque uma caixa");
        }
     }
     else{
        for (i=1;i<7;i++){
            document.getElementById('checkbox'+i).setCustomValidity("");
            }

     }
     //fim da validação das checkboxes
     
    
    })
    $("#form").submit(function(){
        alert("ok")
        updateJSON();
        postagem = JSON.stringify(postagem)
        localStorage.setItem("postagematual",postagem)
    })
    

})

