const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const total = localStorage.getItem('totalCarrito') ?? 0;
document.querySelector('#productosCant').innerHTML= carrito.length;
document.querySelector('#totalCarrito').innerHTML = `-$${total}`
document.querySelector('#totalCarritoPop').innerHTML = `<p><span>Total de la compra:</span>$${total}</p>`
crearCardCarrito(carrito)
const mostrarProducto = JSON.parse(localStorage.getItem('verProducto'))
console.log(mostrarProducto)


function sumaCarrito(parametro){
    return parametro.reduce((acc,producto)=> acc + producto.precio, 0);
}

function resetCards (selector){
    document.querySelector(selector).innerHTML = ''
}
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

document.querySelector('#productosVer').innerHTML = `
    <div class="cardProducto row">
        <div id='productoImgContainer' col-12 col-lg-7'>
            <img id='productoImg'src="${mostrarProducto.img}" alt=""></div>
        <div class='col-12 col-lg-5'>
            <div class='cardTextos'>
                <h3>${mostrarProducto.categoria}</h3>
                <p>$${mostrarProducto.precio}</p>
                <p class="color">Color: ${mostrarProducto.color}</p>
            </div>
            <div>
                <button class="btn btn-dark" id= 'idBoton${mostrarProducto.id}' onclick='añadirAlCarrito()'>Añadir al carrito</button>
            </div>
        </div>
    </div>`

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

function añadirAlCarrito(){
    carrito.push(mostrarProducto)
    const total = sumaCarrito(carrito);
    Toastify({
        text: `Añadiste al Carrito: ${mostrarProducto.categoria} ${mostrarProducto.color}`,
        avatar: mostrarProducto.img,
        duration: 3000,
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
}


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