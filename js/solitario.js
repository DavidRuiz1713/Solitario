/***** INICIO DECLARACIÓN DE VARIABLES GLOBALES *****/
alert('Buena Suerte');

// cartas DR


//var inicial = document.getElementById("inicial");
//var sobrantes = document.getElementById('sobrantes');

let carta, cont, info, l;

l = 2;

//

// Array de palos
let palos = ["viu", "cua", "hex", "cir"];
// Array de número de cartas
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// En las pruebas iniciales solo se trabajará con cuatro cartas por palo:
//let numeros = [9, 10, 11, 12];

// paso (top y left) en pixeles de una carta a la siguiente en un mazo
let paso = 5;

// Tapetes				
let tapete_inicial = document.getElementById("inicial");
let tapete_inicial_mazos = document.getElementById("inicial_mazos");
let tapete_sobrantes = document.getElementById("sobrantes");
let tapete_receptor1 = document.getElementById("receptor1");
let tapete_receptor2 = document.getElementById("receptor2");
let tapete_receptor3 = document.getElementById("receptor3");
let tapete_receptor4 = document.getElementById("receptor4");

// Mazos
let mazo_inicial = [];
let mazo_sobrantes = [];
let mazo_receptor1 = [];
let mazo_receptor2 = [];
let mazo_receptor3 = [];
let mazo_receptor4 = [];

// Contadores de cartas
let contador_inicial = document.getElementById("contador_inicial");
let cont_sobrantes = document.getElementById("cont_sobrantes");
let cont_receptor1 = document.getElementById("cont_receptor1");
let cont_receptor2 = document.getElementById("cont_receptor2");
let cont_receptor3 = document.getElementById("cont_receptor3");
let cont_receptor4 = document.getElementById("cont_receptor4");
let cont_movimientos = document.getElementById("cont_movimientos");

// Tiempo
let cont_tiempo = document.getElementById("cont_tiempo"); // span cuenta tiempo
let segundos = 0; // cuenta de segundos
let temporizador = null; // manejador del temporizador

/***** FIN DECLARACIÓN DE VARIABLES GLOBALES *****/




// Rutina asociada a boton reset: comenzar_juego


// El juego arranca ya al cargar la página: no se espera a reiniciar
/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! **/


var mazo_viu = ["imagenes/baraja/1-viu.png",
    "imagenes/baraja/2-viu.png",
    "imagenes/baraja/3-viu.png",
    "imagenes/baraja/4-viu.png",
    "imagenes/baraja/5-viu.png",
    "imagenes/baraja/6-viu.png",
    "imagenes/baraja/7-viu.png",
    "imagenes/baraja/8-viu.png",
    "imagenes/baraja/9-viu.png",
    "imagenes/baraja/10-viu.png",
    "imagenes/baraja/11-viu.png",
    "imagenes/baraja/12-viu.png",

];

var mazo_cua = [
    "imagenes/baraja/1-cua.png",
    "imagenes/baraja/2-cua.png",
    "imagenes/baraja/3-cua.png",
    "imagenes/baraja/4-cua.png",
    "imagenes/baraja/5-cua.png",
    "imagenes/baraja/6-cua.png",
    "imagenes/baraja/7-cua.png",
    "imagenes/baraja/8-cua.png",
    "imagenes/baraja/9-cua.png",
    "imagenes/baraja/10-cua.png",
    "imagenes/baraja/11-cua.png",
    "imagenes/baraja/12-cua.png",


];
var mazo_hex = [
    "imagenes/baraja/1-hex.png",
    "imagenes/baraja/2-hex.png",
    "imagenes/baraja/3-hex.png",
    "imagenes/baraja/4-hex.png",
    "imagenes/baraja/5-hex.png",
    "imagenes/baraja/6-hex.png",
    "imagenes/baraja/7-hex.png",
    "imagenes/baraja/8-hex.png",
    "imagenes/baraja/9-hex.png",
    "imagenes/baraja/10-hex.png",
    "imagenes/baraja/11-hex.png",
    "imagenes/baraja/12-hex.png",
];
var mazo_cir = ["imagenes/baraja/1-cir.png",
    "imagenes/baraja/2-cir.png",
    "imagenes/baraja/3-cir.png",
    "imagenes/baraja/4-cir.png",
    "imagenes/baraja/5-cir.png",
    "imagenes/baraja/6-cir.png",
    "imagenes/baraja/7-cir.png",
    "imagenes/baraja/8-cir.png",
    "imagenes/baraja/9-cir.png",
    "imagenes/baraja/10-cir.png",
    "imagenes/baraja/11-cir.png",
    "imagenes/baraja/12-cir.png",
];



