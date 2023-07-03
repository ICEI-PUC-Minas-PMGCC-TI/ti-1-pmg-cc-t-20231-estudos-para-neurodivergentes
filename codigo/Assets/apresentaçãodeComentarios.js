
//Postagens exemplo
function postagemexemplo(){
    postagens = JSON.parse(localStorage.getItem("postagens"))
    if (postagens == null) {
        postagens = [{
            "postagem": 1,
            "titulo": "loremipsum um",
            "conteudo": "`Lorem ipsum primeiro dolor sit amet, consectetur adipiscing elit. Nunc nec dui fermentum, egestas mi et, sollicitudin tellus. Nullam elementum orci ipsum, at convallis massa facilisis in. Donec id risus blandit, porttitor dui sit amet, interdum urna. Aenean tristique risus justo, a tincidunt orci gravida eu. Vestibulum vehicula orci vel nibh finibus, eu rutrum augue congue. Aenean at ipsum egestas, dapibus ipsum ut, accumsan augue. Etiam feugiat, mauris et scelerisque commodo, velit ligula pellentesque leo, nec ultricies eros justo non purus. Duis vel tellus nibh. Cras elementum malesuada rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse auctor lectus sollicitudin felis malesuada, id fermentum odio ultrices. Aliquam ultrices eros neque, congue placerat nibh tincidunt ut.<br><br>Nulla eleifend pulvinar nunc, vitae imperdiet nibh gravida id. Curabitur velit odio, posuere quis varius sit amet, tempus at dui. Vivamus sed urna sodales augue ultricies lacinia. Quisque sodales mattis lacus, non interdum elit. Phasellus eu purus in enim fermentum condimentum eu tempus est. Donec molestie laoreet est, ac luctus lacus suscipit sit amet. Cras rhoncus tincidunt commodo. Etiam fermentum bibendum euismod. Vestibulum in nisi vestibulum, aliquet purus eget, consectetur erat. Curabitur elementum risus fringilla sem hendrerit luctus. Aliquam pharetra facilisis mauris, dignissim rutrum risus rhoncus quis. Quisque tincidunt dignissim ullamcorper. Phasellus elementum mollis mauris non rhoncus.<br><br>Integer at dignissim enim, ac feugiat metus. Aliquam erat volutpat. Maecenas dapibus ipsum id justo maximus posuere. Donec consectetur nisi nec elit posuere, non blandit purus bibendum. Praesent nibh erat, varius sed feugiat et, tempor non velit. Donec pretium sed diam quis pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sollicitudin sit amet ipsum in efficitur. Donec posuere dui in tellus mattis, et hendrerit quam elementum. Nullam mauris odio, gravida non lectus ut, feugiat malesuada ante. Maecenas eget nulla consectetur dui placerat viverra. Quisque congue eros sit amet vestibulum congue. Nulla facilisi. Fusce sed dignissim ante, nec tincidunt mauris. Nam massa nisl, euismod quis metus in, hendrerit ornare neque. Sed sagittis ipsum at risus ultrices, eget pharetra sapien ultricies.<br><br>Aliquam",
            "comentarios": [{
            }


            ]

        },
        {
            "postagem": 2,
            "titulo": "loremipsum dois",
            "conteudo": "`Lorem ipsum segundo dolor sit amet, consectetur adipiscing elit. Nunc nec dui fermentum, egestas mi et, sollicitudin tellus. Nullam elementum orci ipsum, at convallis massa facilisis in. Donec id risus blandit, porttitor dui sit amet, interdum urna. Aenean tristique risus justo, a tincidunt orci gravida eu. Vestibulum vehicula orci vel nibh finibus, eu rutrum augue congue. Aenean at ipsum egestas, dapibus ipsum ut, accumsan augue. Etiam feugiat, mauris et scelerisque commodo, velit ligula pellentesque leo, nec ultricies eros justo non purus. Duis vel tellus nibh. Cras elementum malesuada rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse auctor lectus sollicitudin felis malesuada, id fermentum odio ultrices. Aliquam ultrices eros neque, congue placerat nibh tincidunt ut.<br><br>Nulla eleifend pulvinar nunc, vitae imperdiet nibh gravida id. Curabitur velit odio, posuere quis varius sit amet, tempus at dui. Vivamus sed urna sodales augue ultricies lacinia. Quisque sodales mattis lacus, non interdum elit. Phasellus eu purus in enim fermentum condimentum eu tempus est. Donec molestie laoreet est, ac luctus lacus suscipit sit amet. Cras rhoncus tincidunt commodo. Etiam fermentum bibendum euismod. Vestibulum in nisi vestibulum, aliquet purus eget, consectetur erat. Curabitur elementum risus fringilla sem hendrerit luctus. Aliquam pharetra facilisis mauris, dignissim rutrum risus rhoncus quis. Quisque tincidunt dignissim ullamcorper. Phasellus elementum mollis mauris non rhoncus.<br><br>Integer at dignissim enim, ac feugiat metus. Aliquam erat volutpat. Maecenas dapibus ipsum id justo maximus posuere. Donec consectetur nisi nec elit posuere, non blandit purus bibendum. Praesent nibh erat, varius sed feugiat et, tempor non velit. Donec pretium sed diam quis pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sollicitudin sit amet ipsum in efficitur. Donec posuere dui in tellus mattis, et hendrerit quam elementum. Nullam mauris odio, gravida non lectus ut, feugiat malesuada ante. Maecenas eget nulla consectetur dui placerat viverra. Quisque congue eros sit amet vestibulum congue. Nulla facilisi. Fusce sed dignissim ante, nec tincidunt mauris. Nam massa nisl, euismod quis metus in, hendrerit ornare neque. Sed sagittis ipsum at risus ultrices, eget pharetra sapien ultricies.<br><br>Aliquam",
            "comentarios": [{
            }


            ]

        },
        {
            "postagem": 3,
            "titulo": "loremipsum tres",
            "conteudo": "`Lorem ipsum terceiro dolor sit amet, consectetur adipiscing elit. Nunc nec dui fermentum, egestas mi et, sollicitudin tellus. Nullam elementum orci ipsum, at convallis massa facilisis in. Donec id risus blandit, porttitor dui sit amet, interdum urna. Aenean tristique risus justo, a tincidunt orci gravida eu. Vestibulum vehicula orci vel nibh finibus, eu rutrum augue congue. Aenean at ipsum egestas, dapibus ipsum ut, accumsan augue. Etiam feugiat, mauris et scelerisque commodo, velit ligula pellentesque leo, nec ultricies eros justo non purus. Duis vel tellus nibh. Cras elementum malesuada rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse auctor lectus sollicitudin felis malesuada, id fermentum odio ultrices. Aliquam ultrices eros neque, congue placerat nibh tincidunt ut.<br><br>Nulla eleifend pulvinar nunc, vitae imperdiet nibh gravida id. Curabitur velit odio, posuere quis varius sit amet, tempus at dui. Vivamus sed urna sodales augue ultricies lacinia. Quisque sodales mattis lacus, non interdum elit. Phasellus eu purus in enim fermentum condimentum eu tempus est. Donec molestie laoreet est, ac luctus lacus suscipit sit amet. Cras rhoncus tincidunt commodo. Etiam fermentum bibendum euismod. Vestibulum in nisi vestibulum, aliquet purus eget, consectetur erat. Curabitur elementum risus fringilla sem hendrerit luctus. Aliquam pharetra facilisis mauris, dignissim rutrum risus rhoncus quis. Quisque tincidunt dignissim ullamcorper. Phasellus elementum mollis mauris non rhoncus.<br><br>Integer at dignissim enim, ac feugiat metus. Aliquam erat volutpat. Maecenas dapibus ipsum id justo maximus posuere. Donec consectetur nisi nec elit posuere, non blandit purus bibendum. Praesent nibh erat, varius sed feugiat et, tempor non velit. Donec pretium sed diam quis pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sollicitudin sit amet ipsum in efficitur. Donec posuere dui in tellus mattis, et hendrerit quam elementum. Nullam mauris odio, gravida non lectus ut, feugiat malesuada ante. Maecenas eget nulla consectetur dui placerat viverra. Quisque congue eros sit amet vestibulum congue. Nulla facilisi. Fusce sed dignissim ante, nec tincidunt mauris. Nam massa nisl, euismod quis metus in, hendrerit ornare neque. Sed sagittis ipsum at risus ultrices, eget pharetra sapien ultricies.<br><br>Aliquam",
            "comentarios": [{
            }


            ]

        },
        ]
        localStorage.setItem("postagens",JSON.stringify(postagens));

    }
    
    
}
//colocar postagens 
function addpost (post){
    $("#principal").html(`<h1>${post.titulo}</h1><p>${post.conteudo}</p>`);
    $("#botoesteste").html('<div class="row"><div class="col"><button id="btnex1" type="button" class="btn btn-primary">Postar comentario exemplo 1</button></div><div class="col"><button id="btnex2" type="button" class="btn btn-primary">Postar comentario exemplo 2</button></div><div class="col"><button id="btnex3" type="button" class="btn btn-primary">Postar comentario exemplo 3</button></div></div>')
}


