
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

/* let numeroIng = parseInt (prompt('Ingrese un número'));
for (let numero = 0 ; numero < numeroIng ;numero++) {
    console.log ('hola');
}
 */

/* Concatena los textos ingresados, hasta que el usuario escriba ESC */

/* let entrada = prompt('Ingrese un texto').toUpperCase();
let textoConcatenado = '';

while (entrada != 'ESC'){
    textoConcatenado = textoConcatenado + entrada;
    console.log(textoConcatenado);
    entrada = prompt('Ingrese otro texto').toUpperCase();
} */

/* ==============================================Desafio entregable número 1============================================================ */

const mayonesa = 150
const gaseosa = 240
const panLactal = 170
const cerveza = 130
const salamin = 320
const queso = 360
const cupon='regalo'
let carritoProductos = 0
let totalCompra = 0

function descuento(valor){
    return valor - (valor*0.20)
}
function suma (valor){
    valor = valor + 1
    return valor
}

let carrito = prompt('seleccione el numero del producto a agregar'+'\n'+'1)mayonesa'+'\n'
+'2)gaseosa'+'\n'+'3)pan lactal'+'\n'+'4)cerveza'+'\n'+'5)salamin'+'\n'+'6)queso'+'\n'+'Tecla ENTER para salir');

while(carrito!='7'){
    if (carrito==1){
        carritoProductos = suma(carritoProductos)
        totalCompra+=mayonesa;
        carrito = prompt('seleccione el numero de otro producto a agregar'+'\n'+'1)mayonesa'+'\n'
        +'2)gaseosa'+'\n'+'3)pan lactal'+'\n'+'4)cerveza'+'\n'+'5)salamin'+'\n'+'6)queso'+'\n'+'7)finalizar compra'+'\n'+'Cantidad de productos: '+carritoProductos+'\n'+'TOTAL hasta el momento $'+totalCompra)
    }
    else if (carrito==2){
        carritoProductos = suma(carritoProductos)
        totalCompra+=gaseosa
        carrito = prompt('seleccione el numero de otro producto a agregar'+'\n'+'1)mayonesa'+'\n'
        +'2)gaseosa'+'\n'+'3)pan lactal'+'\n'+'4)cerveza'+'\n'+'5)salamin'+'\n'+'6)queso'+'\n'+'7)finalizar compra'+'\n'+'Cantidad de productos: '+carritoProductos+'\n'+'TOTAL hasta el momento $'+totalCompra)
    }
    else if (carrito==3){
        carritoProductos = suma(carritoProductos)
        totalCompra+=panLactal
        carrito = prompt('seleccione el numero de otro producto a agregar'+'\n'+'1)mayonesa'+'\n'
        +'2)gaseosa'+'\n'+'3)pan lactal'+'\n'+'4)cerveza'+'\n'+'5)salamin'+'\n'+'6)queso'+'\n'+'7)finalizar compra'+'\n'+'Cantidad de productos: '+carritoProductos+'\n'+'TOTAL hasta el momento $'+totalCompra)
    }
    else if (carrito==4){
        carritoProductos = suma(carritoProductos)
        totalCompra+=cerveza
        carrito = prompt('seleccione el numero de otro producto a agregar'+'\n'+'1)mayonesa'+'\n'
        +'2)gaseosa'+'\n'+'3)pan lactal'+'\n'+'4)cerveza'+'\n'+'5)salamin'+'\n'+'6)queso'+'\n'+'7)finalizar compra'+'\n'+'Cantidad de productos: '+carritoProductos+'\n'+'TOTAL hasta el momento $'+totalCompra)
    }
    else if (carrito==5){
        carritoProductos = suma(carritoProductos)
        totalCompra+=salamin
        carrito = prompt('seleccione el numero de otro producto a agregar'+'\n'+'1)mayonesa'+'\n'
        +'2)gaseosa'+'\n'+'3)pan lactal'+'\n'+'4)cerveza'+'\n'+'5)salamin'+'\n'+'6)queso'+'\n'+'7)finalizar compra'+'\n'+'Cantidad de productos: '+carritoProductos+'\n'+'TOTAL hasta el momento $'+totalCompra)
    }
    else if (carrito==6){
        carritoProductos = suma(carritoProductos)
        totalCompra+=queso
        carrito = prompt('seleccione el numero de otro producto a agregar'+'\n'+'1)mayonesa'+'\n'
        +'2)gaseosa'+'\n'+'3)pan lactal'+'\n'+'4)cerveza'+'\n'+'5)salamin'+'\n'+'6)queso'+'\n'+'7)finalizar compra'+'\n'+'Cantidad de productos: '+carritoProductos+'\n'+'TOTAL hasta el momento $'+totalCompra)
    }
}

if(carrito=='7'){
    let ingresarCupon = prompt('Tiene un cupon de descuento?'+'\n'+'1) Si'+'\n'+'2) No')
    if(ingresarCupon==1){
        let validarCupon = prompt('Ingrese su cupon')
        if(validarCupon==cupon){
            alert('Cantidad de productos: '+carritoProductos+'\n'+'Su total, con el descuento del 20% es de: '+descuento(totalCompra))
        }
        else{
            alert('Su cupón es invalido'+'\n'+'Cantidad de productos: '+carritoProductos+'\n'+'Su total es de: '+totalCompra)
        }
    }
    else if(ingresarCupon==2){
        alert('Cantidad de productos: '+carritoProductos+'\n'+'Su total es de: '+totalCompra)
    }
}
