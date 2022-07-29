
function descuento(valor){
    return valor - (valor*0.20)
}
let contenedor = document.querySelector('#containerProduct');
function escribirHTML (producto,color,precio,cantidad){
    let productorAgregado = document.createElement('div')
    productorAgregado.innerHTML = `<h2>Producto: ${producto}</h2>
    <p>Color: ${color}</p>
    <p>Precio: ${precio}</p>
    <p>Cantidad: ${cantidad}</p>`
    contenedor.appendChild(productorAgregado)
}


const productos = [
    { 
        producto: 'gorro',
        color : 'rosa',
        precio : 1000
    },
    {
        producto:'gorro',
        color : 'aqua',
        precio: 1000
    },
    {
        producto:'gorro',
        color: 'mostaza',
        precio: 1000
    },
    {
        producto:'gorro',
        color : 'arena',
        precio: 1000
    },
    {
        producto:'cartera',
        color : 'blanca',
        precio: 1200
    },
    {
        producto:'cartera',
        color : 'marron',
        precio: 1200
    },
    {
        producto:'cartera',
        color : 'negra',
        precio: 1200
    },
    {
        producto:'bandolera',
        color : 'blanca',
        precio: 1400
    },
    {
        producto:'bandolera',
        color : 'negra',
        precio: 1400
    }
]

const carritoProductos = []

let pregunta = prompt('Quieres ver la lista de productos? (Seleccionar si o no)')

if(pregunta === 'si'){
    let listaProductos = productos.map((el)=> `
    Producto: ${el.producto}  Color: ${el.color}  Precio:${el.precio}`)
    alert(`Ésta es nuestra lista de productos: ${listaProductos.join('')}`)
}
else if (pregunta === 'no'){
    alert('Gracias por visitarnos, hasta pronto')
}

while(pregunta != 'no'){
    let producto = prompt('agregue un producto al carrito')
    let precio = 0
    let color = 0 
    if (producto === 'gorro'|| producto === 'cartera' || producto === 'bandolera'){
        switch(producto){
            case 'gorro':
                pregunta = prompt('seleccione un color');
                if(pregunta == 'rosa' ||pregunta == 'aqua' ||pregunta == 'mostaza' ||pregunta == 'arena'){
                    switch(pregunta){
                        case 'rosa':
                        color = 'rosa'
                        break
                        case 'aqua':
                        color = 'aqua'
                        break
                        case 'mostaza':
                        color = 'mostaza'
                        break
                        case 'arena':
                        color = 'arena'
                        break
                    }
            precio = 1000
            break
                }
            case 'bandolera':
                pregunta = prompt('seleccione un color');
                if(pregunta == 'blanca' ||pregunta == 'negra'){
                    switch(pregunta){
                        case 'blanca':
                        color = 'rosa'
                        break
                        case 'negra':
                        color = 'negra'
                        break
                    }
            precio = 1400
            break
                    }
            case 'cartera':
                pregunta = prompt('seleccione un color');
                if(pregunta == 'blanca' ||pregunta == 'marron' ||pregunta == 'negra'){
                    switch(pregunta){
                        case 'blanca':
                        color = 'blanca'
                        break
                        case 'marron':
                        color = 'marron'
                        break
                        case 'negra':
                        color = 'negra'
                        break
                    }
                }
            precio = 1200
            break
            }
            let unidades = parseFloat(prompt('cuantás unidades quiere llevar?'));
            carritoProductos.push({producto, color, unidades, precio})
        }else {
            alert('Producto no encontrado')
        }  
    pregunta = prompt('desea agregar otro producto? Seleccione si o no')
}
    alert('Gracias por su compra')
    carritoProductos.forEach((el)=>{
    escribirHTML(el.producto,el.color,el.precio,el.unidades)})
    const total = carritoProductos.reduce((acc,el)=> acc + el.precio*el.unidades, 0);
    let totalCompra = document.querySelector('#totalCompra')
    let sumaTotal = document.createElement('div')
    sumaTotal.innerHTML = `<p>Total de compra: $${total}</p>`;
    totalCompra.appendChild(sumaTotal)
