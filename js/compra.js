let btnCompra = document.getElementById ('btn-comprar');

const precioTotal = document.getElementById('precioTotal');
const produTotal = document.getElementById('productosTotal');

function venta (){
    location.href = "../pages/compra.html"
}

const div = document.createElement('div')
div.innerHTML = `
<div>
    <div>
        <h5 class="carrito-price mt-5">Total a pagar: $<span id="precioTotal">0</span></h5>

        <p class="text-center mt-5 mb-5">Para continuar con la compra complete los siguientes datos</p>
        <form class="form formCompra text-center" id="form">
        <div class=" form-group col-lg-4">
            <label for="nombre" class="text-center fw-light lh-base fs-5 style-parrafos form-label">Nombre y Apellido</label>
            <input type="text" class="form-control" id="nombre">
        </div>

        <div class="form-group col-lg-4">
            <label for="correo" class="text-center fw-light lh-base fs-5 style-parrafos form-label">Correo Electronico</label>
            <input type="email" class="form-control" id="correo">
        </div>

        <div class=" form-group col-lg-4 mt-3">
            <button type="button" class="button btn btn-outline-light" id="btn-pagar" data-bs-toggle="modal" data-bs-target="#myModal" onclick="pagar()"> Enviar</button>
        </div>
        </form>
    </div>
</div> 
`
ticket.appendChild(div)

function pagar(){
    const nombre1 = document.getElementById('nombre');
    const correo1 = document.getElementById('correo');
    let text;

    if (nombre1.value === "" || correo1.value === "" ) {
        Swal.fire({
            html:'<i class="exclamation bi bi-exclamation-triangle"></i> <p>Debes completar todos los datos</p>',
            confirmButtonColor: '#343a40',
        })
    } else  {
        Swal.fire({
            text: 'Será redireccionado a la forma de pago',
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick : false,
            allowEscapeKey : false,
            allowEnterKey : false,
            stopKeydownPropagation : false
        })

        localStorage.setItem('nombre', nombre1.value);
        localStorage.setItem('correo', correo1.value);
    };
}
