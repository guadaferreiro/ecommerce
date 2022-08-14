const negro = document.getElementById ('button-color-negro').addEventListener ('click',  () => {console.log(nuevoFiltro)});
const marron = document.getElementById ('button-color-marron').addEventListener ('click', () => {console.log(nuevoFiltro2)});
const blanco = document.getElementById ('button-color-blanco').addEventListener ('click', () => {console.log(nuevoFiltro3)});
const verde = document.getElementById ('button-color-verde').addEventListener ('click',  () => {console.log(nuevoFiltro3)});

const nuevoFiltro = [];
const nuevoFiltro2 = [];
const nuevoFiltro3 = [];
const nuevoFiltro4 = [];

function mostrarFiltro (){
    fetch ('http://127.0.0.1:5501/stock.json')
        .then(res => res.json())
        .then (data => {
            const filtrarProductos1 = data.filter(item => item.color === "negro");
            nuevoFiltro.push(filtrarProductos1);

            const filtrarProductos2 = data.filter(item => item.color === "marron");
            nuevoFiltro2.push (filtrarProductos2);

            const filtrarProductos3 = data.filter(item => item.color === "blanco");
            nuevoFiltro3.push (filtrarProductos3);

            const filtrarProductos4 = data.filter(item => item.color === "verde");
            nuevoFiltro4.push (filtrarProductos4);
        })
}
mostrarFiltro()