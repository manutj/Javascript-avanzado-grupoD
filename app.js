// const axios = require('axios')

// JAVASCRIPT RUNTIME

// main thread => Hilo de ejecucion principal, en Javascript solo puede ejecutarse una cosa a la vez

//Callstack => pila de ejecucion de tareas

//Callback queue => cola de ejecucion de tareas que pueden demorarse en traer una respuesta

// Web API => metodos y propiedades que pertenecen al navegador que para javascript tambien son asincronas y son enviadas al callback queue al momento de ejecutarse

/* document.getElementById('button1').addEventListener('click', ()=>{
     console.log('Se ha pulsado el boton')
 }) */

// La union de estas partes forman el runtime de javascript, a este flujo de codigo sincrono y asincrono se le conoce como el Event Loop.

/* console.log("1") // se envia al callstack y se ejecuta sincronicamente
console.log("2") // se envia al callstack y se ejecuta sincronicamente
setTimeout(()=>{
    console.log("3") // Se envia al task queue o callback queue y espera una respuesta, lo delega a un segundo plano para no detener el hilo principal
}, 3000) 


console.log("4") // se envia al callstack y se ejecuta sincronicamente

*/

//El event loop revisa el callstack y el task queue y unicamente si el callstack ya esta vacio va a verificar si hay tareas pendientes en el task queue, si las hay, devuelve las respuestas y si no sigue esperando

/* console.log('1')
setTimeout(()=>{
console.log('2')
},1000)
for (let index = 0; index < 999999999; index++) { // tener cuidado de no bloquear el callstack con tareas pesadas
     console.log(index)
} */

// ********************EJEMPLOS Y EJERCICIOS DE CALLBACKS**********************

// const ejemploCallback = (callback) => {
//     callback(3,5)
// }

// let multiplicacion = (a,b) => {
//     console.log(a*b)
// }

// let suma = (a,b) => {
//     console.log(a+b)
// }

// let resta = (a,b) => {
//     console.log(a-b)
// }

// let division = (a,b) => {
//     console.log(a/b)
// }

// ejemploCallback(division)

//EJERCICIO 1

/* Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console. */

// SOLUCION 1
function saludo() {
  console.log("hola!");
}
function ejemploSaludo(callback) {
  callback();
}
ejemploSaludo(saludo);

//SOLUCION 2
const mostrarMensaje = (callback) => {
  const mensaje = "hola mundo";
  callback(mensaje);
};

mostrarMensaje(console.log);

//EJERCICIO 2

/* Escribe una función que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayúsculas o en minúsculas.
            ordenSuperior("PejeLagarto", minus);
             -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
             -> PEJELARTO */

const funcion = (callback, palabra) => {
  callback(palabra);
};

let minuscula = (palabra) => {
  console.log(palabra.toLowerCase());
};

let mayuscula = (palabra) => {
  console.log(palabra.toUpperCase());
};

funcion(mayuscula, "pinocho");

//EJERCICIO 3

//Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//      EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//      mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

//SOLUCION 1

const callback = (minutes) => {
  return minutes > 120;
};
const minutes = [120, 80, 200, 100];
const result = minutes.filter(callback);
console.log(result);

let nuevoArray = [];
for (let index = 0; index < minutes.length; index++) {
  if (minutes[index] > 120) {
    nuevoArray.push(minutes[index]);
  }
}

// SOLUCION 2
let array = [120, 80, 200, 100];
function time(array) {
  let answerTime = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element >= 120) {
      answerTime.push(element);
    }
  }
  return answerTime;
}
function ejercicioTiempo(callback) {
  callback(array);
}
console.log(time(array));