comenzar_juego();


// Desarrollo del comienzo de juego
function comenzar_juego() {
    /* Crear baraja, es decir crear el mazo_inicial. Este será un array cuyos 
    elementos serán elementos HTML <img>, siendo cada uno de ellos una carta.
    Sugerencia: en dos bucles for, bárranse los "palos" y los "numeros", formando
    oportunamente el nombre del fichero png que contiene a la carta (recuérdese poner
    el path correcto en la URL asociada al atributo src de <img>). Una vez creado
    el elemento img, inclúyase como elemento del array mazo_inicial. 
    */

    /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! **/


    for (cont = 0; cont < mazo_viu.length; cont++) {

        tapete_inicial_mazos.innerHTML += "<img class = 'cua' style='margin-top:" + l + "px" + ";" + "margin-left:" + 5 +
            "px" + "'" + "src='" + mazo_viu[cont] + "'" + " > "
        l = l + 4;
        mazo_inicial.push((cont + 1) + "-" + palos[0]);
        console.log(mazo_inicial);
    }


    for (cont = 0; cont < mazo_cua.length; cont++) {

        tapete_inicial_mazos.innerHTML += "<img class = 'cua' style='margin-top:" + l + "px" + ";" + "margin-left:" + 45 +
            "px" + "'" + "src='" + mazo_cua[cont] + "'" + "draggable='true'" + "id =" + palos[1] + (cont + 1) + "'" + " > "
        l = l + 4;
        mazo_inicial.push((cont + 1) + "-" + palos[1]);
        console.log(mazo_inicial);
    }

    for (cont = 0; cont < mazo_hex.length; cont++) {

        tapete_inicial_mazos.innerHTML += "<img class = 'cua' style='margin-top:" + l + "px" + ";" + "margin-left:" + 90 +
            "px" + "'" + "src='" + mazo_hex[cont] + "'" + "draggable='true'" + "id =" + palos[2] + (cont + 1) + "'" + " > "
        l = l + 4;
        mazo_inicial.push((cont + 1) + "-" + palos[2]);
        console.log(mazo_inicial);
    }

    for (cont = 0; cont < mazo_cir.length; cont++) {

        tapete_inicial_mazos.innerHTML += "<img class = 'cua' style='margin-top:" + l + "px" + ";" + "margin-left:" + 135 +
            "px" + "'" + "src='" + mazo_cir[cont] + "'" + "draggable='true'" + "id =" + palos[3] + (cont + 1) + "'" + " > "
        l = l + 4;
        mazo_inicial.push((cont + 1) + "-" + palos[3]);
        console.log(mazo_inicial);
    }










    // Barajar


    // Dejar mazo_inicial en tapete inicial
    cargar_tapete_inicial();

    // Puesta a cero de contadores de mazos
    set_contador_inicial();

    set_contador(cont_sobrantes, 0);
    set_contador(cont_receptor1, 0);
    set_contador(cont_receptor2, 0);
    set_contador(cont_receptor3, 0);
    set_contador(cont_receptor4, 0);
    set_contador(cont_movimientos, 0);

    // Arrancar el conteo de tiempo
    arrancar_tiempo();

} // comenzar_juego


