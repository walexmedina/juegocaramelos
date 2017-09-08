var numeroClicks = 0;
var puntaje = 0;
var centesimas = 0;
var segundos = 0;
var segundosjuego = 0;
var minutos = 0;
var horas = 0;
var a = 0;
var b = 0;
var c = 0;
var control;
var comparar_a = "";
var comparar_b = "";
var comparar_c = "";

$(".elemento").css("display", "none");

$(function(){

  $(".lista").sortable({
    placeholder: "nuevo"
  })

  setInterval(function()
  {
    $(".main-titulo").animate( { color: 'yellow' }, 300)
    .animate( { color: 'white' }, 300); 
  }, 1000);

  $("#activarJuego").click(function()
  {
    parar();
    $(".elemento").css("display", "block");

    if ($('button').text() == "Reiniciar")
    {
      location.reload();
    }

    $("#activarJuego").text("Reiniciar");
    $("#movimientos-text").text(0);
    $("#score-text").text(0);
    $("#timer").text("00:00");

    var imagenestotal = ['1.png', '2.png', '3.png', '4.png'];
    inicio();

    for(x=1;x<8;x++)
    {
      for(y=1;y<8;y++)
      {
        var imagenes = "image/" + (imagenestotal[Math.floor(Math.random() * imagenestotal.length)]);
        $("#imagen" + x + y).attr("src",imagenes);
      } 
    } 
  });



  $(".contenido").mouseup(function ()
  {


    numeroClicks = numeroClicks + 1;
    $("#movimientos-text").text(numeroClicks);

    for(xz=1;xz<8;xz++)
    {
      for(yz=1;yz<8;yz++)
      {
        b = xz + 1;
        c = b + 1;

        var $queimagen_a = $("#imagen" + xz + yz);
        var src_imagen_a = $queimagen_a.attr("src");

        var $queimagen_b = $("#imagen" + b + yz);
        var src_imagen_b = $queimagen_b.attr("src");
        var $queimagen_c = $("#imagen" + c + yz);
        var src_imagen_c = $queimagen_c.attr("src");

        if (src_imagen_a == src_imagen_b && src_imagen_b == src_imagen_c)
        {
          for(parpadeo=0; parpadeo<4; parpadeo++)
          {

            puntaje = puntaje + 10;
            $("#score-text").text(puntaje);

            $($queimagen_a).fadeTo(500, .1).fadeTo(500, 1);
            $($queimagen_b).fadeTo(500, .1).fadeTo(500, 1);
            $($queimagen_c).fadeTo(500, .1).fadeTo(500, 1);
          }


        }


      }
    }


  });

})
