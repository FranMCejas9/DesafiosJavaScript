/* function Personaje(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const personaje1 = new Personaje ('Homero','Simpson',66);
console.log(personaje1)
const personaje2 = new Personaje ('Marge','Simpson',50);
console.log(personaje2)

const ciudades = {
    ciudad1: 'Arrecifes',
    ciudad2: 'Pergamino',
    ciudad3:  'Salto',
    ciudad4: 'Buenos Aires',
    ciudad5: 'New York'
}

console.log(ciudades) */

/* 
const nombre = 'Franco Cejas'
const edad = 23
const pais = 'Argentina'
const genero = 'Masculino'

const carnet = 'Nombre:'+nombre+' '+'Edad:'+edad+' '+'País:'+pais+' '+'Genero:'+genero

console.log(carnet)
 */

/* let nombre1 = prompt('Ingrese un nombre');
let nombre2 = prompt('Ingrese un nombre');
let nombre3 = prompt('Ingrese un nombre');
let nombre4 = prompt('Ingrese un nombre');
let nombre5 = prompt('Ingrese un nombre');

const nombres = nombre1+' '+nombre2+' '+nombre3+' '+nombre4+' '+nombre5;

alert (nombres); */


/* let numero = parseInt(prompt('Ingrese un número'));
let numero2 = parseInt(prompt('Ingrese un número'));

const descuento1 = numero - (numero * 20 / 100);
const descuento2 = numero2 - (numero * 30 / 100);

alert('Sus precios con descuento son de: '+descuento1+' '+descuento2) */

/* 
const nombre = 'Tamara';
let nombre2 = prompt('ingrese un nombre');

if (nombre2 == 'Tamara'){
    alert('Fui yo')
}
else{
    alert('Yo no fui')
} */


/* let tecla = prompt('Precione una tecla');

if ((tecla=='y')||(tecla=='Y')){
    alert('Correcto')
}
else{
    alert('Error')
} 
========================|| para poner 2 parametros*/ 

/* 
let numero = prompt('Ingrese un numero')

    if(numero==1){
        alert('Elegiste a Homero')
    }
    else if(numero==2){
        alert('Elegiste a Marge')
    }
    else if(numero==3){
        alert('Elegiste a Bart')
    }
    else if(numero==4){
        alert('Elegiste a Lisa')
    }
    else{
        alert('Error')
    }  */



/* let presupuesto = parseFloat(prompt('Ingrese su presupuesto'));

if((presupuesto >= 0)&&(presupuesto <= 1000)){
    alert('Presupuesto bajo')
}else if((presupuesto >= 1001)&&(presupuesto <= 3000)){
    alert('Presupuesto medio')
}else if(presupuesto > 3001){
    alert('Presupuesto alto')
}
else{
    alert('Error')
} */


/* let articulo = prompt('Ingrese un articulo');
let articulo2 = prompt('Ingrese un articulo');  
let articulo3 = prompt('Ingrese un articulo');
let articulo4 = prompt('Ingrese un articulo');

if((articulo!='')&&(articulo2!='')&&(articulo3!='')&&(articulo4!='')){
    let heladera = '1)'+articulo+''+
        '2)'+articulo2+''+
        '3)'+articulo3+''+
        '4)'+articulo4;
    alert(heladera);
}else{
    alert("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
} */


/* let valor = parseFloat(prompt('Ingrese un numero'));
let palabra = prompt('Ingrese una palabra');

for (let numero = 1;numero <= valor; numero++) {
    alert(palabra);
} */


/* let valor = parseFloat(prompt('Ingrese un numero'));

for (let numero = 1;numero<valor; numero++) {
    if(numero>4){
        break
    }
    alert('lado');
} */


/* let totalAlumno = '';

for (let i=0;i<2;i++){
    totalAlumno = totalAlumno + prompt('ingrese otro alumno')+'\n';
}
alert(totalAlumno) \n se utiliza para saltar linea en un prompt*/


/* let nombre = prompt('ingrese un nombre');
let nombres = '';

while(nombre!='Voldemort'){
    nombres += nombre+'\n';
    nombre = prompt('ingrese otro nombre')
}

alert(nombres) */
/* 

let numero = parseFloat(prompt('Ingrese un numero').toUpperCase());

while(numero!='ESC'){
    if(numero == 1){
        alert('Tomate')
    }
    else if(numero==2){
        alert('Papa')
    }
    else if(numero==3){
        alert('Carne')
    }
    else if(numero==4){
        alert('Pollo')
    }
}
 */


/* function entrada(){
    return prompt("INGRESAR DATO");
    }
function procesamiento(valor){
    return "LA ENTRADA ES "+valor
}
function salida(valor){
    alert(valor);
}

salida(procesamiento(entrada())); */

/* 
function solicitarNombre(){
    let nombre = prompt('ingrese su nombre');
    alert('El nombre ingresado es: '+nombre)
}

solicitarNombre() */

/* PARAMETROS */

