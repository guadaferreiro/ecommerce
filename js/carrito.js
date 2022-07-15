class Productos{
    constructor (id, nombre, precio, categoria, color){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.color = color;
    }

    propiedades(){
        return "Id: " +
        this.id + 
        " Producto: " +
        this.nombre +
        " Precio: " +
        this.precio + 
        " Color: " +
        this.color + "\n"
    }
}

function compra(nombre, email, tel, carrito){
    let sumaCompra = carrito.reduce ((acc, item) => item.precio + acc, 0);
    alert ("Gracias" + nombre +  " por tu compra! \n Total a pagar: $" +  sumaCompra);
}

let productos = [
    new Productos(001, "Bandolera XL", 6000, "carteras", "Negro" ),
    new Productos(002, "Cartera Crocco", 6500, "carteras", "Verde"),
    new Productos(003, "Lentes Ray Ban", 4200, "lentes", "Marron" ),
    new Productos(004, "Lentes Reef", 4300, "lentes", "Negro" ),
];

let categorias = ["carteras", "lentes"];

let carrito = [];

let categoria = "";

while (categoria != "salir" && categoria != null){ 
    let union = categorias.join(", ")
    categoria = prompt('Ingrese una categoria para comprar o ingrese "salir": \n\n ' + union + "")
    if (categoria != "salir" && categoria != null) {
        let filtrado = productos.filter(item => item.categoria == categoria);

        let caja = "";
        for (let i = 0; i<filtrado.length; i++){
            caja += filtrado[i].propiedades();
        }

        let seleccion = parseInt (prompt ("Seleccione id del producto ha comprar \n\n" + caja ));

        let productoCarrito = filtrado.find(item => item.id == seleccion);
        //console.log(productoCarrito);

        if (productoCarrito) {
            carrito.push(productoCarrito);
        }
    }
}

if(carrito.length > 0){
    alert ("Ingrese sus datos para terminar su compra ");
    let nombre = prompt ("Ingrese su nombre");
    let email = prompt ("Ingrese su email");
    let tel = prompt ("Ingrese su tel");
    compra(nombre, email, tel, carrito);
}
