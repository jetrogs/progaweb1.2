function genera_rfc() {
    var nombre = document.getElementById("nombre").value.trim().toUpperCase();
    var apellidoPaterno = document.getElementById("ap").value.trim().toUpperCase();
    var apellidoMaterno = document.getElementById("am").value.trim().toUpperCase();
    var anio = document.getElementById("anio").value.trim();
    var mes = document.getElementById("mes").value.trim();
    var dia = document.getElementById("dia").value.trim();

    // Calcular el RFC
    var rfc = apellidoPaterno.substring(0, 2) + apellidoMaterno.substring(0, 1) + nombre.substring(0, 1) +
        anio.substring(2, 4) + mes.padStart(2, '0') + dia.padStart(2, '0');

    // Mostrar el RFC
    document.getElementById("resultado").value = rfc;
}
