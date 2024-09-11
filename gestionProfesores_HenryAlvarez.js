let = profesores = []

redirigirMenu=function(){
    window.location.assign ("index.html");
}

eliminarProfe=function() {
    let profesor = recuperarTexto("txtBuscar");
    for (let i = 0; i < profesores.length; i++) {
      if (profesores[i].email == profesor) {
        profesores.splice(i, 1);
        console.log("Profesor eliminado");
        alert("profesor eliminado");
        return;
      }
    }
  }

crearProfesor = function () {
    let valorEmail = recuperarTexto("txtEmail");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let nuevoProfe = {};
    nuevoProfe.email = valorEmail;
    nuevoProfe.nombre = valorNombre;
    nuevoProfe.edad = valorEdad;
    return nuevoProfe;
}

agregarProfesor = function () {
    let resultado = crearProfesor();
        profesores.push(resultado);
        alert("profesor agregado");
        console.log(profesores);
}

refrescarProfesor = function () {
    let cmpTabla = document.getElementById("tablasProfes");
    let contenidoTabla = "<table><tr>" +
        "<th>Email</th>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>" +
        "</tr>";
    let elemento;
    for (let i = 0; i < profesores.length; i++) {
        elemento = profesores[i];
        contenidoTabla +=
            "<tr><td>" + elemento.email + "</td>"
            + "<td>" + elemento.nombre + "</td>"
            + "<td>" + elemento.edad + "</td>"
            + "<tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

buscarProfesor = function () {
    let emailBuscar=recuperarTexto("txtBuscar");
    let elemento;
    let Encontrado = null;
    for (let i = 0; i < profesores.length; i++) {
        elemento = profesores[i];
        if (elemento.email == emailBuscar) {
            Encontrado = elemento;
            break;
        }
    }
    if(Encontrado!=null) {
        mostrarImagen("img","/GestionProfesores_Henry_Alvarez/kiki.jpeg")
        alert("Profesor encontrado")
    }else{
        alert("Profesor no encontrado")
    }
}