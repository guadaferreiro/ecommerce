let productosLentes = [
    {id: 1, nombre:"Berlin", precio: 4000 , color: "marron", imagen: "../img/lentes/lentes11.jpg" },
    {id: 2, nombre:"Buenos Aires", precio: 4250, color: "negro", imagen: "../img/lentes/lentes1.jpg"},
    {id: 3, nombre:"Viena", precio: 4500, color: "marron", imagen: "../img/lentes/lentes2.jpg"},
    {id: 4, nombre:"Copenhague", precio:3000, color:"negro", imagen: "../img/lentes/lentes3.jpg"},
    {id: 5, nombre:"Londres", precio:3250, color:"marron", imagen: "../img/lentes/lentes4.jpg"},
    {id: 6, nombre:"Moscu", precio:3500, color:"blanco", imagen:  "../img/lentes/lentes5.jpg"},
    {id: 7, nombre:"Bogota", precio:2000, color: "marron", imagen: "../img/lentes/lentes6.jpg"},
    {id: 8, nombre:"Lisboa", precio:2250, color: "celeste", imagen: "../img/lentes/lentes7.jpg"},
    {id: 9, nombre:"Londres", precio:2500, color: "marron", imagen: "../img/lentes/lentes8.jpg"},
    {id: 10, nombre:"Estocolmo", precio: 3500, color:"marron", imagen: "../img/lentes/lentes9.jpg"},
    {id: 11, nombre:"Paris", precio: 3250 , color: "verde", imagen: "../img/lentes/lentes10.jpg"},
    {id: 12, nombre:"Bangkok", precio: 3000, color: "verde", imagen: "../img/lentes/lentes.jpg"},
];

let productosCarteras = [
    {id: 13, nombre:"Venecia", precio: 6000 , color: "verde"},
    {id: 14, nombre:"Rma", precio: 6250, color: "negro"},
    {id: 15, nombre:"Milan", precio: 6500, color: "Blanco"},
    {id: 16, nombre:"Florencia", precio: 5000, color:"marron"},
    {id: 17, nombre:"Napoles", precio: 5250, color:"Rojo"},
    {id: 18, nombre:"Verona", precio: 5500, color:"Celeste"},
    {id: 19, nombre:"Genova", precio: 4000, color: "Violeta"},
    {id: 20, nombre:"Positano", precio: 4250, color: "Verde"},
    {id: 21, nombre:"Turin", precio: 4500, color: "Verde"},
    {id: 22, nombre:"Palermo", precio: 4500, color:"Negro"},
    {id: 23, nombre:"Bari", precio: 4250 , color: "Naranja"},
    {id: 24, nombre:"Lucca", precio: 4000, color: "Azul"},
];

const botonCarrito = document.querySelectorAll ('#button');

const productos = document.getElementById("productos");

let carrito = []

let gridProductos = () => {
    return (productos.innerHTML = productosLentes.map ((item)=>{
        return ` 
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div class="card card-border">
                    <img src=${item.imagen} class="card-img-top w-100 shadow-1-strong rounded mb-4" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">${item.nombre}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">$ ${item.precio}</h6>
                        <a href="#" id="button" class="btn btn-outline-dark"><i class="bi bi-bag"></i></a>
                    </div>
                </div>
            </div>  
        `
    }).join(""));

};
gridProductos();

/*
botonCarrito.forEach (btn => {
    btn.addEventListener('click', agregarAlCarrito)
});


function agregarAlCarrito (e) {
    const boton = e.target;
    const item = boton.closest('.card');
    const itemTitulo = item.querySelector ('.card-title').textContent;
    const itemPrecio = item.querySelector ('.card-subtitle').textContent;
    const itemImg = item.querySelector ('.card-img-top').src;

    const nuevoCarrito = {
    titulo: itemTitulo,
    precio: itemPrecio,
    imagen: itemImg,
    cantidad: 1
    };

    agregarAlCarrito(nuevoCarrito);
}

function agregarAlCarrito (nuevoCarrito) {
    carrito.push(nuevoCarrito);
}

console.log(carrito);
*/










