const negro = document.getElementById ('button-color-negro');
const marron = document.getElementById ('button-color-marron');
const blanco = document.getElementById ('button-color-blanco');
const verde = document.getElementById ('button-color-verde');

const filtrarProductos1 = catalogoLentes.filter(item => item.color === "negro");
    //console.log(filtrarProductos1); 

const filtrarProductos2 = catalogoLentes.filter(item => item.color === "marron");
    //console.log(filtrarProductos2);

const filtrarProductos3 = catalogoLentes.filter(item => item.color === "blanco");
    //console.log(filtrarProductos3);

const filtrarProductos4 = catalogoLentes.filter(item => item.color === "verde");
    //console.log(filtrarProductos4);


const nuevoFiltro1 = [];
const nuevoFiltro2 = [];
const nuevoFiltro3 = [];
const nuevoFiltro4 = [];

negro.addEventListener ('click',  () => {
    nuevoFiltro1.push(filtrarProductos1);
    console.log(nuevoFiltro1);
    //actualizarGrid();

});

marron.addEventListener ('click',  () => {
    nuevoFiltro2.push(filtrarProductos2);
    console.log(nuevoFiltro2);
    //actualizarGrid();

});

blanco.addEventListener ('click',  () => {
    nuevoFiltro3.push(filtrarProductos3);
    console.log(nuevoFiltro3);
    //actualizarGrid();

});

verde.addEventListener ('click',  () => {
    nuevoFiltro4.push(filtrarProductos4);
    console.log(nuevoFiltro4);
    //actualizarGrid();

});