/**
	Se debe encargar de arrancar el temporizador: cada 1000 ms se
	debe ejecutar una función que a partir de la cuenta autoincrementada
	de los segundos (segundos totales) visualice el tiempo oportunamente con el 
	format hh:mm:ss en el contador adecuado.

	Para descomponer los segundos en horas, minutos y segundos pueden emplearse
	las siguientes igualdades:

	segundos = truncar (   segundos_totales % (60)                 )
	minutos  = truncar ( ( segundos_totales % (60*60) )     / 60   )
	horas    = truncar ( ( segundos_totales % (60*60*24)) ) / 3600 )

	donde % denota la operación módulo (resto de la división entre los operadores)

	Así, por ejemplo, si la cuenta de segundos totales es de 134 s, entonces será:
	   00:02:14

	Como existe la posibilidad de "resetear" el juego en cualquier momento, hay que 
	evitar que exista más de un temporizador simultáneo, por lo que debería guardarse
	el resultado de la llamada a setInterval en alguna variable para llamar oportunamente
	a clearInterval en su caso.   
*/

function arrancar_tiempo() {
    /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! **/
    let tiempoRef = Date.now()
    let temporizador = false;
    let acu = 0;

    setInterval(() => {
        let tiempo1 = document.getElementById("contador_tiempo");
        if (temporizador) {
            acu = Date.now() - tiempoRef;
        }

        tiempo1.innerHTML = hms(acu);
    }, 1000 / 60)


    let hms = function(segundos) {
        let ms = segundos % 1000
        let seg = Math.trunc(((segundos - ms) / 1000) % 60)
        let min = Math.trunc((seg / 60) % 60);
        let hor = Math.trunc((min / 60));

        Number.prototype.ceros = function(n) {
            return (this + "").padStart(n, 0)
        }
        return hor.ceros(2) + ":" + min.ceros(2) + ":" + seg.ceros(2)
            /*  let tiempo = ((hor < 10) ? "0" + hor : "" + hor) +
            ":" + ((min < 10) ? "0" + min : "" + min) +
            ":" + ((seg < 10) ? "0" + seg : "" + seg);
        set_contador(cont_tiempo, tiempo);
        segundos++;
*/
    }
    segundos = 0;
    hms(); // Primera visualización 00:00:00
    temporizador = setInterval(hms, 1000);



} // arrancar_tiempo


/**
	Si mazo es un array de elementos <img>, en esta rutina debe ser
	reordenado aleatoriamente. Al ser un array un objeto, se pasa
	por referencia, de modo que si se altera el orden de dicho array
	dentro de la rutina, esto aparecerá reflejado fuera de la misma.
	Para reordenar el array puede emplearse el siguiente pseudo código:

	- Recorramos con i todos los elementos del array
		- Sea j un indice cuyo valor sea un número aleatorio comprendido 
			entre 0 y la longitud del array menos uno. Este valor aleatorio
			puede conseguirse, por ejemplo con la instrucción JavaScript
				Math.floor( Math.random() * LONGITUD_DEL_ARRAY );
		- Se intercambia el contenido de la posición i-ésima con el de la j-ésima

*/
function barajar(mazo) {
    /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! **/
    mazo.sort(function() { return Math.random() - 0.5 });

} // barajar

function barajar1(mazo) {
    var currentIndex = mazo.length,
        temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

        // Seleccionar un elemento sin mezclar...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // E intercambiarlo con el elemento actual
        temporaryValue = mazo[currentIndex];
        mazo[currentIndex] = mazo[randomIndex];
        mazo[randomIndex] = temporaryValue;
        console.log(mazo);
    }

    return mazo;

}


