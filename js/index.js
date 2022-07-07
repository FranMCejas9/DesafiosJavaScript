
/* let n1 = prompt ("ingrese un numero");

const resultado = n1 * n1 * n1 

alert (resultado) calcular numeros al cubo*/ 


/* let anioActual = prompt ("ingrese año actual");
let anioNacimiento = prompt ("ingrese año de nacimiento");

const resultado = anioActual - anioNacimiento;

alert ("tu edad es: " + resultado)  calcular edad */


/* let kilometros = prompt ("ingrese km que hay entre las ciudades");
let velocidad = prompt ("ingrese a la velocidad que va");

const tiempo = kilometros / velocidad;

alert ("el tiempo estimado de llegada es: " + tiempo)  sacar tiempo estimado*/



/* let sueldo = parseInt(prompt("Ingrese sueldo total"));

const porcentaje =  sueldo * 5 / 100;

const sueldoFinal = sueldo + porcentaje;

alert ('Su sueldo es de : ' + sueldoFinal) Sacar porcentaje;
 */


/* let nota1 = parseInt (prompt("ingrese nota 1"));
let nota2 = parseInt (prompt("ingrese nota 2"));
let nota3 = parseInt (prompt("ingrese nota 3"));

let promedio = nota1+nota2+nota3;

let resultado = promedio / 3;

alert ("su nota promedio es: " + resultado)  Sacar promedio*/


/* 
let monto = parseInt(prompt("Ingrese monto total"));

const porcentaje =  monto * 15 / 100;

const montoFinal = monto - porcentaje;

alert ('Su monto final es de: ' + montoFinal);

 */



/* 
let hombres = parseInt(prompt("Ingrese cantidad de hombres"));

let mujeres = parseInt(prompt("Ingrese cantidad de mujeres"));

const cantidadTotal = hombres + mujeres;

const porcentajeH =  hombres / cantidadTotal;

const porcentajeM =  mujeres / cantidadTotal;

alert ('El promedio de hombres es de : ' + porcentajeH);

alert ('El promedio de mujeres es de : ' + porcentajeM)

 */

/* let numero1 = parseInt (prompt("Ingrese un numero"))
let numero2 = parseInt (prompt("Ingrese otro numero"))

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

console.log("el resultado de la suma es: " + suma)
console.log("el resultado de la resta es: " + resta)
console.log("el resultado de la multiplicacion es: " + multiplicacion)
console.log("el resultado de la division es: " + division) */





/* =================================================Desafío JS============================================================= */


/* Muestra mensaje hola, la cantidad de veces que se ha indicado con el número ingresado */

let numeroIng = parseInt (prompt('Ingrese un número'));
for (let numero = 0 ; numero < numeroIng ;numero++) {
    console.log ('hola');
}


/* Concatena los textos ingresados, hasta que el usuario escriba ESC */

let entrada = prompt('Ingrese un texto').toUpperCase();
let textoConcatenado = '';

while (entrada != 'ESC'){
    textoConcatenado = textoConcatenado + entrada;
    console.log(textoConcatenado);
    entrada = prompt('Ingrese otro texto').toUpperCase();
}