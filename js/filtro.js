const lentes = document.getElementById ('button-lentes');
const carteras = document.getElementById ('button-carteras');

const filtrarProductos1 = catalogoLentes.filter(item => item.categoria === "carteras");
//console.log(filtrarProductos1); 

const filtrarProductos2 = catalogoLentes.filter(item => item.categoria === "lentes");
//console.log(filtrarProductos2);

const nuevoFiltro2 = [];
const nuevoFiltro1 = [];

lentes.addEventListener ('click',  () => {
    nuevoFiltro2.push(filtrarProductos2);
    console.log(nuevoFiltro2);
    actualizarGrid();

});

carteras.addEventListener ('click',  () => {
    nuevoFiltro1.push(filtrarProductos1);
    console.log(nuevoFiltro1);
    actualizarGrid();
});










