function validar(){
    var rut;
    var nombres;
    var apellidos;
    var edad;
    var correo;
    var especialidad;
    var fecha;
    var hora;

    rut = document.getElementById("rut").value;
    const regexp = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
    if (rut === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (rut.match(regexp)){
    }else{
        alert("Los formatos de ingreso permitidos son: '12870631-3' o '12.870.631-3'");
        return false;
    }

    nombres = document.getElementById("nombres").value;
    const patronnombres = /[a-zA-Z]/gim;
    if (nombres === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombres.match(patronnombres)){
    }else{
        alert("Debe ingresar solo letras");
        return false;
    }
    
    apellidos = document.getElementById("apellidos").value;
    const patronapellidos = /[a-zA-Z]/gim;
    if (apellidos === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (apellidos.match(patronapellidos)){
    }else{
        alert("Debe ingresar solo letras");
        return false;
    }

    edad = document.getElementById("edad").value;
    const patronedad = /[0-9]/gim;
    if (edad === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (edad.match(patronedad)){
    }else{
        alert("Debe ingresar solo numeros");
        return false;
    }   

    correo = document.getElementById("correo").value;
    const patroncorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
    if (correo === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (correo.match(patroncorreo)){
    }else{
        alert("Los formatos de ingreso permitidos son: 'ralbornoz@gmail.com' o 'r.albornoz-ibarra@gmail.com'");
        return false;
    }

    especialidad = document.getElementById("especialidad").value;
    if (especialidad === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    fecha = document.getElementById("fecha").value;
    const patronfecha = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/i;
    if (fecha === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (fecha.match(patronfecha)){
    }else{
        alert("El formato de ingreso permitido es: 'dd-mm-yyyy'");
        return false;
    }

    hora = document.getElementById("hora").value;
    if (hora === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    alert("Estimado(a)" + " " + nombres + " " + apellidos + "," + " " + "su hora para" + " " + especialidad + " " + " ha sido reservada para el día" + " " + fecha + " " + "a las" + " " + hora + "." + " " + "Además, se le envió un mensaje a su correo" + " " + correo + " " + "con el detalle de su cita. Gracias por preferirnos.");
}