// Para que no haya que recargar la pagina por el formulario
document.addEventListener("DOMContentLoaded", function() {

    // Para guardar cuando alguien envie el formulariox
    const miFormulario = document.getElementById("formularioCita");

    // Para que se pueda enviar los formularios
    miFormulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Para que la pagina no se refresque sola

        // Para guardar la información de los usuarios
        let nombre = document.getElementById("nombre").value;
        let servicio = document.getElementById("servicio").value;

        //Para que el botón cambie de color y texto cuando el cliente haga la reserva
        const boton = document.getElementById("btnEnviar");
        boton.innerHTML = "¡Enviado con éxito!";/*para cambiar el texto del boton cuado se envia la cita*/
        boton.style.backgroundColor = "green";/*Para poner el boton en verde*/

        // La alerta de confirmación de la cita
        alert("Hola " + nombre + ", tu cita para " + servicio + " ha sido recibida.");

        // Para resetear el formulario a los 5s, es decir dejarlo vacío como antes
        setTimeout(() => {
            miFormulario.reset();/* para resetear los formularios */
            boton.innerHTML = "Enviar Cita";/* para volver al texto orginal*/
            boton.style.backgroundColor = "";/* para quitar el color verde y poner el que tenia*/
        }, 5000);
    });
});