// my scripts

// paso 1
$( '#personas1' ).click(function() {
    if( $(this).is(':focus') ){
        $("#numeroresu").removeClass("without");
    } else {

    }
});

$(document).ready(function () {
    $("#personas1").keyup(function () {
        var value = $(this).val();
        $("#personas2").val(value);
    });
});

$("#r1").click(function(){
  if ($(this).is(':checked')){
    $("#r1-img").addClass("r-focus");
    $("#r2-img").removeClass("r-focus");
    $("#r3-img").removeClass("r-focus");
    $("#respas11").removeClass("without");
    $("#respas12").addClass("without");
    $("#respas13").addClass("without");
    $("#respaslabel11").removeClass("without");
    $("#respaslabel12").addClass("without");
    $("#respaslabel13").addClass("without");
  }
});

$("#r2").click(function(){
  if ($(this).is(':checked')){
    $("#r1-img").removeClass("r-focus");
    $("#r2-img").addClass("r-focus");
    $("#r3-img").removeClass("r-focus");
    $("#respas12").removeClass("without");
    $("#respas11").addClass("without");
    $("#respas13").addClass("without");
    $("#respaslabel11").addClass("without");
    $("#respaslabel12").removeClass("without");
    $("#respaslabel13").addClass("without");
  }
});

$("#r3").click(function(){
  if ($(this).is(':checked')){
    $("#r1-img").removeClass("r-focus");
    $("#r2-img").removeClass("r-focus");
    $("#r3-img").addClass("r-focus");
    $("#respas13").removeClass("without");
    $("#respas11").addClass("without");
    $("#respas12").addClass("without");
    $("#respaslabel11").addClass("without");
    $("#respaslabel12").addClass("without");
    $("#respaslabel13").removeClass("without");
  }
});


// paso 2

$( '#check11' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img1paso2").addClass("display_img");
        $("#respas21").removeClass("without");
        $("#respaslabel21").removeClass("without");
    } else {
        $("#img1paso2").removeClass("display_img");
        $("#respas21").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check12' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img2paso2").addClass("display_img");
        $("#respas22").removeClass("without");
        $("#respaslabel22").removeClass("without");
    } else {
        $("#img2paso2").removeClass("display_img");
        $("#respas22").addClass("without");
        $("#respaslabel22").addClass("without");
    }
});

$( '#check13' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img3paso2").addClass("display_img");
        $("#respas23").removeClass("without");
        $("#respaslabel23").removeClass("without");
    } else {
        $("#img3paso2").removeClass("display_img");
        $("#respas23").addClass("without");
        $("#respaslabel23").addClass("without");
    }
});

$( '#check14' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img4paso2").addClass("display_img");
        $("#respas24").removeClass("without");
        $("#respaslabel24").removeClass("without");
    } else {
        $("#img4paso2").removeClass("display_img");
        $("#respas24").addClass("without");
        $("#respaslabel24").addClass("without");
    }
});

$( '#check15' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img5paso2").addClass("display_img");
        $("#respas25").removeClass("without");
        $("#respaslabel25").removeClass("without");
    } else {
        $("#img5paso2").removeClass("display_img");
        $("#respas25").addClass("without");
        $("#respaslabel25").addClass("without");
    }
});

//total

function sumar (valor) {
    var total = 0;
    valor = parseInt(valor); // Convertir el valor a un entero (número).

    total = document.getElementById('spTotal').innerHTML;

    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;

    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));

    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal').innerHTML = total;
}

// end my scripts
