// my scripts

// funcionamiento botones paso 1
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


// funcionamiento de botones paso 2
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

// funcionamiento de botones paso 3

// funcionamiento boton compuesto 1 type radio (Escenario)
$( '#re1' ).click(function() {
    if ($(this).is(':checked')){
      $("#check21l").addClass("ro-focus");
      $("#check21r").addClass("ro-focus");
      $("#respas31").removeClass("without");
      $("#respas32").addClass("without");
      $("#respas33").addClass("without");

      // agregando color de fondo al seleccionar
      $("#lre1").addClass("re-focus");
      $("#lre2").removeClass("re-focus");
      $("#lre3").removeClass("re-focus");
    }else{
      $("#lre1").removeClass("re-focus");
      $("#respas31").addClass("without");
      $("#check21l").removeClass("ro-focus");
      $("#check21r").removeClass("ro-focus");
    }
});

$( '#re2' ).click(function() {
    if ($(this).is(':checked')){
      $("#check21l").addClass("ro-focus");
      $("#check21r").addClass("ro-focus");
      $("#respas32").removeClass("without");
      $("#respas31").addClass("without");
      $("#respas33").addClass("without");

      // agregando color de fondo al seleccionar
      $("#lre2").addClass("re-focus");
      $("#lre1").removeClass("re-focus");
      $("#lre3").removeClass("re-focus");
    }else{
      $("#lre2").removeClass("re-focus");
      $("#respas32").addClass("without");
      $("#check21l").removeClass("ro-focus");
      $("#check21r").removeClass("ro-focus");
    }
});

$( '#re3' ).click(function() {
    if ($(this).is(':checked')){
      $("#check21l").addClass("ro-focus");
      $("#check21r").addClass("ro-focus");
      $("#respas33").removeClass("without");
      $("#respas31").addClass("without");
      $("#respas32").addClass("without");

      // agregando color de fondo al seleccionar
      $("#lre3").addClass("re-focus");
      $("#lre1").removeClass("re-focus");
      $("#lre2").removeClass("re-focus");
    }else{
      $("#lre3").removeClass("re-focus");
      $("#respas33").addClass("without");
      $("#check21l").removeClass("ro-focus");
      $("#check21r").removeClass("ro-focus");
    }
});

