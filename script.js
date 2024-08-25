function enviarFormulario() {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const dni = document.getElementById('dni').value;
    const materia = document.getElementById('materia').value;
    const comentarios = document.getElementById('comentarios').value;

    const datos = {
        nombreCompleto: nombreCompleto,
        dni: dni,
        materia: materia,
        comentarios: comentarios
    };


    console.log(datos);
}
