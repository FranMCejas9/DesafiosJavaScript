
/* Generador de cards del carrito*/
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
    } else if(e.length === 0){
        resetCards('#cards')
        document.querySelector('#cards').innerHTML = `<div class='carritoVacioContainer'><h1>Carrito Vacío</h1></div>`
    }
}


/* Eliminar todo el producto del carrito*/
const deleteProduct = (el) => {
    let indice = carrito.findIndex(indice => indice.id == el)
    carrito.splice(indice,1);
    const total = sumaCarrito(carrito);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    localStorage.setItem('totalCarrito',JSON.stringify(total))
    document.querySelector('#productosCant').innerHTML= sumaProductos(carrito);
    document.querySelector('#totalCarrito').innerHTML = `$${total}`
    resetCards('#cards')
    crearCardCarrito(carrito)
    if(carrito > 0){
        document.querySelector('#totalCarritoPop').innerHTML = 
        `<p><span>Total de la compra:</span>$${total}</p>`
    }
}


/* Sumar el precio total de los productos*/

function sumaCarrito(el){
    return el.reduce((acc,producto)=> acc + (JSON.parse(producto.precio)* producto.cantidad), 0)
}

/* Sumar la cantidad de productos */
function sumaProductos(el){
    return el.reduce((acc,producto)=> acc + producto.cantidad, 0)
}



/* Resetear DOM de las cards*/
function resetCards (selector){
    document.querySelector(selector).innerHTML = ''
}


/*Actualizar DOM de cantidad, total y cards del carrito*/
function actualizarDOM(){
    localStorage.setItem('carrito',JSON.stringify(carrito))
    const total = sumaCarrito(carrito)
    localStorage.setItem('totalCarrito',JSON.stringify(total))
    document.querySelector('#productosCant').innerHTML= sumaProductos(carrito);
    document.querySelector('#totalCarrito').innerHTML = `$${total}`
    resetCards('#cards')
    crearCardCarrito(carrito)
    if(carrito > 0){
        document.querySelector('#totalCarritoPop').innerHTML = 
        `<p><span>Total de la compra:</span>$${total}</p>`
    }
}


/*Quitar 1 unidad del producto*/
function quitarEl(event){
    let nodo = event.target.getAttribute("data-id")
    let indice = carrito.findIndex((index)=> index.id === nodo)
    if(carrito[indice].cantidad > 1 ){
        carrito[indice].cantidad -= 1
        actualizarDOM();
    } 
}

/*Aumentar 1 unidad del producto*/
function agregarEl(event){
    let nodo = event.target.getAttribute("data-id")
    let indice = carrito.findIndex((index)=> index.id === nodo)
    carrito[indice].cantidad += 1
    actualizarDOM();
    }

/* Añadir productos al carrito */
function añadirAlCarrito(el){
    crearCard(el)
    el.forEach((producto)=>{
    let idBoton = `boton${producto.id}`
    document.getElementById(idBoton).addEventListener('click',()=>{
        if(producto.cantidad === undefined){
            producto.cantidad = 1
            carrito.push(producto)
        } else if(producto.cantidad >= 1){
            producto.cantidad += 1
        }
        Toastify({
            text: `Añadiste al Carrito: ${producto.producto} ${producto.color}`,
            avatar: producto.img,
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
        actualizarDOM();
        });
    })
}