//comentarios exemplos
function addcoment1(post){
    console.log(post.comentarios[0]);
    let comment1 = {
        "comentario": 1,
        "usuario": "Cleber Mendes",
        "conteudo": "Achei muito legal a postagem, aprendi novas coisas"
    };
    if(Object.keys(post.comentarios[0]).length==0){
        console.log('jerson')
        post.comentarios[0]= comment1;
        console.log(post.comentarios)
        
        
    }
    else{
        post.comentarios.push(comment1);
        console.log(post.comentarios)
        
    }
    
}
function addcoment2(post){
    let comment2 =  {
        "comentario": 1,
        "usuario": "Cleyton Roger",
        "conteudo": "Muito ruim essa postagem, achei desrespeitosa e atrasada, gosto do site, mas nesse caso me decepcionei"
    };
    if(Object.keys(post.comentarios[0]).length==0){
        post.comentarios= [comment2];
    }
    else{
        post.comentarios.push(comment2)
    }

}
function addcoment3(post){
    let comment3 = {
        "comentario": 1,
        "usuario": "Serverina Mares",
        "conteudo": "Gostaria que o site postasse mais coisas sobre o dia a dia de neurodivergentes para que pudesse entender mais eles"
    };
    if(Object.keys(post.comentarios[0]).length==0){
        post.comentarios= [comment3];
    }
    else{
        post.comentarios.push(comment3)
    }
}





