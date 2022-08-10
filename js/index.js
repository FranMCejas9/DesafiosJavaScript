
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const total = localStorage.getItem('totalCarrito') ?? 0;
document.querySelector('#productosCant').innerHTML= carrito.length;
document.querySelector('#totalCarrito').innerHTML = `-$${total}`
document.querySelector('#totalCarritoPop').innerHTML = `<p><span>Total de la compra:</span>$${total}</p>`
crearCardCarrito(carrito)
/* 
let buttonPrueba = document.querySelector('#buttonPrueba');
let contenidoButton = document.createElement('p')
contenidoButton.innerHTML = `$${total}`
buttonPrueba.addEventListener('mouseenter',()=>{
    buttonPrueba.appendChild(contenidoButton)
    })
    buttonPrueba.addEventListener('mouseleave',()=>{
        buttonPrueba.removeChild(contenidoButton)
    })
 */
function crearCardCarrito(e){
    if (e.length > 0){
    e.forEach((producto)=>{
        document.querySelector('#cards').innerHTML += 
        `<tr>
            <td>${producto.categoria}</td>
            <td>${producto.color}</td>
            <td><img src= "${producto.img}" style ='width: 100px'></td>
            <td>$${producto.precio}<div class='btn botonBorrar' onclick='deleteProduct(${producto.id})'><p>X</p></div></td>
        </tr>`
    })
}}



const deleteProduct = (el) => {
    let indice = carrito.findIndex(indice => indice.id === el)
    carrito.splice(indice,1);
    console.log(carrito)
    const total = sumaCarrito(carrito);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    localStorage.setItem('totalCarrito',JSON.stringify(total))
    document.querySelector('#productosCant').innerHTML= carrito.length;
    document.querySelector('#totalCarrito').innerHTML = `$${total}`
    document.querySelector('#cards').innerHTML = ''
    crearCardCarrito(carrito)
    document.querySelector('#totalCarritoPop').innerHTML = 
    `<p><span>Total de la compra:</span>$${total}</p>`
}

function sumaCarrito(parametro){
    return parametro.reduce((acc,producto)=> acc + producto.precio, 0);
}
const productos = [
    { 
        id: 1,
        img: '../img/gorros/blanco.jpg',
        categoria: 'gorro',
        color : 'Blanco',
        precio : 1000
    },
    {
        id: 2,
        img: '../img/gorros/mostaza.jpg',
        categoria:'gorro',
        color : 'Mostaza',
        precio: 1000
    },
    {
        id: 3,
        img: '../img/gorros/rojo.jpg',
        categoria:'gorro',
        color: 'Rojo',
        precio: 1000
    },
    {
        id: 4,
        img: '../img/gorros/verdelimon.jpg',
        categoria:'gorro',
        color : 'Verde limón',
        precio: 1000
    },
    {
        id: 5,
        img: '../img/carteras/azul.jpg',
        categoria:'cartera',
        color : 'Azul',
        precio: 1200
    },
    {
        id: 6,
        img: '../img/carteras/lila.jpg',
        categoria:'cartera',
        color : 'Lila',
        precio: 1200
    },
    {  
        id: 7,
        img: '../img/carteras/negra.jpg',
        categoria:'cartera',
        color : 'Negra',
        precio: 1200
    },
    {
        id: 8,
        img: '../img/carteras/rosa.jpg',
        categoria:'cartera',
        color : 'Rosa',
        precio: 1200
    },
    {
        id: 9,
        img: '../img/bandoleras/negra.jpg',
        categoria:'bandolera',
        color : 'Negra',
        precio: 1400
    },
    {
        id: 10,
        img: '../img/bandoleras/blanca.jpg',
        categoria:'bandolera',
        color : 'Blanca',
        precio: 1400
    },
    {
        id: 11,
        img: '../img/bandoleras/marron.jpg',
        categoria:'bandolera',
        color : 'Marrón',
        precio: 1400
    },
    {
        id: 12,
        img: '../img/bandoleras/verde.jpg',
        categoria:'bandolera',
        color : 'Verde',
        precio: 1400
    }
]

function crearCard(e){
    e.forEach((producto)=>{
        let idBoton = `idBoton${producto.id}`
        document.getElementById(producto.categoria).innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4 p-3 articulos" data-aos="fade-up">
        <img class="w-100" src="${producto.img}" alt="${producto.categoria} color ${producto.color}">
        <div class="articulosColor">
            <h5>${producto.color}</h5>
        </div>
        <div class="">
            <p class="productoPrecio">$${producto.precio}</p>
            <button class="btn btn-dark" id="${idBoton}">Agregrar al carrito</button">
        </div>
        </div>`
        })
}
crearCard(productos);

for (let producto of productos){
    let idBoton = `idBoton${producto.id}`;
    document.getElementById(idBoton).addEventListener('click',()=>{
        carrito.push(producto)
        const total = sumaCarrito(carrito);
        console.log(total)
        localStorage.setItem('totalCarrito',JSON.stringify(total))
        document.querySelector('#productosCant').innerHTML= carrito.length;
        document.querySelector('#totalCarrito').innerHTML = `$${total}`
        localStorage.setItem('carrito',JSON.stringify(carrito))
        document.querySelector('#totalCarritoPop').innerHTML = 
        `<p><span>Total de la compra:</span>$${total}</p>`
        document.querySelector('#cards').innerHTML = ''
        crearCardCarrito(carrito)
        })
};