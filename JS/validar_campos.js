
//ejercicio numero1
//a
function cupo(cupomin,cupomax) {
    if (cupomax<cupomin) {
       alert("El cupo minimo es mayor que el cupo maximo");
       return false;
    } else {
        //alert("todo viento");
    }
}
//console.log(cupo(2,4))



//b

function validarFecha(fecinicial,fecfinal,mensage) {
    let date1 = new Date(fecinicial);
    let date2 = new Date(fecfinal);

    if (date2<date1) {
       alert(mensage);
       return false;
    } else {
        //alert("todo viento");
    }
}
//console.log(validarFecha("Aug 1, 2019","Aug 2, 2019"))



//c

function validarContrasenia(cont) {
    if (cont.length > 8 || cont.length < 6) {
       alert("Su contraseña debe tener entre 6 y 8 caracteres");
       return false;
    } 

}
//console.log(validarContrasenia("123456"));


//d
function validarReingreso(cont,recon) {
    if (cont != recon) {
       alert("Usted ingreso claves diferentes");
       return false;
    } else {
        //resultado = alert("todo viento");
    }
}
//console.log(validarReingreso("franco7","franco7"));


//ejercicio 2 

function validargestion() {
    var fechadesde,fechaHasta,cupoMaximo,cupoMinimo
    fechadesde=document.getElementById("fechaDesde").value;
    fechaHasta=document.getElementById("fechaHasta").value;
    cupoMaximo=document.getElementById("cupoMaximo").value;
    cupoMinimo=document.getElementById("cupoMinimo").value;
    fechaLimiteInscripcion=document.getElementById("fechaLimiteInscripcion").value;

    var fecha = new Date();//fecha actuall del sistema
    cupo(cupoMinimo,cupoMaximo);
    validarFecha(fechadesde,fechaHasta,"La fecha hasta que se se dicta el curso debe ser mayor a la fecha en que inicia");
    validarFecha(fechaLimiteInscripcion,fecha,"La fecha limite de inscripcion debe ser menor que facha actual");
    
}

//ejercicio 3 
function validarregistro() {
    contrasenia= document.getElementById("contrasenia").value;
    contraseniaNueva = document.getElementById("contraseniaNueva").value;
    contraseniaNueva2= document.getElementById("contraseniaNueva2").value;

    validarContrasenia(contrasenia);
    validarReingreso(contraseniaNueva,contraseniaNueva2);

}

