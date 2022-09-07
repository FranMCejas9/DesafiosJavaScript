document.querySelector('#cards').innerHTML = `<div class='carritoVacioContainer'><h1>Carrito Vacío</h1></div>`
const compraFinal = JSON.parse(localStorage.getItem('compraFinal'))

function crearFactura(){
    compraFinal.forEach((producto)=>{
        document.querySelector('#compraFinalTable').innerHTML +=
        `<tr>
            <td>${producto.producto}</td>
            <td>${producto.color}</td>
            <td>X${producto.cantidad}</td>
            <td>$${producto.precio}</td>
        </tr>`
    })
}

function sumaTotal(){
    return compraFinal.reduce((acc,producto)=> acc + (JSON.parse(producto.precio)* producto.cantidad), 0)
}

function detalleDePedido(){
    document.querySelector('.detalleDePedido').innerHTML = `
    <div class = 'detalleDePedidoContenido'>
        <h3>Detalle del pedido</h3>
        <div>
            <p>Metodo de pago: tranferencia bancaria</p>
            <p>CBU: 01702046600000087865</p>
            <p>ALIAS: COMPRA.CODER.PROYECTO</p> 
            <p>Total a abonar: $${sumaTotal()}</p>
            <p>Enviar comprobante Via Whatsapp: +54 9 11 1234-5678</p> 
        </div>
    </div>
    `
}


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


fetch('../productos.json')
.then((response)=>response.json())
.then((productos) => {
    generadorDeSecciones(productos);
})


crearFactura();
sumaTotal()
detalleDePedido();