$( '#check22' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img1paso3").addClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas34").removeClass("without");
    } else {
        $("#img1paso3").removeClass("display_img"); //  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas34").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check23' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img2paso3").addClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas35").removeClass("without");
    } else {
        $("#img2paso3").removeClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas35").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check24' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img3paso3").addClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas36").removeClass("without");
    } else {
        $("#img3paso3").removeClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas36").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

// funcionamiento boton compuesto 2 type radio (Pagoda)
$( '#rp1' ).click(function() {
    if ($(this).is(':checked')){
      $("#check25l").addClass("ro-focus");
      $("#check25r").addClass("ro-focus");
      $("#respas37").removeClass("without");
      $("#respas38").addClass("without");
      $("#respas39").addClass("without");

      // agregando color de fondo al seleccionar
      $("#lrp1").addClass("rp-focus");
      $("#lrp2").removeClass("rp-focus");
      $("#lrp3").removeClass("rp-focus");
    }else{
      $("#lrp1").removeClass("rp-focus");
      $("#respas37").addClass("without");
      $("#check25l").removeClass("ro-focus");
      $("#check25r").removeClass("ro-focus");
    }
});

$( '#rp2' ).click(function() {
    if ($(this).is(':checked')){
      $("#check25l").addClass("ro-focus");
      $("#check25r").addClass("ro-focus");
      $("#respas38").removeClass("without");
      $("#respas37").addClass("without");
      $("#respas39").addClass("without");

      // agregando color de fondo al seleccionar
      $("#lrp2").addClass("rp-focus");
      $("#lrp1").removeClass("rp-focus");
      $("#lrp3").removeClass("rp-focus");
    }else{
      $("#lrp2").removeClass("rp-focus");
      $("#respas38").addClass("without");
      $("#check25l").removeClass("ro-focus");
      $("#check25r").removeClass("ro-focus");
    }
});

$( '#rp3' ).click(function() {
    if ($(this).is(':checked')){
      $("#check25l").addClass("ro-focus");
      $("#check25r").addClass("ro-focus");
      $("#respas39").removeClass("without");
      $("#respas37").addClass("without");
      $("#respas38").addClass("without");

      // agregando color de fondo al seleccionar
      $("#lrp3").addClass("rp-focus");
      $("#lrp1").removeClass("rp-focus");
      $("#lrp2").removeClass("rp-focus");
    }else{
      $("#lrp3").removeClass("rp-focus");
      $("#respas39").addClass("without");
      $("#check25l").removeClass("ro-focus");
      $("#check25r").removeClass("ro-focus");
    }
});

$( '#check26' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img4paso3").addClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas310").removeClass("without");
    } else {
        $("#img4paso3").removeClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas310").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check27' ).click(function() {
    if( $(this).is(':checked') ){
        $("#img5paso3").addClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas311").removeClass("without");
    } else {
        $("#img5paso3").removeClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas311").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check28' ).click(function() {
    if( $(this).is(':checked') ){
        // $("#img6paso3").addClass("display_img"); //  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas312").removeClass("without");
    } else {
        // $("#img6paso3").removeClass("display_img"); // -- esperando por las imagenes de steward para adjuntarlas
        $("#respas312").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check29' ).click(function() {
    if( $(this).is(':checked') ){
        // $("#img1paso2").addClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas313").removeClass("without");
    } else {
        // $("#img1paso2").removeClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas313").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check210' ).click(function() {
    if( $(this).is(':checked') ){
        // $("#img1paso2").addClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas314").removeClass("without");
    } else {
        // $("#img1paso2").removeClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas314").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check211' ).click(function() {
    if( $(this).is(':checked') ){
        // $("#img1paso2").addClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas315").removeClass("without");
    } else {
        // $("#img1paso2").removeClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas315").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

$( '#check212' ).click(function() {
    if( $(this).is(':checked') ){
        // $("#img1paso2").addClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas316").removeClass("without");
    } else {
        // $("#img1paso2").removeClass("display_img");  -- esperando por las imagenes de steward para adjuntarlas
        $("#respas316").addClass("without");
        $("#respaslabel21").addClass("without");
    }
});

// funcinamiento de uncheck para botones radio

var era;

var previo=null;

function uncheckRadio(rbutton){
  if(previo &&previo!=rbutton){previo.era=false;}
    if(rbutton.checked==true && rbutton.era==true){rbutton.checked=false;}
      rbutton.era=rbutton.checked;
      previo=rbutton;
}

// cambio de icono caret up and down
$("#mobile-button").click(function(){
  if($("#mobile-menu").attr("aria-expanded") == "true"){
    $("#icon-up").removeClass("display-off");
    $("#icon-down").addClass("display-off");
  } else {
    $("#icon-up").addClass("display-off");
    $("#icon-down").removeClass("display-off");
  }
});

// script de funcionamiento de imagen top

$(document).ready(function(){
	//capture the position of my figure 3
  var positionFigure = $("#img_paso3").offset().top;
	var heightButtonsThree = $("#buttons3").outerHeight(true);
  heightButtonsThree /= 2;
	//function to add the class figure-fix if the
	//position of nav bar is less than top scroll
	$(window).on("scroll", function(){
		if ( $(window).scrollTop() >= positionFigure ){
			$("#img_paso3").addClass("figure-fix"); // add class menu-fix to nav bar
      $("#buttons3").css("margin-top", (heightButtonsThree) +"px");
      $("buttons3").addClass("padding-25");
      $("#img_base3").css("display", "none");
    }
		else {
			$("#img_paso3").removeClass("figure-fix"); //remove class menu-fix from nav bar
      $("#buttons3").css("margin-top", "0");
      $("buttons3").removeClass("padding-25");
      $("#img_base3").css("display", "block");
    }
		//if ($(window).scrollTop()  )
	});
});

// total

// end my scripts
