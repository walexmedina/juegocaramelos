function inicio () {
	control = setInterval(cronometro,10);

}
function parar () {
	clearInterval(control);

}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	segundosjuego = 0;
	minutos = 0;
	horas = 0;
	timer.innerHTML = "00:00";

}
function cronometro () {

 if (segundosjuego < 120)
 {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		segundosjuego ++;
		if (segundos < 10) { segundos = "0"+segundos }
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
	}
		vertiempo = minutos + ":" + segundos;
		timer.innerHTML = vertiempo;
 }
 else
 {
 	parar();
    $(".panel-score").animate({width:"100%"},2000);
    $(".panel-tablero").hide("slow");

 }
}
