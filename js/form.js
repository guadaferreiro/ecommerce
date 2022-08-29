let btnEnviar = document.getElementById('btn-enviar');
let btnBorrar = document.getElementById('btn-borrar');
let form = document.getElementById('form');
let enviado = document.getElementById ('enviando');
let alertError = document.getElementById ('error')

let enviadoSusc = document.getElementById ('enviadoSusc')
let susc = document.getElementById ('btnSusc').addEventListener('click', (e) => {
    e.preventDefault();

    const emailSusc = document.getElementById ('susc');

    if (emailSusc.value === "")  {
        alertError.innerHTML = `<p class="msjError">*Ingrese un email válido</p>`;
        document.getElementById ('susc').focus();
    } else {
        enviadoSusc.innerHTML= `<p class="enviado">¡Te suscribiste al shop!</p>`;

        localStorage.setItem('email', emailSusc.value);
        
        document.getElementById ('susc').value="";
        document.getElementById ('susc').focus();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

btnBorrar.addEventListener('click', (e) => {
    const nombre = document.getElementById('form-nombre');
    const correo = document.getElementById('form-correo');
    const mensaje = document.getElementById('form-mensaje');

    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    mensaje.value = "";
});

btnEnviar.addEventListener('click', (e) => {
    const nombre = document.getElementById('form-nombre');
    const correo = document.getElementById('form-correo');
    const mensaje = document.getElementById('form-mensaje');

    if (nombre.value === "" || correo.value === "" || mensaje.value === "") {
        Swal.fire({
            html:'<i class="exclamation bi bi-exclamation-triangle"></i> <p>Debes completar todos los datos</p>',
            confirmButtonColor: '#343a40',
        });
    } 
    
    if ((nombre.value.length) < 3 || (nombre.value === "")) {
        alertError.innerHTML = `<p class="msjError">*Ingrese un nombre válido</p>`;
        document.getElementById ('form-nombre').focus();
    } else if (correo.value === "")  {
        alertError.innerHTML = `<p class="msjError">*Ingrese un email válido</p>`;
        document.getElementById ('form-correo').focus();
    } else if ((mensaje.value.length < 10) || (mensaje.value === "")) {
        alertError.innerHTML = `<p class="msjError">*El mensaje debe ser superior a 10 caracteres</p>`;
        document.getElementById ('form-mensaje').focus();
    } else {
        //console.log(nombre + " " + " " + correo + " " + mensaje);
        enviado.innerHTML= `<p class="enviado">¡Gracias! Se ha enviado el mensaje</p>`;

        localStorage.setItem('nombre', nombre.value);
        localStorage.setItem('correo', correo.value);
        localStorage.setItem('mensaje', mensaje.value);

        document.getElementById ('form-nombre', ).value="";
        document.getElementById ('form-correo').value="";
        document.getElementById ('form-mensaje').value="";
        document.getElementById ('form-nombre').focus();
    };

});