/* function nombresHola(valor1,valor2,valor3){
    alert(valor1+'\n'+valor2+'\n'+valor3)
}

nombresHola('Franco','Tamara','Hola');
 */

//Declaración de variable para guardar el resultado de la suma
/* let resultado = 0; */
//Función que suma dos números y asigna a resultado
/* function sumar(primerNumero, segundoNumero) {
resultado = primerNumero + segundoNumero
} */
//Función que muestra resultado por consola
/* function mostrar(mensaje) {
alert(mensaje)
} */
//Llamamos primero a sumar y luego a mostrar
/* sumar(6, 3);
mostrar(resultado); */

/* 
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
    }
    let resultado = sumar(5, 8);

    alert(resultado) */



/* function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
    case "+":
    return primerNumero + segundoNumero;
    break;
    case "-":
    return primerNumero - segundoNumero;
    break;
    case "*":
    return primerNumero * segundoNumero;
    break;
    case "/":
    return primerNumero / segundoNumero;
    break;
    default:
    return 0;
    break;
    }
        }
        alert(calculadora(parseFloat(prompt('Ingrese un valor')), parseFloat(prompt('Ingrese un segundo valor')), prompt('Ingrese un operador'))); */


/* const suma = (a,b) => a + b
const resta = (a,b) => a - b */
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los
/* const iva = x => x * 0.21 */
/* let precioProducto = 100
let descuento = 50 */
//Calculo el precioProducto + IVA - descuento
/* let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio) */



/* function decimal (valor){
    return Math.round(valor) para redondear un numero con decimal
}

for(let i=0; i<5; i++){
    let numero = parseFloat(prompt('ingrese un numero decimal'))
    alert(decimal(numero))
}

 */
/* 
function impuesto(precio, porcentaje){
    let precioTotal = precio + (precio*porcentaje/100);
    return precioTotal;
}

for (let i=0; i<5;i++){
    let valor = impuesto(parseFloat(prompt('ingrese un precio')),parseFloat(prompt('ingrese un porcentaje')));
    alert(valor);
} */

/* const dolarB = 285;
function cotizarDolar(pesos){
    let valorDolar = pesos / dolarB;
    return valorDolar
}

function cotizarPesos(dolar){
    let valorPesos = dolar * dolarB;
    return valorPesos
}

let cotizacion = prompt('Que moneda querés cotizar?')

switch (cotizacion){
    case 'pesos':
        valorD = cotizarDolar(parseFloat(prompt('Ingrese la cantidad de pesos')))
        alert(valorD)
        break
    case 'dolar':
        valorP = cotizarPesos(parseFloat(prompt('Ingrese la cantidad de pesos')))
        alert(valorP)
        break
}

 */
/* function validacion(cadena){
    return cadena != '';
}

let valor = prompt('ingrese un parametro').toUpperCase();
while(valor!='ESC'){
    alert(validacion(valor));
    valor = prompt('ingrese un parametro').toUpperCase();
} */

/* class Tienda {
    constructor (nombre,direccion,propietario,rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario =  propietario;
        this.rubro =  rubro;
    };
    estaAbierto(hora){
        if(((hora>=8)&&(hora<=12))||((hora>=15)&&(hora<=19))){
            return true
        }
        return false 
    };
    esPropietario(nombre){
        return this.nombre = nombre;
    }
}

const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");

for (let index = 0; index < 5; index++) {
    let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
    if (tienda1.esPropietario(entrada)){
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
    }
    if (tienda2.esPropietario(entrada)){
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
    }
    if (tienda3.esPropietario(entrada)){
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
    }
} */

/*     const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");

    for (let index = 0; index < 3 ; index++) {
        let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
        if(tienda4.estaAbierto(entrada)){
            alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
        }else{
            alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
        }
    } */
/* 
class Cliente{
    constructor(nombre,presupuesto,descuento,telefono){
        this.nombre=nombre;
        this.presupuesto=parseFloat(presupuesto);
        this.descuento=descuento;
        this.telefono=telefono;
    }
    transferirDinero(valor){
        if((valor<=this.presupuesto)&&(valor>0)){
            this.presupuesto -= valor
            return valor
        }
        else {
            return 0
        }
    }
}

const cliente1 = new Cliente('Franco',4000,true,'403050');
const cliente2 = new Cliente('Tiago',10000,true,'556080');
const cliente3 = new Cliente('Camila',2000,true,'102456');


for(let i=0;i<5;i++){
    let dinero = prompt('Ingrese el valor');
    if (cliente1.transferirDinero(dinero)){
        alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+dinero);
    }
    if (cliente2.transferirDinero(dinero)){
        alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+dinero);
    }
    if (cliente3.transferirDinero(dinero)){
        alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+dinero);
    }
} */



/* ===================================================Array======================================================= */

/* 
const equipo = ['Franco','Tiago','Camila','Gabriel'];

for(integrante of equipo){
    alert("POSICION " + equipo.length + " JUGADOR " + integrante)
} */