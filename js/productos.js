const mostrarProducto = JSON.parse(localStorage.getItem('verProducto'))
console.log(mostrarProducto)

document.querySelector('#productosVer').innerHTML = `
    <div class="cardProducto">
        <img src="${mostrarProducto.img}" alt="">
        <div>
            <h3>${mostrarProducto.categoria}</h3>
            <p>${mostrarProducto.precio}</p>
            <p class="color">Color: ${mostrarProducto.color}</p>
            <button class="btn btn-dark" onclick=''>Agregar al carrito</button>
        </div>
    </div>`