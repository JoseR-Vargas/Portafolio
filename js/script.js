// prompt

// let respuesta = prompt('De que zona nos contactas')

// alert('Bienvenidos a mi portafolio')
// alert
// alert('debes aceptar los terminos y condiciones')

// confirm
// let confirmar = confirm('Bienvenido a mi portafolio')

// confirm('Bienvenido a mi portafolio')

// concatenacion

// let platoElegido = prompt ('Que quieres comer ?');

// alert('Hoy es un lindo dia' + platoElegido);

// let platoPrincipal = 1000;
// let Bebida = 300;

// let totalPedido = platoPrincipal + Bebida;

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// let nombreCompleto = nombre + " " + apellido; 

// console.log("Bienvenid@",nombreCompleto);

// ------- Condicionales  y operadores ----------

// let tiempo = 'lluvioso';

// if(tiempo == 'lluvioso'){
//     console.warn('llevar paraguas');
// } else {
//     console.log('ir con remera')
// }


// let edadMinima = 18; 

// if(edadMinima >=18){
//     console.log('puede entrar a la disco')
// } else {
//     console.warn('vuelve a tu casa')
// }


// ------- else if ---------

// let edadMinima = 18; 

// if(edadMinima < 18){
//     console.log('vuelve a tu casa');
// } else if (edadMinima >= 18) {
//     console.warn('entra a la disco');
// } else {
//     // //
// }

// let lenguajeRequerido ='javascript'
// let idiomaRequerido = 'frances'

// if( (lenguajeRequerido == 'react')&&(idiomaRequerido == 'frances')) {
//     console.log ('puede acceder al puesto');
// } else{
//     console.warn ('debes cumplir el requerimiento');
// }

// if( (lenguajeRequerido == 'react') || (idiomaRequerido == 'frances')) {
//     console.log ('puede acceder al puesto');
// } else{
//     console.warn ('debes cumplir el requerimiento');
// }

// if( (lenguajeRequerido == 'react')&& (idiomaRequerido =='inlges') || (idiomaRequerido == 'frances')) {
//     console.log ('puede acceder al puesto');
// } else{
//     console.warn ('debes cumplir el requerimiento');
// }

// -------- ciclos -------

// for(desde ; hasta ; actualizacion)

// for(let i=0;i<10;i++){
//     console.log('Iteracion N ' + i)
// }

// ------sumar 2 sentencias break y continue -----------

// for(let i=1;i<=10;i++){
//     // si la variable i es igual a 5 interrumpo el for
//     if(i==5){
//         console.warn("iteracion interrumpida en el ciclo, i, por la clausula BREAK");
//         break;
//     }
//     alert(i);
// }

// continue

// for(let i=1;i<=10;i++){
//     // si la variable i es igual a 5 interrumpo el for
//     if(i==5){
//         console.warn("iteracion interrumpida en el ciclo, i, por la clausula BREAK");
//         continue;
//     }
//     alert(i);
// }

// -----clclo while -------

// let i = 1; 

// while(i<6){
//     console.log('iteracion N'+ i);
//     i++;
// }

// let numero = 0;

// do{
//     // Repetimos con do.. while mientras el usuario ingresa un N
//     numero = prompt("ingresar Numero");
//     console.log(numero);
// }while(parseInt(numero));

// let i = 7;

// while(i<6){
//     console.log('iteracion N +i');
//     i++
// }

// -------switch-----------

// Es una forma de poder escribir diferentes bloques de codigo if anidados

// let tiempo;

// switch(tiempo) {
//     case'lluvioso':
//     // tarea a realizar
//     break;
//     case 'soleado':
//     // tarea a realizar
//     break;
//     case'ventoso':
//     // tarea a realizar
//     break;
//     case'soleado':
//     // tarea a realizar
//     break;
//     default:
//         // tarea a realizar
//         break;
// }

// let tiempo = prompt('como esta el cilma? lluvioso, soleado, ventoso, nevando');

// switch(tiempo){
//     case'lluvioso':
//     alert('llevar paraguas');
//     break;
//     case'soleado':
//     alert('poner protector solar');
//     break;
//     case'ventoso':
//     alert('no salir de casa');
//     case'nevando':
//     alert('tomar chocolate');
//     break;
//     default:
//         alert('valor no valido');
//         break;
// }lre

//------- Algoritmo simple + Algoritmo condicional---------

// let entrada = prompt('Ingresa un nombre');

// let nombre = 'BART';

// if(entrada==nombre){
//     alert('fui yo');
// } else{
//     alert('no fui yo');
// }

// let numeroPersonaje = prompt('ingresa un numero');

// if(numeroPersonaje == '1'){
//     alert('elegiste a homero');
// } else if(numeroPersonaje == '2'){
//     alert('elegiste a marge');
// } else if(numeroPersonaje == '3'){
//     alert('elegiste a bart');
// } else if (numeroPersonaje == '4'){
//     alert('elegiste a lisa');
// } else {
//     alert('error');
// }

// switch(numeroPersonaje){
//     case'1':
//     alert('elegiste a homero');
//     break;
//     case'2':
//     alert('elegiste a lisa');
//     break;
//     case'3':
//     alert('elegiste a bart');
//     break;
//     default: 
//     alert('error');
//     break;
// }

// let cantidad = parseInt(prompt('ingrese cantidad de repeticiones'));

// let texto = prompt('ingresa texto a repetir');

// for (let i = 0; i < cantidad; i++) {
//     console.log(texto);
// }

// console.log('espero les haya gustado');

 //---------Ejemplo de la clase 2---------

// let intento = 1 
// let identificar = true

// do{
//     let usuario = prompt ("igresa tu usuario (solo 3 intentos)")
//     if (usuario === null){
//         break
//     }

//     if (usuario === "jose" && intento <=3){
//         alert("welcome")
//         identificar = false
//     }else{
//         alert("no se reconoce el usuario " + usuario)
//         intento++

//         if(intento>3){
//             alert("usted supero los 3 intentos")
//             break
//         }
//     }
// }while(identificar)