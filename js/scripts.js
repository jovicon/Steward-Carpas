/*jslint browser: true*/
/*global $, jQuery, alert*/

//movimiento de formulario con botones
// paso1
$('#anchor1').focus(function(){
  "use strict";
  if ($(this).is(':focus')) {
    $("#form1").addClass("display-form");
    $("#form1").removeClass("hidden-form");
    $("#anchor1").addClass("activeTab");
    $("#form2").addClass("hidden-form");
    $("#form2").removeClass("display-form");
    $("#anchor2").removeClass("activeTab");
    $("#form3").addClass("hidden-form");
    $("#form3").removeClass("display-form");
    $("#anchor3").removeClass("activeTab");
  }
});

// paso2
$('#anchor2').focus(function(){
  "use strict";
  if ($(this).is(':focus')) {
    $("#form1").addClass("hidden-form");
    $("#form1").removeClass("display-form");
    $("#anchor1").removeClass("activeTab");
    $("#form2").addClass("display-form");
    $("#form2").removeClass("hidden-form");
    $("#anchor2").addClass("activeTab");
    $("#form3").addClass("hidden-form");
    $("#form3").removeClass("display-form");
    $("#anchor3").removeClass("activeTab");
  }
});

// paso3
$('#anchor3').focus(function(){
  "use strict";
  if ($(this).is(':focus')) {
    $("#form1").addClass("hidden-form");
    $("#form1").removeClass("display-form");
    $("#anchor1").removeClass("activeTab");
    $("#form2").removeClass("display-form");
    $("#form2").addClass("hidden-form");
    $("#anchor2").removeClass("activeTab");
    $("#form3").addClass("display-form");
    $("#form3").removeClass("hidden-form");
    $("#anchor3").addClass("activeTab");
  }
});

// funcionamiento boton next form1
$('#next1').click(function () {
  "use strict";
  if ($(this).is(':focus')) {
    $("#form1").addClass("hidden-form");
    $("#form1").removeClass("display-form");
    $("#anchor1").removeClass("activeTab");
    $("#form2").addClass("display-form");
    $("#form2").removeClass("hidden-form");
    $("#anchor2").addClass("activeTab");
  }
});

// funcionamiento boton next form2
$('#next2').click(function () {
  "use strict";
  if ($(this).is(':focus')) {
    $("#form2").removeClass("display-form");
    $("#form2").addClass("hidden-form");
    $("#anchor2").removeClass("activeTab");
    $("#form3").addClass("display-form");
    $("#form3").removeClass("hidden-form");
    $("#anchor3").addClass("activeTab");
  }
});

// funcionamiento boton after form2
$('#after').click(function () {
  "use strict";
  if ($(this).is(':focus')) {
    $("#form1").addClass("display-form");
    $("#form1").removeClass("hidden-form")
    $("#form2").addClass("hidden-form");
    $("#form2").removeClass("display-form");
    $("#anchor1").addClass("activeTab");
    $("#anchor2").removeClass("activeTab");

  }
});

// funcionamiento boton after form3
$('#after2').click(function () {
  "use strict";
  if ($(this).is(':focus')) {
    $("#form2").addClass("display-form");
    $("#form2").removeClass("hidden-form");
    $("#anchor2").addClass("activeTab");
    $("#form3").addClass("hidden-form");
    $("#form3").removeClass("display-form");
    $("#anchor3").removeClass("activeTab");
  }
});

// end movimiento de formulario con botones

// movimiento de imagenes con botones

// movimiento de paso 2

$( '#checkbox01' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img01").addClass("display_img");
    } else {
        $("#img01").removeClass("display_img");
    }
});

$( '#checkbox02' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img02").addClass("display_img");
    } else {
        $("#img02").removeClass("display_img");
    }
});

$( '#checkbox03' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img03").addClass("display_img");
    } else {
        $("#img03").removeClass("display_img");
    }
});

$( '#checkbox04' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img04").addClass("display_img");
    } else {
        $("#img04").removeClass("display_img");
    }
});

$( '#checkbox05' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img05").addClass("display_img");
    } else {
        $("#img05").removeClass("display_img");
    }
});

$( '#checkbox06' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img06").addClass("display_img");
    } else {
        $("#img06").removeClass("display_img");
    }
});
// end agregar clases a imagenes paso 2

// agregar clase a imaegenes paso 3

$( '#checkbox07' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img07").addClass("display_img");
    } else {
        $("#img07").removeClass("display_img");
    }
});

$( '#checkbox08' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img08").addClass("display_img");
    } else {
        $("#img08").removeClass("display_img");
    }
});

$( '#checkbox09' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img09").addClass("display_img");
    } else {
        $("#img09").removeClass("display_img");
    }
});

$( '#checkbox10' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img10").addClass("display_img");
    } else {
        $("#img10").removeClass("display_img");
    }
});

$( '#checkbox11' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img11").addClass("display_img");
    } else {
        $("#img11").removeClass("display_img");
    }
});

$( '#checkbox12' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img12").addClass("display_img");
    } else {
        $("#img12").removeClass("display_img");
    }
});
// end agregar clases a imagenes paso 3

// end movimiento de imagenes con botones
