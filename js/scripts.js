// funcionamiento de botones slider

function moveImage0(){
  document.miFormulario.miCheck0.click()
}

function moveImage1(){
  document.miFormulario.miCheck1.click()
}

function moveImage2(){
  document.miFormulario.miCheck2.click()
}

function moveImage3(){
  document.miFormulario.miCheck3.click()
}

function moveImage4(){
  document.miFormulario.miCheck4.click()
}

// end funcionamiento botones slider


// agregar clase a imaegenes

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
// end agregar clases a imagenes