/**
 	En el elemento HTML que representa el tapete inicial (variable tapete_inicial)
	se deben añadir como hijos todos los elementos <img> del array mazo.
	Antes de añadirlos, se deberían fijar propiedades como la anchura, la posición,
	coordenadas top y left, algun atributo de tipo data-...
	Al final se debe ajustar el contador de cartas a la cantidad oportuna
*/
function cargar_tapete_inicial() {
    /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! **/



    if (mazo_inicial.length != 0) {
        var l = 1;
        barajar1(mazo_inicial);
        for (cont = 0; cont < mazo_inicial.length; cont++) {
            tapete_inicial.innerHTML += "<img class = 'inicial' style='margin-top:" + l + "px" + ";" + "margin-left:" + l + "px" +
                "'" + "src='" + "imagenes/baraja/" + mazo_inicial[cont] + ".png" + "'" + "draggable='true'" + "id =" + mazo_inicial[cont] + "'" + " >"
            l = l + 5;
        }
    } else {
        console.log("Error")
    }


} // cargar_tapete_inicial


/**
 	Esta función debe incrementar el número correspondiente al contenido textual
   	del elemento que actúa de contador
*/
var n = 0;

function inc_contador(contador) {
    n = (n + 1);
    contador.innerHTML = n;
} // inc_contador

/**
	Idem que anterior, pero decrementando 
*/
function dec_contador(contador) {
    /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
} // dec_contador

/**
	Similar a las anteriores, pero ajustando la cuenta al
	valor especificado
*/

function set_contador_inicial() {
    //var contador = document.createTextNode(inicial.childElementCount - 1);
    //  document.getElementById("contador_inicial").appendChild(contador);
    let contador_inicial = document.getElementById("contador_inicial");
    contador_inicial.innerHTML = `<h5>` + (tapete_inicial.childElementCount - 1) + `</h5>`
}

function set_contador(contador, valor) {
    /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! **/

} // set_contador

inicial.addEventListener("dragstart", (ev) => drag(ev));
tapete_sobrantes.addEventListener("dragover", (ev) => allowDrop(ev))
tapete_sobrantes.addEventListener("drop", (ev) => drop(ev))

tapete_receptor1.addEventListener("dragover", (ev) => allowDropR1(ev))
tapete_receptor1.addEventListener("drop", (ev) => dropR1(ev))

tapete_receptor2.addEventListener("dragover", (ev) => allowDropR2(ev))
tapete_receptor2.addEventListener("drop", (ev) => dropR2(ev))

tapete_receptor3.addEventListener("dragover", (ev) => allowDropR3(ev))
tapete_receptor3.addEventListener("drop", (ev) => dropR3(ev))

tapete_receptor4.addEventListener("dragover", (ev) => allowDropR4(ev))
tapete_receptor4.addEventListener("drop", (ev) => dropR4(ev))


function drag(ev) {
    ev.dataTransfer.setData("carta", ev.target.id);
    carta = ev.target.id;
    console.log(carta);

}

function allowDrop(ev) {
    console.log(carta);
    console.log("arrastrando");
    ev.preventDefault();

}

function allowDropR1(ev) {
    var ultimo = null;
    console.log(carta);
    console.log("arrastrando a r1");
    ev.preventDefault();
    ultimo = mazo_receptor1[mazo_receptor1.length - 1];
    console.log("u = " + ultimo);
}


function allowDropR2(ev) {

    console.log(carta);
    console.log("arrastrando a r2");
    ev.preventDefault();
    ultimo = mazo_receptor2[mazo_receptor2.length - 1];
    console.log("u = " + ultimo);
}

function allowDropR3(ev) {

    console.log(carta);
    console.log("arrastrando a r3");
    ev.preventDefault();
    ultimo = mazo_receptor3[mazo_receptor3.length - 1];
    console.log("u = " + ultimo);
}

function allowDropR4(ev) {

    console.log(carta);
    console.log("arrastrando a r4");
    ev.preventDefault();
    ultimo = mazo_receptor4[mazo_receptor4.length - 1];
    console.log("u = " + ultimo);
}


function drop(ev) {
    ev.preventDefault;
    set_contador_inicial();
    var data = ev.dataTransfer.getData("carta");
    tapete_sobrantes.appendChild(document.getElementById(data));
    console.log(" Sobrantes : " + (tapete_receptor1.childElementCount - 1));

    let contador_sobrantes = document.getElementById("contador_sobrantes");
    contador_sobrantes.innerHTML = `<h5>` + (sobrantes.childElementCount - 1) + `</h5>`
    inc_contador(contador_movimientos);
}