//mostrar comentarios
function showcomments(post){
    var comentario= "";
    if(Object.keys(post.comentarios[0]).length!=0){
        for(var pa = 0; pa < post.comentarios.length; pa++){
            comentario += `<div class="card mb-3 container-fluid mx-auto p-3"><div class="row g-0"><div class="col-md-8"><div class="card-body"><h5 class="card-title">${post.comentarios[pa].usuario}</h5><p class="card-text">${post.comentarios[pa].conteudo}</p></div></div></div></div>`;
            $("#comentarios").html("<h3>Comentarios:</h3>");
            $("#comentarios").append(comentario);
        }
    }
    else{
        $("#comentarios").html("<h3 class='text-center'>Ninguém comentou nessa postagem ainda :(</h3>");
    }
}
//document ready
$(document).ready(() => {
    
    postagemexemplo();
    //trocar postagens
    var posts = JSON.parse(localStorage.getItem("postagens"));
    
    var index = 0;
    var postagematual = {};
    $("#ex1").on("click",()=>{
        postagematual = (JSON.parse(localStorage.getItem("postagens")))[0];
        addpost(postagematual);
        index = 0;
        showcomments(postagematual);
        recomecar(postagematual,posts,index);
        console.log(posts)
        
    })
    $("#ex2").on("click",()=>{
        postagematual = (JSON.parse(localStorage.getItem("postagens")))[1];
        addpost(postagematual);
        index = 1;
        showcomments(postagematual);
        recomecar(postagematual,posts,index);
    })
    $("#ex3").on("click",()=>{
        postagematual = (JSON.parse(localStorage.getItem("postagens")))[2];
        addpost(postagematual);
        index = 2;
        showcomments(postagematual);
        recomecar(postagematual,posts,index);
    })


    
})
function recomecar(postagematual,posts,index){
    //postar comentarios
    $("#btnex1").on("click",()=>{
        addcoment1(postagematual);
        posts[index]=postagematual;
        localStorage.setItem("postagens",JSON.stringify(posts));
        showcomments(postagematual);
    })
    $("#btnex2").on("click",()=>{
        addcoment2(postagematual);
        posts[index]=postagematual;
        localStorage.setItem("postagens",JSON.stringify(posts));
        console.log(postagematual);

        showcomments(postagematual);

    })
    $("#btnex3").on("click",()=>{
        addcoment3(postagematual);
        posts[index]=postagematual;
        localStorage.setItem("postagens",JSON.stringify(posts));
        showcomments(postagematual);
    })
}








