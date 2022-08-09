const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contador-Carrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const produTotal = document.getElementById('productosTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

const productos = document.getElementById ('contenedor-productos')

fetch("stock.json")
    .then(res => res.json())
    .then(data => {

    const actualizarGrid = () => {
        data.forEach(item => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div id=product-id${item.id} class="card card-border">
            <img src=${item.imagen} class="card-img" alt= "">
            <div class="card-body">
                <h3 class="card-title">${item.nombre}</h3>
                <p class="card-price">$ ${item.precio}</p>

                <button id="agregar${item.id}" class="boton-agregar">
                    <i class="bi bi-bag-plus"></i>
                </button>
            </div>
        </div> 
        `
        productos.appendChild(div)

        const boton = document.getElementById(`agregar${item.id}`)

        boton.addEventListener('click', () => {

            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                gravity: 'bottom',
                position: 'center',
                className: "toastify"
            }).showToast();


            agregarAlCarrito(item.id)

            })
        });
    }
    actualizarGrid();

    const agregarAlCarrito = (prodId) => {
        const encontrar = carrito.some (prod => prod.id === prodId) 
    
        if (encontrar){ 
            const x = carrito.map (prod => { 
               // console.log(x);
                if (prod.id === prodId){
                    prod.stock++
                }
            })
        } else {
            const item = data.find((prod) => prod.id === prodId)
            carrito.push(item)
        }
    
        actualizarCarrito()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 

    actualizarCarrito()

    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <img class="img-modal" src=${producto.imagen}>  </img>
        <p>${producto.nombre}</p>
        <p>Precio: $ ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad"> ${producto.stock} </span></p>
        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class="bi bi-trash3"></i></button>
        `
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = (carrito.length) 

    //console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.stock * prod.precio, 0);
    //produTotal.innerText = carrito.reduce((acc, prod) => acc + prod.stock++, 0);

    contadorCarrito.innerText = produTotal.innerText = carrito.reduce((acc, prod) => acc + prod.stock, 0);

}