/*  var data = ev.dataTransfer.getData("carta");
          tapete_receptor1.appendChild(document.getElementById(data));
          console.log(" Receptor 1: " + (tapete_receptor1.childElementCount - 1));
          mazo_receptor1.push(ev.target.id);
          console.log(mazo_receptor1);
          let contador_receptor1 = document.getElementById("contador_receptor1");
          contador_receptor1.innerHTML = `<h5>` + (contador_receptor1.childElementCount + 1) + `</h5>`*/

function dropR1(ev) {
    ev.preventDefault;
    set_contador_inicial();


    if (!mazo_receptor1.length && (carta == "12-viu'" || carta == "12-cua'" || carta == "12-hex'" || carta == "12-cir'")) {
        dropR1f(ev);

    }


    if (((ultimo == "12-viu'" || ultimo == "12-cua'") && (carta == "11-hex'" || carta == "11-cir'")) ||
        ((ultimo == "12-hex'" || ultimo == "12-cir'") && (carta == "11-viu'" || carta == "11-cua'"))) {

        dropR1f(ev);

    }

    if (((ultimo == "11-viu'" || ultimo == "11-cua'") && (carta == "10-hex'" || carta == "10-cir'")) ||
        ((ultimo == "11-hex'" || ultimo == "11-cir'") && (carta == "10-viu'" || carta == "10-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "10-viu'" || ultimo == "10-cua'") && (carta == "9-hex'" || carta == "9-cir'")) ||
        ((ultimo == "10-hex'" || ultimo == "10-cir'") && (carta == "9-viu'" || carta == "9-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "9-viu'" || ultimo == "9-cua'") && (carta == "8-hex'" || carta == "8-cir'")) ||
        ((ultimo == "9-hex'" || ultimo == "9-cir'") && (carta == "8-viu'" || carta == "8-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "8-viu'" || ultimo == "8-cua'") && (carta == "7-hex'" || carta == "7-cir'")) ||
        ((ultimo == "8-hex'" || ultimo == "8-cir'") && (carta == "7-viu'" || carta == "7-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "7-viu'" || ultimo == "7-cua'") && (carta == "6-hex'" || carta == "6-cir'")) ||
        ((ultimo == "7-hex'" || ultimo == "7-cir'") && (carta == "6-viu'" || carta == "6-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "6-viu'" || ultimo == "6-cua'") && (carta == "5-hex'" || carta == "5-cir'")) ||
        ((ultimo == "6-hex'" || ultimo == "6-cir'") && (carta == "5-viu'" || carta == "5-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "5-viu'" || ultimo == "5-cua'") && (carta == "4-hex'" || carta == "4-cir'")) ||
        ((ultimo == "5-hex'" || ultimo == "5-cir'") && (carta == "4-viu'" || carta == "4-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "4-viu'" || ultimo == "4-cua'") && (carta == "3-hex'" || carta == "3-cir'")) ||
        ((ultimo == "4-hex'" || ultimo == "4-cir'") && (carta == "3-viu'" || carta == "3-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "3-viu'" || ultimo == "3-cua'") && (carta == "2-hex'" || carta == "2-cir'")) ||
        ((ultimo == "3-hex'" || ultimo == "3-cir'") && (carta == "2-viu'" || carta == "2-cua'"))) {

        dropR1f(ev);


    }
    if (((ultimo == "2-viu'" || ultimo == "2-cua'") && (carta == "1-hex'" || carta == "1-cir'")) ||
        ((ultimo == "2-hex'" || ultimo == "2-cir'") && (carta == "1-viu'" || carta == "1-cua'"))) {

        dropR1f(ev);


    } else {
        console.log('error');
    }



}

function dropR2(ev) {
    ev.preventDefault;
    set_contador_inicial();


    if (!mazo_receptor1.length && (carta == "12-viu'" || carta == "12-cua'" || carta == "12-hex'" || carta == "12-cir'")) {
        dropR2f(ev);

    }


    if (((ultimo == "12-viu'" || ultimo == "12-cua'") && (carta == "11-hex'" || carta == "11-cir'")) ||
        ((ultimo == "12-hex'" || ultimo == "12-cir'") && (carta == "11-viu'" || carta == "11-cua'"))) {

        dropR2f(ev);

    }

    if (((ultimo == "11-viu'" || ultimo == "11-cua'") && (carta == "10-hex'" || carta == "10-cir'")) ||
        ((ultimo == "11-hex'" || ultimo == "11-cir'") && (carta == "10-viu'" || carta == "10-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "10-viu'" || ultimo == "10-cua'") && (carta == "9-hex'" || carta == "9-cir'")) ||
        ((ultimo == "10-hex'" || ultimo == "10-cir'") && (carta == "9-viu'" || carta == "9-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "9-viu'" || ultimo == "9-cua'") && (carta == "8-hex'" || carta == "8-cir'")) ||
        ((ultimo == "9-hex'" || ultimo == "9-cir'") && (carta == "8-viu'" || carta == "8-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "8-viu'" || ultimo == "8-cua'") && (carta == "7-hex'" || carta == "7-cir'")) ||
        ((ultimo == "8-hex'" || ultimo == "8-cir'") && (carta == "7-viu'" || carta == "7-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "7-viu'" || ultimo == "7-cua'") && (carta == "6-hex'" || carta == "6-cir'")) ||
        ((ultimo == "7-hex'" || ultimo == "7-cir'") && (carta == "6-viu'" || carta == "6-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "6-viu'" || ultimo == "6-cua'") && (carta == "5-hex'" || carta == "5-cir'")) ||
        ((ultimo == "6-hex'" || ultimo == "6-cir'") && (carta == "5-viu'" || carta == "5-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "5-viu'" || ultimo == "5-cua'") && (carta == "4-hex'" || carta == "4-cir'")) ||
        ((ultimo == "5-hex'" || ultimo == "5-cir'") && (carta == "4-viu'" || carta == "4-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "4-viu'" || ultimo == "4-cua'") && (carta == "3-hex'" || carta == "3-cir'")) ||
        ((ultimo == "4-hex'" || ultimo == "4-cir'") && (carta == "3-viu'" || carta == "3-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "3-viu'" || ultimo == "3-cua'") && (carta == "2-hex'" || carta == "2-cir'")) ||
        ((ultimo == "3-hex'" || ultimo == "3-cir'") && (carta == "2-viu'" || carta == "2-cua'"))) {

        dropR2f(ev);


    }
    if (((ultimo == "2-viu'" || ultimo == "2-cua'") && (carta == "1-hex'" || carta == "1-cir'")) ||
        ((ultimo == "2-hex'" || ultimo == "2-cir'") && (carta == "1-viu'" || carta == "1-cua'"))) {

        dropR2f(ev);


    } else {
        console.log('error');
    }



}


function dropR3(ev) {
    ev.preventDefault;
    set_contador_inicial();


    if (!mazo_receptor1.length && (carta == "12-viu'" || carta == "12-cua'" || carta == "12-hex'" || carta == "12-cir'")) {
        dropR3f(ev);

    }


    if (((ultimo == "12-viu'" || ultimo == "12-cua'") && (carta == "11-hex'" || carta == "11-cir'")) ||
        ((ultimo == "12-hex'" || ultimo == "12-cir'") && (carta == "11-viu'" || carta == "11-cua'"))) {

        dropR3f(ev);

    }

    if (((ultimo == "11-viu'" || ultimo == "11-cua'") && (carta == "10-hex'" || carta == "10-cir'")) ||
        ((ultimo == "11-hex'" || ultimo == "11-cir'") && (carta == "10-viu'" || carta == "10-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "10-viu'" || ultimo == "10-cua'") && (carta == "9-hex'" || carta == "9-cir'")) ||
        ((ultimo == "10-hex'" || ultimo == "10-cir'") && (carta == "9-viu'" || carta == "9-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "9-viu'" || ultimo == "9-cua'") && (carta == "8-hex'" || carta == "8-cir'")) ||
        ((ultimo == "9-hex'" || ultimo == "9-cir'") && (carta == "8-viu'" || carta == "8-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "8-viu'" || ultimo == "8-cua'") && (carta == "7-hex'" || carta == "7-cir'")) ||
        ((ultimo == "8-hex'" || ultimo == "8-cir'") && (carta == "7-viu'" || carta == "7-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "7-viu'" || ultimo == "7-cua'") && (carta == "6-hex'" || carta == "6-cir'")) ||
        ((ultimo == "7-hex'" || ultimo == "7-cir'") && (carta == "6-viu'" || carta == "6-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "6-viu'" || ultimo == "6-cua'") && (carta == "5-hex'" || carta == "5-cir'")) ||
        ((ultimo == "6-hex'" || ultimo == "6-cir'") && (carta == "5-viu'" || carta == "5-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "5-viu'" || ultimo == "5-cua'") && (carta == "4-hex'" || carta == "4-cir'")) ||
        ((ultimo == "5-hex'" || ultimo == "5-cir'") && (carta == "4-viu'" || carta == "4-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "4-viu'" || ultimo == "4-cua'") && (carta == "3-hex'" || carta == "3-cir'")) ||
        ((ultimo == "4-hex'" || ultimo == "4-cir'") && (carta == "3-viu'" || carta == "3-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "3-viu'" || ultimo == "3-cua'") && (carta == "2-hex'" || carta == "2-cir'")) ||
        ((ultimo == "3-hex'" || ultimo == "3-cir'") && (carta == "2-viu'" || carta == "2-cua'"))) {

        dropR3f(ev);


    }
    if (((ultimo == "2-viu'" || ultimo == "2-cua'") && (carta == "1-hex'" || carta == "1-cir'")) ||
        ((ultimo == "2-hex'" || ultimo == "2-cir'") && (carta == "1-viu'" || carta == "1-cua'"))) {

        dropR3f(ev);


    } else {
        console.log('error');
    }



}


function dropR4(ev) {
    ev.preventDefault;
    set_contador_inicial();


    if (!mazo_receptor1.length && (carta == "12-viu'" || carta == "12-cua'" || carta == "12-hex'" || carta == "12-cir'")) {
        dropR4f(ev);

    }


    if (((ultimo == "12-viu'" || ultimo == "12-cua'") && (carta == "11-hex'" || carta == "11-cir'")) ||
        ((ultimo == "12-hex'" || ultimo == "12-cir'") && (carta == "11-viu'" || carta == "11-cua'"))) {

        dropR4f(ev);

    }

    if (((ultimo == "11-viu'" || ultimo == "11-cua'") && (carta == "10-hex'" || carta == "10-cir'")) ||
        ((ultimo == "11-hex'" || ultimo == "11-cir'") && (carta == "10-viu'" || carta == "10-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "10-viu'" || ultimo == "10-cua'") && (carta == "9-hex'" || carta == "9-cir'")) ||
        ((ultimo == "10-hex'" || ultimo == "10-cir'") && (carta == "9-viu'" || carta == "9-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "9-viu'" || ultimo == "9-cua'") && (carta == "8-hex'" || carta == "8-cir'")) ||
        ((ultimo == "9-hex'" || ultimo == "9-cir'") && (carta == "8-viu'" || carta == "8-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "8-viu'" || ultimo == "8-cua'") && (carta == "7-hex'" || carta == "7-cir'")) ||
        ((ultimo == "8-hex'" || ultimo == "8-cir'") && (carta == "7-viu'" || carta == "7-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "7-viu'" || ultimo == "7-cua'") && (carta == "6-hex'" || carta == "6-cir'")) ||
        ((ultimo == "7-hex'" || ultimo == "7-cir'") && (carta == "6-viu'" || carta == "6-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "6-viu'" || ultimo == "6-cua'") && (carta == "5-hex'" || carta == "5-cir'")) ||
        ((ultimo == "6-hex'" || ultimo == "6-cir'") && (carta == "5-viu'" || carta == "5-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "5-viu'" || ultimo == "5-cua'") && (carta == "4-hex'" || carta == "4-cir'")) ||
        ((ultimo == "5-hex'" || ultimo == "5-cir'") && (carta == "4-viu'" || carta == "4-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "4-viu'" || ultimo == "4-cua'") && (carta == "3-hex'" || carta == "3-cir'")) ||
        ((ultimo == "4-hex'" || ultimo == "4-cir'") && (carta == "3-viu'" || carta == "3-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "3-viu'" || ultimo == "3-cua'") && (carta == "2-hex'" || carta == "2-cir'")) ||
        ((ultimo == "3-hex'" || ultimo == "3-cir'") && (carta == "2-viu'" || carta == "2-cua'"))) {

        dropR4f(ev);


    }
    if (((ultimo == "2-viu'" || ultimo == "2-cua'") && (carta == "1-hex'" || carta == "1-cir'")) ||
        ((ultimo == "2-hex'" || ultimo == "2-cir'") && (carta == "1-viu'" || carta == "1-cua'"))) {

        dropR4f(ev);


    } else {
        console.log('error');
    }



}

function dropR1f(ev) {

    var data = ev.dataTransfer.getData("carta");
    tapete_receptor1.appendChild(document.getElementById(data));
    console.log(" Receptor 1: " + (tapete_receptor1.childElementCount - 1));
    mazo_receptor1.push(carta);

    let contador_receptor1 = document.getElementById("contador_receptor1");
    contador_receptor1.innerHTML = `<h5>` + (mazo_receptor1.length) + `</h5>`
    ultimo = mazo_receptor1[mazo_receptor1.length - 1];
    console.log("u = " + ultimo);
    inc_contador(contador_movimientos);
}

function dropR2f(ev) {

    var data = ev.dataTransfer.getData("carta");
    tapete_receptor2.appendChild(document.getElementById(data));
    console.log(" Receptor 2: " + (tapete_receptor2.childElementCount - 1));
    mazo_receptor2.push(carta);

    let contador_receptor2 = document.getElementById("contador_receptor2");
    contador_receptor2.innerHTML = `<h5>` + (mazo_receptor2.length) + `</h5>`
    ultimo = mazo_receptor2[mazo_receptor2.length - 1];
    console.log("u = " + ultimo);
    inc_contador(contador_movimientos);
}

function dropR3f(ev) {

    var data = ev.dataTransfer.getData("carta");
    tapete_receptor3.appendChild(document.getElementById(data));
    console.log(" Receptor 3: " + (tapete_receptor3.childElementCount - 1));
    mazo_receptor3.push(carta);

    let contador_receptor3 = document.getElementById("contador_receptor3");
    contador_receptor3.innerHTML = `<h5>` + (mazo_receptor3.length) + `</h5>`
    ultimo = mazo_receptor3[mazo_receptor3.length - 1];
    console.log("u = " + ultimo);
    inc_contador(contador_movimientos);
}


function dropR4f(ev) {

    var data = ev.dataTransfer.getData("carta");
    tapete_receptor4.appendChild(document.getElementById(data));
    console.log(" Receptor 4: " + (tapete_receptor4.childElementCount - 1));
    mazo_receptor4.push(carta);

    let contador_receptor4 = document.getElementById("contador_receptor4");
    contador_receptor4.innerHTML = `<h5>` + (mazo_receptor4.length) + `</h5>`
    ultimo = mazo_receptor4[mazo_receptor4.length - 1];
    console.log("u = " + ultimo);
    inc_contador(contador_movimientos);
}




document.getElementById("reset").onclick = function() {

    location.href = location.href;


}