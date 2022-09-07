
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const total = localStorage.getItem('totalCarrito') ?? 0;
document.querySelector('#productosCant').innerHTML= sumaProductos(carrito);
document.querySelector('#totalCarrito').innerHTML = `-$${total}`
if(carrito.length > 0){
    document.querySelector('#totalCarritoPop').innerHTML = 
    `<p><span>Total de la compra:</span>$${total}</p>`
}
crearCardCarrito(carrito)



/* Generador de secciones*/
function generadorDeSecciones(el){
    let secciones = new Set (el.map(producto =>{
        return producto.categoria
    }))
    let seccionesFiltrado = [...secciones];
    seccionesFiltrado.forEach(seccion=>{
        /* Crear secciones en el body */
        document.querySelector('.productos').innerHTML +=
        `<div class="col-12 p-0">
            <h2 class="text-center articuloTitulo  p-3 " id="${seccion}Container">${seccion}</h2>
        </div>
        <div id="${seccion}" class="row p-0 m-0"></div>`
        /* Crear secciones en el navBar*/
        document.querySelector('#navEnlaces').innerHTML += 
        `<li class="nav-item">
            <a class="nav-link" href="#${seccion}Container">${seccion}</a>
        </li>`
    })
}


/* Generar cards en el body */
function crearCard(el){
    el.forEach((producto)=>{
        let botonVer = `ver${producto.id}`
        let idBoton = `boton${producto.id}`
        document.getElementById(producto.categoria).innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-3 p-3 articulos" data-aos="fade-up">
            <img class="w-100" src="${producto.img}" alt="${producto.producto} color ${producto.color}">
            <div class="articulosColor">
                <h5>${producto.color}</h5>
            </div>
            <div class="d-flex justify-content-around">
                <div id='buttonVer'>
                    <p class="productoPrecio">$${producto.precio}</p>
                    <button class='btn btn-secondary' id="${botonVer}" data-id="${producto.id}">Ver</button>
                </div>
                <button class="carritoA btn btn-dark" id="${idBoton}">Agregrar al carrito</button">
            </div>
        </div>`
        })
}




/*Ver producto en la página 'productos'*/
function verProducto(el){
    el.forEach((producto)=>{
    let botonVer = `ver${producto.id}`
    document.querySelector(`#${botonVer}`).addEventListener('click',(event)=>{
        let nodo = event.target.getAttribute('data-id')
        const indice = el.findIndex((indice)=> indice.id == nodo)
        localStorage.setItem('verProducto', JSON.stringify(el[indice]))
        location.href = `./pages/productos.html`
    })
    })
}


fetch('productos.json')
    .then((response)=>response.json())
    .then((productos) => {
        generadorDeSecciones(productos);
        añadirAlCarrito(productos)
        verProducto(productos)
    })



    
function finalizarCompra(){
    document.querySelector('.buttonFinal').addEventListener('click',()=>{
        location.href = `./pages/compraFinal.html`
        limpiarCarrito();
    })
}
finalizarCompra();