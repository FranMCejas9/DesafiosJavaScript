
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const total = localStorage.getItem('totalCarrito') ?? 0;
document.querySelector('#productosCant').innerHTML= carrito.length;
document.querySelector('#totalCarrito').innerHTML = `-$${total}`
document.querySelector('#totalCarritoPop').innerHTML = `<p><span>Total de la compra:</span>$${total}</p>`
crearCardCarrito(carrito)

function crearCardCarrito(e){
    if (e.length > 0){
    e.forEach(({id: id,img: img,categoria: cat,color : color,precio: price})=>{
        document.querySelector('#cards').innerHTML += 
        `<tr>
            <td>${cat}</td>
            <td>${color}</td>
            <td><img src= "${img}" style ='width: 100px'></td>
            <td>$${price}<div class='btn botonBorrar' onclick='deleteProduct(${id})'><p>X</p></div></td>
        </tr>`
    })
}}
const deleteProduct = (el) => {
    let indice = carrito.findIndex(indice => indice.id === el)
    carrito.splice(indice,1);
    const total = sumaCarrito(carrito);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    localStorage.setItem('totalCarrito',JSON.stringify(total))
    document.querySelector('#productosCant').innerHTML= carrito.length;
    document.querySelector('#totalCarrito').innerHTML = `$${total}`
    resetCards('#cards')
    crearCardCarrito(carrito)
    document.querySelector('#totalCarritoPop').innerHTML = 
    `<p><span>Total de la compra:</span>$${total}</p>`
}

function sumaCarrito(parametro){
    return parametro.reduce((acc,producto)=> acc + producto.precio, 0);
}

function resetCards (selector){
    document.querySelector(selector).innerHTML = ''
}

const productos = [
    { 
        id: 1,
        img: '../img/gorros/blanco.jpg',
        categoria: 'Gorro',
        color : 'Blanco',
        precio : 1000
    },
    {
        id: 2,
        img: '../img/gorros/mostaza.jpg',
        categoria:'Gorro',
        color : 'Mostaza',
        precio: 1000
    },
    {
        id: 3,
        img: '../img/gorros/rojo.jpg',
        categoria:'Gorro',
        color: 'Rojo',
        precio: 1000
    },
    {
        id: 4,
        img: '../img/gorros/verdelimon.jpg',
        categoria:'Gorro',
        color : 'Verde limón',
        precio: 1000
    },
    {
        id: 5,
        img: '../img/carteras/azul.jpg',
        categoria:'Cartera',
        color : 'Azul',
        precio: 1200
    },
    {
        id: 6,
        img: '../img/carteras/lila.jpg',
        categoria:'Cartera',
        color : 'Lila',
        precio: 1200
    },
    {  
        id: 7,
        img: '../img/carteras/negra.jpg',
        categoria:'Cartera',
        color : 'Negra',
        precio: 1200
    },
    {
        id: 8,
        img: '../img/carteras/rosa.jpg',
        categoria:'Cartera',
        color : 'Rosa',
        precio: 1200
    },
    {
        id: 9,
        img: '../img/bandoleras/negra.jpg',
        categoria:'Bandolera',
        color : 'Negra',
        precio: 1400
    },
    {
        id: 10,
        img: '../img/bandoleras/blanca.jpg',
        categoria:'Bandolera',
        color : 'Blanca',
        precio: 1400
    },
    {
        id: 11,
        img: '../img/bandoleras/marron.jpg',
        categoria:'Bandolera',
        color : 'Marrón',
        precio: 1400
    },
    {
        id: 12,
        img: '../img/bandoleras/verde.jpg',
        categoria:'Bandolera',
        color : 'Verde',
        precio: 1400
    }
]

function crearCard(e){
    e.forEach(({id: id,img: img,categoria: cat,color : color,precio: price})=>{
        let idBoton = id
        document.getElementById(cat).innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-3 p-3 articulos" data-aos="fade-up">
            <img class="w-100" src="${img}" alt="${cat} color ${color}">
            <div class="articulosColor">
                <h5>${color}</h5>
            </div>
            <div class="d-flex justify-content-around">
                <div id='buttonVer'>
                    <p class="productoPrecio">$${price}</p>
                    <button class='btn btn-secondary' onclick='verProducto(${id})'>Ver</button>
                </div>
                <button class="carritoA btn btn-dark" id="${idBoton}">Agregrar al carrito</button">
            </div>
        </div>`
        })
}

function verProducto (id){
    const indice = productos.findIndex((producto)=> producto.id === id);
    localStorage.setItem('verProducto', JSON.stringify(productos[indice]))
    location.href = `./pages/productos.html?${id}`
}

crearCard(productos);

for (let producto of productos){
    idBoton = producto.id
    document.getElementById(idBoton).addEventListener('click',()=>{
        const indice = productos.findIndex((ver)=> ver.id === producto.id);
        localStorage.setItem('verProducto', JSON.stringify(productos[indice]))
        carrito.push(producto)
        const total = sumaCarrito(carrito);
        Toastify({
            text: `Añadiste al Carrito: ${producto.categoria} ${producto.color}`,
            avatar: producto.img,
            duration: 3000,
            destination: `./pages/productos.html?${producto.id}`,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #845EC2, #845Eff)",
            },
        }).showToast();
        localStorage.setItem('totalCarrito',JSON.stringify(total))
        document.querySelector('#productosCant').innerHTML= carrito.length;
        document.querySelector('#totalCarrito').innerHTML = `$${total}`
        localStorage.setItem('carrito',JSON.stringify(carrito))
        document.querySelector('#totalCarritoPop').innerHTML = 
        `<p><span>Total de la compra:</span>$${total}</p>`
        resetCards('#cards')
        crearCardCarrito(carrito)
        });
    }
