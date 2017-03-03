// funcionamiento botones paso 1

$( "#radio01" ).click(function() {
    if( $(".my_form input[name='formato']:radio").is(':checked') ){
        $("#boton01").addClass("back-img-paso1");
        $("#boton03").removeClass("back-img-paso1");
        $("#boton02").removeClass("back-img-paso1");
    }
});

$( '#radio02' ).click(function() {
    if( $(this).is(':checked') ){
        $("#boton02").addClass("back-img-paso1");
        $("#boton03").removeClass("back-img-paso1");
        $("#boton01").removeClass("back-img-paso1");
    }
});

$( '#radio03' ).click(function() {
    if( $(this).is(':checked') ){
        $("#boton03").addClass("back-img-paso1");
        $("#boton02").removeClass("back-img-paso1");
        $("#boton01").removeClass("back-img-paso1");
    }
});

function moveImage01(){
  document.miFormulario1.miRadio0.click();
}

function moveImage02(){
  document.miFormulario1.miRadio1.click();
}

function moveImage03(){
  document.miFormulario1.miRadio2.click();
}



// end funcionamiento botones paso 1


// agregar clase a imaegenes paso 2

$( '#checkbox01' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img01").addClass("img_hidden");
    } else {
        $("#img01").removeClass("img_hidden");
    }
});

$( '#checkbox02' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img02").addClass("img_hidden");
    } else {
        $("#img02").removeClass("img_hidden");
    }
});

$( '#checkbox03' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img03").addClass("img_hidden");
    } else {
        $("#img03").removeClass("img_hidden");
    }
});

$( '#checkbox04' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img04").addClass("img_hidden");
    } else {
        $("#img04").removeClass("img_hidden");
    }
});

$( '#checkbox05' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img05").addClass("img_hidden");
    } else {
        $("#img05").removeClass("img_hidden");
    }
});

$( '#checkbox06' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img06").addClass("img_hidden");
    } else {
        $("#img06").removeClass("img_hidden");
    }
});
// end agregar clases a imagenes paso 2

// funcionamiento de botones slider paso 3

function moveImage0(){
  document.miFormulario.miCheck0.click();
}

function moveImage1(){
  document.miFormulario.miCheck1.click();
}

function moveImage2(){
  document.miFormulario.miCheck2.click();
}

function moveImage3(){
  document.miFormulario.miCheck3.click();
}

function moveImage4(){
  document.miFormulario.miCheck4.click();
};

// end funcionamiento botones slider paso 3
