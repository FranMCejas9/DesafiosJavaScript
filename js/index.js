
const productos = [
    { 
        id: 1,
        img: 'blanco.jpg',
        producto: 'gorro',
        color : 'blanco',
        precio : 1000
    },
    {
        id: 2,
        img: 'mostaza.jpg',
        producto:'gorro',
        color : 'mostaza',
        precio: 1000
    },
    {
        id: 3,
        img: 'rojo.jpg',
        producto:'gorro',
        color: 'rojo',
        precio: 1000
    },
    {
        id: 4,
        img: 'verdelimon.jpg',
        producto:'gorro',
        color : 'verde limón',
        precio: 1000
    },
    {
        id: 5,
        img: 'azul.jpg',
        producto:'cartera',
        color : 'azul',
        precio: 1200
    },
    {
        id: 6,
        img: 'lila.jpg',
        producto:'cartera',
        color : 'lila',
        precio: 1200
    },
    {  
        id: 7,
        img: 'negra.jpg',
        producto:'cartera',
        color : 'negra',
        precio: 1200
    },
    {
        id: 8,
        img: 'rosa.jpg',
        producto:'cartera',
        color : 'rosa',
        precio: 1200
    },
    {
        id: 9,
        img: 'negra.jpg',
        producto:'bandolera',
        color : 'negra',
        precio: 1400
    },
    {
        id: 10,
        img: 'blanca.jpg',
        producto:'bandolera',
        color : 'blanca',
        precio: 1400
    },
    {
        id: 11,
        img: 'marron.jpg',
        producto:'bandolera',
        color : 'marrón',
        precio: 1400
    },
    {
        id: 12,
        img: 'verde.jpg',
        producto:'bandolera',
        color : 'verde',
        precio: 1400
    }
]

const carrito = [];

let idBoton = ''

productos.forEach((producto)=>{
    idBoton = `idBoton${producto.id}`
    switch(producto.producto){
        case 'gorro':
        let gorrosContainer = document.querySelector('#gorros');
        gorrosContainer.innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4 p-3 articulos" data-aos="fade-up">
            <img class="w-100" src="../img/gorros/${producto.img}" alt="gorro color ${producto.color}">
            <div class="articulosColor">
                <h5>${producto.color}</h5>
            </div>
        <div class="">
            <p class=" productoPrecio ">$${producto.precio}</p>
            <button class="btn btn-dark" id="${idBoton}">Agregrar al carrito</button">
        </div>
        </div>`;
        break
        case 'cartera':
        let carteraContainer  = document.querySelector('#carteras')
        carteraContainer.innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4 p-3 articulos" data-aos="fade-up">
            <img class="w-100" src="../img/carteras/${producto.img}" alt="cartera color ${producto.color}">
            <div class="articulosColor">
                <h5>${producto.color}</h5>
            </div>
        <div class="">
            <p class=" productoPrecio ">$${producto.precio}</p>
            <button class="btn btn-dark" id="${idBoton}">Agregrar al carrito</button">
        </div>
        </div>`
        break
        case 'bandolera':
        let bandoleraContainer  = document.querySelector('#bandoleras')
        bandoleraContainer.innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4 p-3 articulos" data-aos="fade-up">
            <img class="w-100" src="../img/bandoleras/${producto.img}" alt="bandolera color ${producto.color}">
            <div class="articulosColor">
                <h5>${producto.color}</h5>
            </div>
        <div class="">
            <p class=" productoPrecio ">$${producto.precio}</p>
            <button class="btn btn-dark" id="${idBoton}">Agregrar al carrito</button">
        </div>
        </div>`;
        break
    }
})

for (let producto of productos){
    idBoton = `idBoton${producto.id}`;
    document.getElementById(idBoton).addEventListener('click',()=>{
        carrito.push(producto)
        document.querySelector('#productosCant').innerHTML=`${carrito.length}`
        alert(`agregaste al carrito ${producto.producto} ${producto.color}`)
        console.log(carrito)
        })
};