function camposObligatorios(){
    return document.getElementById("textoreserva").innerHTML = "Todos los campos son obligatorios";
}

function reservaExitosa(){
    return document.getElementById("textoreserva").innerHTML = "Estimado(a)" + " " + nombres + " " + apellidos + "," + " " + "su hora para" + " " + especialidad + " " + " ha sido reservada para el día" + " " + fecha + " " + "a las" + " " + hora + "." + " " + "Además, se le envió un mensaje a su correo" + " " + correo + " " + "con el detalle de su cita. Gracias por preferirnos.";
}

function validar(){
    rut = document.getElementById("rut").value;
    const regexp = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
    if (rut === ""){
        camposObligatorios();
        return false;
    }
    else if (rut.match(regexp)){
    }else{
        document.getElementById("textoreserva").innerHTML = "Los formatos de rut para ingreso permitidos son: '12870631-3' o '12.870.631-3'";
        return false;
    }

    nombres = document.getElementById("nombres").value;
    const patronnombres = /[a-zA-Z]/gim;
    if (nombres === ""){
        camposObligatorios();
        return false;
    }
    else if (nombres.match(patronnombres)){
    }else{
        document.getElementById("textoreserva").innerHTML = "Nombres deben contener solo letras";
        return false;
    }
    
    apellidos = document.getElementById("apellidos").value;
    const patronapellidos = /[a-zA-Z]/gim;
    if (apellidos === ""){
        camposObligatorios();
        return false;
    }
    else if (apellidos.match(patronapellidos)){
    }else{
        document.getElementById("textoreserva").innerHTML = "Apellidos deben contener solo letras";
        return false;
    }

    edad = document.getElementById("edad").value;
    const patronedad = /[0-9]/gim;
    if (edad === ""){
        camposObligatorios();
        return false;
    }
    else if (edad.match(patronedad)){
    }else{
        document.getElementById("textoreserva").innerHTML = "Edad debe contener solo números";
        return false;
    }   

    correo = document.getElementById("correo").value;
    const patroncorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
    if (correo === ""){
        camposObligatorios();
        return false;
    }
    else if (correo.match(patroncorreo)){
    }else{
        document.getElementById("textoreserva").innerHTML ="Los formatos de ingreso para correo electronico permitidos son: 'ralbornoz@gmail.com' o 'r.albornoz-ibarra@gmail.com'";
        return false;
    }

    especialidad = document.getElementById("especialidad").value;
    if (especialidad === ""){
        camposObligatorios();
        return false;
    }

    fecha = document.getElementById("fecha").value;
    const patronfecha = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/i;
    if (fecha === ""){
        camposObligatorios();
        return false;
    }
    else if (fecha.match(patronfecha)){
    }else{
        document.getElementById("textoreserva").innerHTML ="El formato para fecha de ingreso permitido es: 'dd-mm-yyyy'";
        return false;
    }

    hora = document.getElementById("hora").value;
    if (hora === ""){
        camposObligatorios();
        return false;
    }
        reservaExitosa();
        return false;
}