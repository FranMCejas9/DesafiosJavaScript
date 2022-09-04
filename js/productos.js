const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const total = localStorage.getItem('totalCarrito') ?? 0;
document.querySelector('#productosCant').innerHTML= sumaProductos(carrito);
document.querySelector('#totalCarrito').innerHTML = `-$${total}`
document.querySelector('#totalCarritoPop').innerHTML = `<p><span>Total de la compra:</span>$${total}</p>`
crearCardCarrito(carrito)
const mostrarProducto = JSON.parse(localStorage.getItem('verProducto'))




/* Generador de secciones*/
function generadorDeSecciones(el){
    let secciones = new Set (el.map(producto =>{
        return producto.categoria
    }))
    let seccionesFiltrado = [...secciones];
    seccionesFiltrado.forEach(seccion=>{
        /* Crear secciones en el navBar*/
        document.querySelector('#navEnlaces').innerHTML += 
        `<li class="nav-item">
            <a class="nav-link" href="../index.html#${seccion}Container">${seccion}</a>
        </li>`
    })
}




/* Generar cards en el body */
document.querySelector('#productosVer').innerHTML = `
    <div class="cardProducto row">
        <div id='productoImgContainer' col-12 col-lg-7'>
            <img id='productoImg'src="${mostrarProducto.img}" alt="${mostrarProducto.producto}${mostrarProducto.color}"></div>
        <div class='col-12 col-lg-5'>
            <div class='cardTextos'>
                <h3>${mostrarProducto.producto}</h3>
                <p>$${mostrarProducto.precio}</p>
                <p class="color">Color: ${mostrarProducto.color}</p>
            </div>
            <div>
                <button class="btn btn-dark" id= 'idBoton${mostrarProducto.id}' onclick='añadirAlCarrito()'>Añadir al carrito</button>
            </div>
        </div>
    </div>`



    

/*Zoom en imagen del producto*/
let productoImgContainer = document.getElementById('productoImgContainer')
let productoImg = document.getElementById('productoImg')

productoImgContainer.addEventListener('mousemove', function (event){ 
    clientX = event.clientX - productoImgContainer.offsetLeft;
    clientY = event.clientY - productoImgContainer.offsetTop;

    mWidth = productoImgContainer.offsetWidth;
    mHeight = productoImgContainer.offsetHeight;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;
    
    productoImg.style.transform = `translate(-${clientX}%,-${clientY}%) scale(1.4)`
});

productoImgContainer.addEventListener('mouseleave', function(){
    productoImg.style.transform = 'translate(-50%,-50%) scale(1)'
})


fetch('../productos.json')
.then((response)=>response.json())
.then((productos) => {
    generadorDeSecciones(productos);
    añadirAlCarrito(productos)
})
