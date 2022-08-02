const open = document.getElementById ('open');
const modal = document.getElementById ('modal-container');
const close = document.getElementById ('close');

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



let productos = document.getElementById("productos");

let gridProductos = () => {
    productos.innerHTML = productosLentes.map ((item)=>{
        return ` 
        <div id=product-id${item.id} class="card">
            <img src=${item.imagen} class="card-img" alt=""/>
            <div class="card-body">
                <h5 class="card-title"> ${item.nombre}</h5>
                <p class="card-price">$ ${item.precio}</p>
                <a href="#" class="add-card"><i class="bi bi-bag-plus"></i></a>
            </div>
        </div> 
        `
    }).join("");

    
};
gridProductos();


let botonAgregar = document.querySelectorAll (".add-card");

for (let i = 0; i < botonAgregar.length; i++) {
    botonAgregar[i].addEventListener ('click', () => {
        itemsCarrito()
    });
    
}

function itemsCarrito () {
    let productosCarro = localStorage.getItem('itemsCarrito');
    //console.log(productosCarro);

    productosCarro = parseInt (productosCarro)
    localStorage.setItem('itemsCarrito' , 1);
}







open.addEventListener ('click', () => {
    modal.classList.add('show');
})

close.addEventListener ('click', () => {
    modal.classList.remove('show');
})