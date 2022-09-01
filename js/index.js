
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const total = localStorage.getItem('totalCarrito') ?? 0;
document.querySelector('#productosCant').innerHTML= sumaProductos(carrito);
document.querySelector('#totalCarrito').innerHTML = `-$${total}`
document.querySelector('#totalCarritoPop').innerHTML = `<p><span>Total de la compra:</span>$${total}</p>`
crearCardCarrito(carrito)

function generadorDeSecciones(el){
    let secciones = new Set (el.map(producto =>{
        return producto.categoria
    }))
    let seccionesFiltrado = [...secciones];
    seccionesFiltrado.forEach(seccion=>{
        document.querySelector('.productos').innerHTML +=
        `<div class="col-12 p-0">
            <h2 class="text-center articuloTitulo  p-3 " id="${seccion}Container">${seccion}</h2>
        </div>
        <div id="${seccion}" class="row p-0 m-0"></div>`
        document.querySelector('#navEnlaces').innerHTML += 
        `<li class="nav-item">
            <a class="nav-link" href="#${seccion}Container">${seccion}</a>
        </li>`
    })
}
function crearCardCarrito(e){
    if (e.length > 0){
        e.forEach(({id: id,img: img,producto: prod,color : color,precio: price, cantidad: cant})=>{
            let botonMenos = `botonMenos${id}`
            let botonMas = `botonMas${id}`
            document.querySelector('#cards').innerHTML += 
            `<tr>
                <td><img src= "${img}" style ='width: 100px'></td>
                <td>${prod}</td>
                <td>${color}</td>
                <td class="productosCantidad"><div><button class="${botonMenos}" data-id="${id}" onclick="quitarEl(event)">-</button><p>${cant}</p><button class="${botonMas}" data-id="${id}" onclick="agregarEl(event)">+</button></div></td>
                <td>$${price}</td>
            </tr>
            <div class='btn botonBorrar' onclick='deleteProduct(${id})'><p>Eliminar</p></div>`
        })
    }
}

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

function sumaCarrito(el){
    return el.reduce((acc,producto)=> acc + (JSON.parse(producto.precio)* producto.cantidad), 0)
}
function sumaProductos(el){
    return el.reduce((acc,producto)=> acc + producto.cantidad, 0)
}

function resetCards (selector){
    document.querySelector(selector).innerHTML = ''
}


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

function actualizarDOM(){
    localStorage.setItem('carrito',JSON.stringify(carrito))
    const total = sumaCarrito(carrito)
    localStorage.setItem('totalCarrito',JSON.stringify(total))
    document.querySelector('#productosCant').innerHTML= sumaProductos(carrito);
    document.querySelector('#totalCarrito').innerHTML = `$${total}`
    resetCards('#cards')
    crearCardCarrito(carrito)
    document.querySelector('#totalCarritoPop').innerHTML = 
    `<p><span>Total de la compra:</span>$${total}</p>`
}
function quitarEl(event){
    let nodo = event.target.getAttribute("data-id")
    let indice = carrito.findIndex((index)=> index.id === nodo)
    if(carrito[indice].cantidad > 1 ){
        carrito[indice].cantidad -= 1
        actualizarDOM();
    } 
}

function agregarEl(event){
    let nodo = event.target.getAttribute("data-id")
    let indice = carrito.findIndex((index)=> index.id === nodo)
    carrito[indice].cantidad += 1
    actualizarDOM();
    }


function añadirAlCarrito(el){
    crearCard(el)
    el.forEach((producto)=>{
    let idBoton = `boton${producto.id}`
    document.getElementById(idBoton).addEventListener('click',()=>{
        const indice = el.findIndex((ver)=> ver.id === producto.id);
        localStorage.setItem('verProducto', JSON.stringify(el[indice]))
        if(producto.cantidad === undefined ){
            producto.cantidad = 1;
            carrito.push(producto)
        } else producto.cantidad += 1;
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
        actualizarDOM();
        });
    })
}

fetch('productos.json')
    .then((response)=>response.json())
    .then((productos) => {
        generadorDeSecciones(productos);
        añadirAlCarrito(productos)
        verProducto(productos)
    })
