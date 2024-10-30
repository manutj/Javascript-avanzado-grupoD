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

*/

console.log("4") // se envia al callstack y se ejecuta sincronicamente


//El event loop revisa el callstack y el task queue y unicamente si el callstack ya esta vacio va a verificar si hay tareas pendientes en el task queue, si las hay, devuelve las respuestas y si no sigue esperando


/* console.log('1')
setTimeout(()=>{
console.log('2')
},1000)
for (let index = 0; index < 999999999; index++) { // tener cuidado de no bloquear el callstack con tareas pesadas
     console.log(index)
} */

   

const ejemploCallback = (callback) => {
    callback(3,5)
}
     

let multiplicacion = (a,b) => {
    console.log(a*b)
}

let suma = (a,b) => {
    console.log(a+b)
}

let resta = (a,b) => {
    console.log(a-b)
}

let division = (a,b) => {
    console.log(a/b)
}



ejemploCallback(division)