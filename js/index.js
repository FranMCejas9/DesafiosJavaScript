
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const total = localStorage.getItem('totalCarrito') ?? 0;
document.querySelector('#productosCant').innerHTML= carrito.length;
document.querySelector('#totalCarrito').innerHTML = `-$${total}`
document.querySelector('#totalCarritoPop').innerHTML = `<p><span>Total de la compra:</span>$${total}</p>`
crearCardCarrito(carrito)


function generadorDeSecciones(){
    fetch('productos.json')
    .then((response)=>response.json())
    .then((productos) => {
        let secciones = new Set (productos.map(producto =>{
            return producto.categoria
        }))
        let seccionesFiltrado = [...secciones];
        seccionesFiltrado.forEach(seccion=>{
            document.querySelector('.productos').innerHTML +=
            `div class="col-12 p-0">
                <h2 class="text-center articuloTitulo  p-3 " id="${seccion}Container">${seccion}</h2>
            </div>
            <div id="${seccion}" class="row p-0 m-0"></div>`
            document.querySelector('#navEnlaces').innerHTML += 
            `<li class="nav-item">
                <a class="nav-link" href="#${seccion}Container">${seccion}</a>
            </li>`
        })
    })
}
generadorDeSecciones();

function crearCardCarrito(e){
    if (e.length > 0){
    e.forEach(({id: id,img: img,producto: prod,color : color,precio: price})=>{
        document.querySelector('#cards').innerHTML += 
        `<tr>
            <td>${prod}</td>
            <td>${color}</td>
            <td><img src= "${img}" style ='width: 100px'></td>
            <td>$${price}<div class='btn botonBorrar' onclick='deleteProduct(${id})'><p>X</p></div></td>
        </tr>`
    })
}}
const deleteProduct = (el) => {
    let indice = carrito.findIndex(indice => indice.id == el)
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
    return parametro.reduce((acc,producto)=> acc + JSON.parse(producto.precio), 0)
}

function resetCards (selector){
    document.querySelector(selector).innerHTML = ''
}

function crearCard(e){
    e.forEach((producto)=>{
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
                    <button class='btn btn-secondary' onclick='verProducto(${producto.id})'>Ver</button>
                </div>
                <button class="carritoA btn btn-dark" id="${idBoton}">Agregrar al carrito</button">
            </div>
        </div>`
        })
}

function verProducto (e){
    fetch('productos.json')
    .then((response)=>response.json())
    .then((productos)=> {
    const indice = productos.findIndex((producto)=> producto.id == e)
    localStorage.setItem('verProducto', JSON.stringify(productos[indice]))
    })
    location.href = `./pages/productos.html?${e}`
}

fetch('productos.json')
.then((response)=>response.json())
.then((productos)=> {
    crearCard(productos)
    productos.forEach((producto)=>{
    let idBoton = `boton${producto.id}`
    document.getElementById(idBoton).addEventListener('click',()=>{
        const indice = productos.findIndex((ver)=> ver.id === producto.id);
        localStorage.setItem('verProducto', JSON.stringify(productos[indice]))
        carrito.push(producto)
        const total = sumaCarrito(carrito);
        Toastify({
            text: `Añadiste al Carrito: ${producto.producto} ${producto.color}`,
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
    })
});
